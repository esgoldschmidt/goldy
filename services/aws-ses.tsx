// aws-ses.js
import * as AWS from "aws-sdk";
import * as nodemailer from "nodemailer";

AWS.config.update({
    accessKeyId: process.env.AMAZON_ACCESS_KEY,
    secretAccessKey: process.env.AMAZON_SECRET_KEY,
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

export const sendMail = async (userEmail: string, subject: string, body: string): Promise<{ ok: boolean; msg?: string }> => {
    try {
        const response = await transporter.sendMail({
            from: adminMail,
            to: userEmail,
            subject: subject,
            html: body,
        });
        return response?.messageId
        ? { ok: true }
        : { ok: false, msg: "Failed to send email" };
    } catch (error) {
        return { ok: false, msg: "Failed to send email" };
    }
};