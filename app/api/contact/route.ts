import { NextResponse } from "next/server";

// Simple function to send test response for debugging
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, lastName, email, phone, message, acceptTerms } = body;

    // Validate required fields
    if (!name || !lastName || !email || !phone || !message || !acceptTerms) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Instead of sending an actual email, we'll log what would be sent
    // and return a successful response for testing purposes
    console.log("Contact form submission received:");
    console.log(`Name: ${name} ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Message: ${message}`);

    // In a real implementation, here you would use a service like:
    // - SendGrid (recommended)
    // - Mailgun
    // - Amazon SES
    // - Or a serverless function that handles email sending

    // For now, we'll simulate success to verify the form works

    // Create HTML message
    const htmlMessage = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              border: 1px solid #e0e0e0;
              border-radius: 5px;
            }
            h1 {
              color: #2E74B5;
              margin-bottom: 20px;
            }
            .info-row {
              margin-bottom: 10px;
            }
            .label {
              font-weight: bold;
              margin-right: 10px;
            }
            .message-box {
              background-color: #f9f9f9;
              padding: 15px;
              border-radius: 5px;
              margin-top: 20px;
            }
            .footer {
              margin-top: 30px;
              font-size: 12px;
              color: #777;
              border-top: 1px solid #e0e0e0;
              padding-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>New Contact Form Submission</h1>
            <div class="info-row">
              <span class="label">Name:</span> ${name} ${lastName}
            </div>
            <div class="info-row">
              <span class="label">Email:</span> ${email}
            </div>
            <div class="info-row">
              <span class="label">Phone:</span> ${phone}
            </div>
            <div class="message-box">
              <span class="label">Message:</span>
              <p>${message.replace(/\n/g, "<br>")}</p>
            </div>
            <div class="footer">
              This email was sent from the TopFinanzas UK Contact Form.
            </div>
          </div>
        </body>
      </html>
    `;

    // Setup email data
    const mailOptions = {
      from: `"TopFinanzas UK" <${
        process.env.EMAIL_FROM || "noreply@topfinanzas.com"
      }>`,
      to: "juan.hoyos@topnetworks.co, juan.jaramillo@topnetworks.co",
      subject: `New Contact Form Submission from ${name} ${lastName}`,
      text: `
        Name: ${name} ${lastName}
        Email: ${email}
        Phone: ${phone}
        
        Message:
        ${message}
      `,
      html: htmlMessage,
      // Add reply-to so recipients can easily reply to the person
      replyTo: email,
    };

    // Return success for testing form functionality
    return NextResponse.json({
      message:
        "Form submission successful. In production, this would send an email.",
      formData: {
        name: name,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message.substring(0, 50) + (message.length > 50 ? "..." : ""),
      },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
