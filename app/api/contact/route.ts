import { NextResponse } from "next/server";
import { sendMail } from "@/services/aws-ses";
import * as Yup from "yup";

const contactUsValidationSchema = Yup.object({
  email: Yup.string().email("Invalid Email").max(75).required(),
  firstName: Yup.string().min(2).max(50).required(),
  lastName: Yup.string().min(2).max(50).required(),
  org: Yup.string().min(2).max(50).required(),
  message: Yup.string().min(3).max(600).required(),
  website: Yup.string().max(200).optional(),
  formStartedAt: Yup.number().nullable().optional(),
});

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function looksSpammy(message: string) {
  const lower = message.toLowerCase();

  const spamSignals = [
    "seo",
    "boost your traffic",
    "google ranking",
    "casino",
    "crypto",
    "backlinks",
    "telegram",
    "whatsapp",
  ];

  const linkCount = (message.match(/https?:\/\//gi) || []).length;

  if (linkCount >= 3) return true;
  if (spamSignals.some((term) => lower.includes(term))) return true;

  return false;
}

function isGibberish(text: string) {
  if (!text) return true;

  const trimmed = text.trim();

  // too short = suspicious
  if (trimmed.length < 10) return true;

  // no spaces = very likely bot
  if (!trimmed.includes(" ")) return true;

  // too many uppercase letters
  const upperRatio =
    (trimmed.match(/[A-Z]/g)?.length || 0) / trimmed.length;

  if (upperRatio > 0.6) return true;

  return false;
}

function suspiciousEmail(email: string) {
  const local = email.split("@")[0];

  // too many dots/numbers
  if ((local.match(/[.\d]/g) || []).length > local.length * 0.5) {
    return true;
  }

  return false;
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    await contactUsValidationSchema.validate(data, { abortEarly: false });

    const {
      email,
      firstName,
      lastName,
      org,
      message,
      website,
      formStartedAt,
    } = data;

    // Honeypot trap
    if (website && website.trim() !== "") {
      return NextResponse.json(
        { statusText: "Message sent successfully" },
        { status: 200 }
      );
    }

    // Time trap: reject very fast submissions
    if (
      typeof formStartedAt === "number" &&
      Date.now() - formStartedAt < 3000
    ) {
      return NextResponse.json(
        { statusText: "Message sent successfully" },
        { status: 200 }
      );
    }

    // Lightweight spam filter
    if (looksSpammy(message)) {
      return NextResponse.json(
        { statusText: "Message sent successfully" },
        { status: 200 }
      );
    }

    if (isGibberish(message)) {
      return NextResponse.json(
        { statusText: "Message sent successfully" },
        { status: 200 }
      );
    }

    if (suspiciousEmail(email)) {
      return NextResponse.json(
        { statusText: "Message sent successfully" },
        { status: 200 }
      );
    }

    const safeFirstName = escapeHtml(firstName.trim());
    const safeLastName = escapeHtml(lastName.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeOrg = escapeHtml(org.trim());
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br/>");

    const subject = `Goldy Form Submitted by ${safeFirstName} ${safeLastName}`.trim();

    const html = `
      <div>
        <p><b>Name:</b> ${safeFirstName} ${safeLastName}</p>
        <p><b>Email:</b> ${safeEmail}</p>
        <p><b>Organization:</b> ${safeOrg}</p>
        <p><b>Message:</b><br/>${safeMessage}</p>
      </div>
    `;

    const result = await sendMail({
      to: "esgoldschmidt@gmail.com",
      subject,
      html,
      replyTo: safeEmail,
    });

    if (!result.ok) {
      return NextResponse.json(
        { statusText: "Message failed to send", ...result },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { statusText: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("contact route error:", error);

    return NextResponse.json(
      { statusText: "Message failed to send", msg: error?.message },
      { status: 500 }
    );
  }
}