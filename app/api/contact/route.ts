'use server'
import * as AWS from "aws-sdk";
import * as nodemailer from "nodemailer";
import { NextApiResponse } from 'next';
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    
    const data = await request.json();

    const accessKey = process.env.AMAZON_ACCESS_KEY
    const secretKey = process.env.AMAZON_SECRET_KEY

    console.log("ENV CHECK", {
        hasAccessKey: !!process.env.AMAZON_ACCESS_KEY,
        hasSecret: !!process.env.AMAZON_SECRET_KEY,
    });

    AWS.config.update({
        accessKeyId: accessKey,
        secretAccessKey: secretKey,
        region: "us-east-1",
    });
    AWS.config.getCredentials(function (error) {
        if (error) {
            console.log(error.stack);
        }
    });
    const ses = new AWS.SES({ apiVersion: "2010-12-01" });

    // change this to the "to" email that you want
    const adminMail = "hello@ericgoldschmidt.com";
    // Create a transporter of nodemailer
    const transporter = nodemailer.createTransport({
        SES: ses, 
    });

    const subject = `Goldy Form Submitted by ${ data.firstName } ${ data.lastName }`

    const body = 
    `<div style='flex-wrap: wrap; width:100%;; max-width:800px;'>
        <div className="flex flex-col"  style="justify-content:center; align-items:center">
            <div style='padding: 0.5em 2em; color:#00004C; font-size: 16px;'>
                <p>Hello,</p>
                <p className="indent-1"> You have received a new message through The Goldy website: </p>
                <ul>
                    <li>Name: ${ data.firstName } ${ data.lastName } </li>
                    <li>Email: ${ data.email }</li>
                    <li>Organization: ${ data.org }</li>
                    <li>Message: ${ data.message }</li>
                </ul>
                <p>This is an automated message</p>
            </div>
        </div>
    </div>
    `

    try{
        const mail = await transporter.sendMail({
            from: adminMail,
            to: 'esgoldschmidt@gmail.com',
            replyTo: data.email,
            subject: subject,
            html: body,
        });
       const res = NextResponse.json({
            statusText: "Message sent successfully"
          }, {
            status: 200,
          })
        return res;
        
    } catch(error){
       const res = NextResponse.json({
            statusText: "Message failed to send"
          }, {
            status: 500,
          })
        return res;
    }
}