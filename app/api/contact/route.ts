import { NextResponse } from "next/server"
import { sendMail } from "@/services/aws-ses"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const subject = `Goldy Form Submitted by ${data.firstName ?? ""} ${data.lastName ?? ""}`.trim()
    const html = `
      <div>
        <p><b>Name:</b> ${data.firstName ?? ""} ${data.lastName ?? ""}</p>
        <p><b>Email:</b> ${data.email ?? ""}</p>
        <p><b>Organization:</b> ${data.org ?? ""}</p>
        <p><b>Message:</b><br/>${(data.message ?? "").replace(/\n/g, "<br/>")}</p>
      </div>
    `

    const result = await sendMail({
      to: "esgoldschmidt@gmail.com",
      subject,
      html,
      replyTo: data.email,
    })

    if (!result.ok) {
      return NextResponse.json(
        { statusText: "Message failed to send", ...result },
        { status: 500 }
      )
    }

    return NextResponse.json({ statusText: "Message sent successfully" }, { status: 200 })
  } catch (error: any) {
    console.error("contact route error:", error)
    return NextResponse.json(
      { statusText: "Message failed to send", msg: error?.message },
      { status: 500 }
    )
  }
}
