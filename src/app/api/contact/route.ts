import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const getResend = () => new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, subject, message } = body;

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
          }

          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
          }

          .header h1 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 8px;
          }

          .header p {
            font-size: 14px;
            opacity: 0.9;
          }

          .content {
            padding: 30px;
          }

          .info-item {
            background-color: #f7fafc;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #667eea;
            margin-bottom: 15px;
          }

          .info-label {
            font-weight: 600;
            color: #4a5568;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
          }

          .info-value {
            color: #2d3748;
            font-size: 15px;
          }

          .message-box {
            background-color: #f7fafc;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #667eea;
            margin-top: 15px;
          }

          .message-box .info-value {
            white-space: pre-wrap;
          }

          .footer {
            background-color: #2d3748;
            color: white;
            padding: 20px;
            text-align: center;
          }

          .footer p {
            opacity: 0.8;
            font-size: 13px;
          }

          .timestamp {
            background-color: #edf2f7;
            padding: 12px;
            border-radius: 8px;
            text-align: center;
            margin-top: 20px;
            font-size: 13px;
            color: #4a5568;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>Someone has reached out through your website</p>
          </div>

          <div class="content">
            <div class="info-item">
              <div class="info-label">Name</div>
              <div class="info-value">${firstName} ${lastName}</div>
            </div>

            <div class="info-item">
              <div class="info-label">Email</div>
              <div class="info-value">${email}</div>
            </div>

            <div class="info-item">
              <div class="info-label">Subject</div>
              <div class="info-value">${subject}</div>
            </div>

            <div class="message-box">
              <div class="info-label">Message</div>
              <div class="info-value">${message}</div>
            </div>

            <div class="timestamp">
              Submitted on ${new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </div>
          </div>

          <div class="footer">
            <p>Cinuse - Contact Form Submission</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await getResend().emails.send({
      from: 'Cinuse <contact@cinuse.com>',
      to: ['contact@cinuse.com', 'dskarki100@gmail.com', 'infokarki100@gmail.com', 'karkigauravsingh@gmail.com'],
      subject: `New Contact: ${subject} - ${firstName} ${lastName}`,
      html: emailHtml,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
