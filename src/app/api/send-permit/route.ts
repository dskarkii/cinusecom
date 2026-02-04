import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const getResend = () => new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { formData, files } = await req.json();

    if (!formData) {
      return NextResponse.json({ error: 'No form data provided' }, { status: 400 });
    }

    // Validate file sizes before processing
    if (files && files.length > 0) {
      const totalSize = files.reduce((acc: number, file: { content: string }) => {
        const estimatedSize = Math.ceil((file.content.length * 3) / 4);
        return acc + estimatedSize;
      }, 0);

      if (totalSize > 25 * 1024 * 1024) {
        return NextResponse.json({
          error: 'Total file size too large. Please reduce file sizes or upload fewer files.',
          details: `Total size: ${Math.round(totalSize / 1024 / 1024)}MB, Limit: 25MB`
        }, { status: 413 });
      }
    }

    // Prepare attachments from files
    const attachments = files ? files.map((file: { name: string; content: string; type: string }) => ({
      filename: file.name,
      content: Buffer.from(file.content, 'base64'),
      contentType: file.type || 'application/octet-stream'
    })) : [];

    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Solar Permit Submission</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background-color: #f8f9fa; }
          .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
          .header h1 { font-size: 28px; font-weight: 700; margin-bottom: 8px; }
          .header p { font-size: 16px; opacity: 0.9; }
          .content { padding: 40px 30px; }
          .section { margin-bottom: 30px; }
          .section-title { font-size: 20px; font-weight: 600; color: #2d3748; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #e2e8f0; }
          .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
          .info-item { background-color: #f7fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #667eea; }
          .info-label { font-weight: 600; color: #4a5568; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
          .info-value { color: #2d3748; font-size: 16px; font-weight: 500; }
          .files-info { background-color: #e6fffa; border: 1px solid #81e6d9; border-radius: 8px; padding: 20px; text-align: center; }
          .files-count { font-size: 24px; font-weight: 700; color: #319795; margin-bottom: 10px; }
          .files-text { color: #2c7a7b; font-size: 16px; }
          .footer { background-color: #2d3748; color: white; padding: 30px; text-align: center; }
          .footer h3 { font-size: 18px; margin-bottom: 10px; }
          .footer p { opacity: 0.8; font-size: 14px; }
          .timestamp { background-color: #edf2f7; padding: 15px; border-radius: 8px; text-align: center; margin-top: 20px; font-size: 14px; color: #4a5568; }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>New Solar Permit Submission</h1>
            <p>A new solar permit design request has been submitted</p>
          </div>

          <div class="content">
            <div class="section">
              <h2 class="section-title">Contact Information</h2>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">First Name</div>
                  <div class="info-value">${formData.firstName || 'Not provided'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Last Name</div>
                  <div class="info-value">${formData.lastName || 'Not provided'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Email Address</div>
                  <div class="info-value">${formData.email || 'Not provided'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Phone Number</div>
                  <div class="info-value">${formData.phone || 'Not provided'}</div>
                </div>
              </div>
            </div>

            <div class="section">
              <h2 class="section-title">Project Details</h2>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Mount Type</div>
                  <div class="info-value">${formData.mountType === 'roof' ? 'Roof Mount' : 'Ground Mount'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Consumer Category</div>
                  <div class="info-value">${formData.category ? formData.category.charAt(0).toUpperCase() + formData.category.slice(1) : 'Not specified'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Monthly Consumption</div>
                  <div class="info-value">${formData.monthlyBill || 'Not specified'} kWh</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Project Address</div>
                  <div class="info-value">${formData.address || 'Not provided'}</div>
                </div>
              </div>
            </div>

            <div class="section">
              <h2 class="section-title">Technical Specifications</h2>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Utility Provider</div>
                  <div class="info-value">${formData.utility || 'Not specified'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">AHJ</div>
                  <div class="info-value">${formData.ahj || 'Not specified'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Phase Preference</div>
                  <div class="info-value">${formData.phase === 'single' ? 'Single Phase' : formData.phase === 'three' ? 'Three Phase' : 'Not specified'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Preferred Module</div>
                  <div class="info-value">${formData.module || 'Not specified'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Preferred Inverter</div>
                  <div class="info-value">${formData.inverter || 'Not specified'}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Preferred Battery</div>
                  <div class="info-value">${formData.battery || 'Not specified'}</div>
                </div>
              </div>
            </div>

            ${files && files.length > 0 ? `
            <div class="section">
              <h2 class="section-title">Attached Files</h2>
              <div class="files-info">
                <div class="files-count">${files.length}</div>
                <div class="files-text">file${files.length > 1 ? 's' : ''} attached to this submission</div>
              </div>
            </div>
            ` : ''}

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
            <h3>Cinuse - Solar Permit Design</h3>
            <p>Thank you for choosing our services. We'll review your submission and get back to you soon.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await getResend().emails.send({
      from: 'Cinuse <contact@cinuse.com>',
      to: ['contact@cinuse.com', 'dskarki100@gmail.com', 'infokarki100@gmail.com', 'karkigauravsingh@gmail.com'],
      subject: `New Solar Permit Submission - ${formData.firstName || 'Client'}`,
      html: emailHtml,
      attachments: attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Permit form error:', error);

    if (error instanceof Error) {
      if (error.message.includes('413')) {
        return NextResponse.json({
          error: 'File size too large',
          details: 'Please reduce file sizes or upload fewer files. Maximum total size is 25MB.'
        }, { status: 413 });
      }
    }

    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
