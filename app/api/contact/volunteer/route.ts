import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      name,
      phone,
      email,
      city,
      interest,
      about,
    } = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "hello.printeda@gmail.com", // NGO email baad me
      subject: `🤝 New Volunteer Application - ${name}`,
      html: `
        <h2>New Volunteer Application</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Interest Area:</strong> ${interest}</p>

        <hr/>

        <p><strong>About:</strong></p>
        <p>${about}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}