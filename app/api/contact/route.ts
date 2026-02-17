import { NextResponse } from "next/server"
import { sendMail } from "@/services/aws-ses"// adjust path

export async function POST(request: Request) {
  const data = await request.json()

  const subject = `Goldy Form Submitted by ${data.firstName} ${data.lastName}`
  const html = `...`

  const result = await sendMail({
    to: "esgoldschmidt@gmail.com",
    subject,
    html,
    replyTo: data.email,
  })

  if (!result.ok) {
    return NextResponse.json({ statusText: "Message failed to send", ...result }, { status: 500 })
  }

  return NextResponse.json({ statusText: "Message sent successfully" }, { status: 200 })
}
