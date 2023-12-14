import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const localEmail = process.env.EMAIL;
const password = process.env.EMAIL_Pass;

export const POST = async (req) => {
  try {
    const { name, email, message } = await req.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: localEmail,
        pass: password,
      },
      debug: true,
    });

    const mailOptions = {
      from: email,
      to: localEmail,
      subject: ` New Contact From Portfolio by ${name}`,
      html: `<html>
      <body>
      <h4>Name: ${name}</h4>
      <h4>Email: ${email}</h4>
      <h4>Message: <p>${message}</p></h4>
      </body>
      </html>`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      error: "Email could not be sent",
    });
  }
};
