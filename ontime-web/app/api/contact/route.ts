import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// UK phone number validation:
// Supports formats like:
// +44 7123 456789, +447123456789, 07123 456789, 07123456789, 020 7946 0991, 01234 567890, etc.
function isValidUKPhoneNumber(phone: string): boolean {
  const cleaned = phone.replace(/[\s()-]/g, "");
  // Must match either:
  // +44 followed by 10 digits (starting with 1-9)
  // 0044 followed by 10 digits (starting with 1-9)
  // 0 followed by 10 digits (starting with 1, 2, 3, 7, 8)
  return /^(?:(?:\+44|0044)[1-9]\d{9}|0[12378]\d{9})$/.test(cleaned);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      propertyType,
      serviceCategory,
      preferredDate,
      details,
    } = body;

    // Validate essential fields - all fields must be filled
    if (
      !fullName?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !propertyType?.trim() ||
      !serviceCategory?.trim() ||
      !preferredDate?.trim() ||
      !details?.trim()
    ) {
      return NextResponse.json(
        { error: "Please fill in all required fields before submitting." },
        { status: 400 }
      );
    }

    // UK Phone Number validation
    if (!isValidUKPhoneNumber(phone)) {
      return NextResponse.json(
        { error: "Please provide a valid UK phone number (e.g., +44 7438 463543." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const recipientEmail = process.env.RECIPIENT_EMAIL;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <div style="border-bottom: 2px solid #0284c7; padding-bottom: 16px; margin-bottom: 20px;">
          <h2 style="color: #0f172a; margin: 0 0 6px 0; font-size: 22px;">New Service Booking Request</h2>
          <p style="color: #64748b; margin: 0; font-size: 14px;">Received from On Time Property Maintenance website</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tbody>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-size: 14px; width: 38%; font-weight: 500;">Customer Name:</td>
              <td style="padding: 10px 0; color: #0f172a; font-size: 15px; font-weight: 600;">${fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-size: 14px; font-weight: 500;">Phone Number:</td>
              <td style="padding: 10px 0; color: #0284c7; font-size: 15px; font-weight: 600;">
                <a href="tel:${phone}" style="color: #0284c7; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-size: 14px; font-weight: 500;">Email Address:</td>
              <td style="padding: 10px 0; color: #0f172a; font-size: 15px;">
                ${email ? `<a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a>` : "Not provided"}
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-size: 14px; font-weight: 500;">Service Requested:</td>
              <td style="padding: 10px 0; color: #0f172a; font-size: 15px; font-weight: 600;">${serviceCategory || "General Inquiry"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-size: 14px; font-weight: 500;">Property Type:</td>
              <td style="padding: 10px 0; color: #0f172a; font-size: 15px;">${propertyType || "Standard"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-size: 14px; font-weight: 500;">Preferred Date:</td>
              <td style="padding: 10px 0; color: #0f172a; font-size: 15px;">${preferredDate || "As soon as possible"}</td>
            </tr>
          </tbody>
        </table>

        <div style="background-color: #f8fafc; border-radius: 8px; padding: 14px 16px; margin-bottom: 24px;">
          <h4 style="margin: 0 0 6px 0; color: #334155; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Job Requirements / Notes:</h4>
          <p style="margin: 0; color: #0f172a; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">${details || "No additional notes provided."}</p>
        </div>

        <div style="border-top: 1px solid #e2e8f0; padding-top: 14px; text-align: center; color: #94a3b8; font-size: 12px;">
          On Time Private Limited • Southampton, UK
        </div>
      </div>
    `;

    const textContent = `
New Booking Inquiry Received:

Name: ${fullName}
Phone: ${phone}
Email: ${email || "Not provided"}
Service: ${serviceCategory}
Property Type: ${propertyType}
Preferred Date: ${preferredDate || "As soon as possible"}

Details / Notes:
${details || "No additional notes provided"}
    `.trim();

    await transporter.sendMail({
      from: `"On Time Booking Desk" <${gmailUser}>`,
      to: recipientEmail,
      replyTo: email || undefined,
      subject: `New Booking Request: ${serviceCategory} - ${fullName}`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: `Booking request delivered successfully to ${recipientEmail}`,
    });
  } catch (error) {
    console.error("Error sending email via Nodemailer:", error);
    return NextResponse.json(
      { error: "Failed to dispatch email. Please check server configuration." },
      { status: 500 }
    );
  }
}
