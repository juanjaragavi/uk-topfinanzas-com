// Start of code to add/replace in app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer"; // Make sure nodemailer is installed (npm install nodemailer)

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, lastName, email, phone, message, acceptTerms } = body;

    // --- Basic Input Validation ---
    if (!name || !lastName || !email || !phone || !message || !acceptTerms) {
      console.error("Validation Error: Missing required fields", body);
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Validation Error: Invalid email format", email);
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }
    // Add phone validation if needed

    // --- Nodemailer Configuration ---
    // Ensure environment variables are loaded correctly
    const apiKey = process.env.SENDGRID_API_KEY;
    const senderEmail = process.env.SENDER_EMAIL;
    const recipientEmail = process.env.RECIPIENT_EMAIL;

    if (!apiKey || !senderEmail || !recipientEmail) {
      console.error(
        "Server Configuration Error: Missing SendGrid environment variables"
      );
      return NextResponse.json(
        { message: "Server configuration error. Please contact support." },
        { status: 500 } // Internal Server Error
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      secure: false, // Use false for port 587 (STARTTLS)
      auth: {
        user: "apikey", // SendGrid requires the literal string 'apikey'
        pass: apiKey,
      },
      // Optional: Add timeout settings
      // connectionTimeout: 10000, // 10 seconds
      // greetingTimeout: 10000, // 10 seconds
      // socketTimeout: 10000, // 10 seconds
    });

    // Verify transporter connection (optional but recommended for debugging)
    try {
      await transporter.verify();
      console.log("Nodemailer transporter verified successfully.");
    } catch (verifyError) {
      console.error("Nodemailer transporter verification failed:", verifyError);
      // Decide if you want to stop execution or just log the error
      // return NextResponse.json({ message: 'Email server connection error.' }, { status: 503 }); // Service Unavailable
    }

    // --- Email Content ---
    const htmlMessage = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px; }
          h1 { color: #2E74B5; margin-bottom: 20px; }
          .info-row { margin-bottom: 10px; }
          .label { font-weight: bold; margin-right: 10px; }
          .message-box { background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px; }
          .footer { margin-top: 30px; font-size: 12px; color: #777; border-top: 1px solid #e0e0e0; padding-top: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>New Contact Form Submission</h1>
          <div class="info-row"><span class="label">Name:</span> ${name} ${lastName}</div>
          <div class="info-row"><span class="label">Email:</span> ${email}</div>
          <div class="info-row"><span class="label">Phone:</span> ${phone}</div>
          <div class="message-box">
            <span class="label">Message:</span>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
          <div class="footer">This email was sent from the TopFinanzas UK Contact Form.</div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"TopFinanzas UK Contact" <${senderEmail}>`, // Use verified sender email
      to: recipientEmail, // Use recipient from env var
      replyTo: email, // Set reply-to to the user's email
      subject: `New Contact Form Submission from ${name} ${lastName}`,
      text: `
        You received a new message from your contact form:

        Name: ${name} ${lastName}
        Email: ${email}
        Phone: ${phone}

        Message:
        ${message}
      `,
      html: htmlMessage,
    };

    // --- Send Email ---
    console.log(
      `Attempting to send email from ${senderEmail} to ${recipientEmail}`
    );
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully via SendGrid");

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    // Avoid exposing detailed errors to the client
    return NextResponse.json(
      { message: "Failed to send message due to a server error." },
      { status: 500 }
    );
  }
}
// End of code to add/replace
