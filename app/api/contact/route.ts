import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import sgMail from '@sendgrid/mail';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, lastName, email, phone, message } = body;

    // Validate input
    if (!name || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email recipients
    const recipients = [
      'juan.hoyos@topnetworks.co',
      'juan.jaramillo@topnetworks.co',
    ];

    // Prepare email content
    const subject = `New Contact Form Submission from ${name} ${lastName}`;
    const htmlContent = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    // Primary method: SendGrid
    // Check if SendGrid API key is available (which it should be as it's the primary method)
    if (process.env.SENDGRID_API_KEY) {
      try {
        // Use SendGrid for email sending
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        
        const msg = {
          to: recipients,
          from: process.env.SENDER_EMAIL || 'noreply@topfinanzas.com',
          subject: subject,
          html: htmlContent,
        };
        
        await sgMail.send(msg);
        console.log('Email sent successfully via SendGrid');
        
        return NextResponse.json(
          { message: 'Email sent successfully' },
          { status: 200 }
        );
      } catch (sendGridError) {
        console.error('SendGrid error:', sendGridError);
        
        // If SendGrid fails, try nodemailer as fallback
        if (
          process.env.EMAIL_SERVER_HOST && 
          process.env.EMAIL_SERVER_USER && 
          process.env.EMAIL_SERVER_PASSWORD
        ) {
          console.log('Attempting to send via nodemailer as fallback...');
          
          // Fallback to Nodemailer
          const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVER_HOST,
            port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
            secure: process.env.EMAIL_SERVER_SECURE === 'true',
            auth: {
              user: process.env.EMAIL_SERVER_USER,
              pass: process.env.EMAIL_SERVER_PASSWORD,
            },
          });

          // Email content
          const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: recipients.join(', '),
            subject: subject,
            html: htmlContent,
          };

          // Send email via nodemailer
          await transporter.sendMail(mailOptions);
          console.log('Email sent successfully via nodemailer fallback');
          
          return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
          );
        } else {
          // Both methods failed
          throw new Error('Failed to send email: SendGrid error and nodemailer fallback not configured');
        }
      }
    } else {
      // SendGrid not configured, this is an error state since it's the primary method
      throw new Error('SendGrid API key not configured');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Error sending email', error: String(error) },
      { status: 500 }
    );
  }
}
