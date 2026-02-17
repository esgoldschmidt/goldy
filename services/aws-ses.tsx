// services/aws-ses.ts
import AWS from "aws-sdk"
import nodemailer from "nodemailer"

const REGION = process.env.AWS_REGION ?? "us-east-1"
const FROM_EMAIL = "hello@ericgoldschmidt.com"

function getSes() {
  const accessKeyId = process.env.AMAZON_ACCESS_KEY
  const secretAccessKey = process.env.AMAZON_SECRET_KEY

  if (accessKeyId && secretAccessKey) {
    return new AWS.SES({
      apiVersion: "2010-12-01",
      region: REGION,
      credentials: { accessKeyId, secretAccessKey },
    })
  }

  // Amplify runtime role credentials
  return new AWS.SES({ apiVersion: "2010-12-01", region: REGION })
}

export async function sendMail(opts: {
  to: string
  subject: string
  html: string
  replyTo?: string
}): Promise<{ ok: boolean; msg?: string; code?: string; messageId?: string }> {
  try {
    const transporter = nodemailer.createTransport({ SES: getSes() })

    const info = await transporter.sendMail({
      from: FROM_EMAIL,
      to: opts.to,
      subject: opts.subject,
      html: opts.html,
      replyTo: opts.replyTo,
    })

    return { ok: true, messageId: info?.messageId }
  } catch (error: any) {
    console.error("sendMail SES error:", error)
    return { ok: false, msg: error?.message ?? "Failed to send email", code: error?.code }
  }
}
