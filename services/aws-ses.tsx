// aws-ses.ts
import AWS from "aws-sdk"
import nodemailer from "nodemailer"

/**
 * NOTE:
 * Do NOT set accessKeyId/secretAccessKey here.
 * In Amplify/SSR, the Lambda runtime provides credentials automatically via IAM role.
 */

const REGION = process.env.AWS_REGION ?? "us-east-1"
const FROM_EMAIL = "hello@ericgoldschmidt.com"

function getTransporter() {
  const ses = new AWS.SES({ apiVersion: "2010-12-01", region: REGION })
  return nodemailer.createTransport({ SES: ses })
}

export async function sendMail(opts: {
  to: string
  subject: string
  html: string
  replyTo?: string
}): Promise<{ ok: boolean; msg?: string; code?: string }> {
  try {
    const transporter = getTransporter()

    const info = await transporter.sendMail({
      from: FROM_EMAIL,
      to: opts.to,
      subject: opts.subject,
      html: opts.html,
      replyTo: opts.replyTo,
    })

    return info?.messageId ? { ok: true } : { ok: false, msg: "No messageId returned" }
  } catch (error: any) {
    console.error("sendMail SES error:", error)
    return { ok: false, msg: error?.message ?? "Failed to send email", code: error?.code }
  }
}
