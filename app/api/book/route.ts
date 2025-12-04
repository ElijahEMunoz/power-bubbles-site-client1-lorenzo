import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      address,
      service,
      date,
      time,
      details,
    } = body;

    // Email content sent to YOU (Elijah)
    const emailHtml = `
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Service Needed:</strong> ${service}</p>
      <p><strong>Preferred Date:</strong> ${date}</p>
      <p><strong>Best Time to Reach:</strong> ${time}</p>
      <p><strong>Additional Details:</strong><br>${details}</p>
    `;

    const data = await resend.emails.send({
      from: process.env.BOOKING_FROM_EMAIL!,
      to: process.env.BOOKING_TO_EMAIL!,
      subject: "New Pressure Wash Booking Request",
      html: emailHtml,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("BOOKING API ERROR:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
