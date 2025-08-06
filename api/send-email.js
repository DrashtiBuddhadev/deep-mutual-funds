import { Resend } from 'resend';

// If using ES modules on Vercel, process.env is already available
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // CORS for development: safe on Vercel, can remove if not needed
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields. Please provide name, email, phone, and message.' 
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format.' });
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.replace(/[^\d]/g, ''))) {
      return res.status(400).json({ error: 'Invalid phone number. Please provide a 10-digit number.' });
    }

    const emailSubject = `New Contact Form Submission from ${name}`;
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #115099; margin-bottom: 20px;">New Contact Form Submission</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #115099; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
        </div>
        <div style="background-color: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
          <h3 style="color: #115099; margin-top: 0;">Message</h3>
          <p style="line-height: 1.6; color: #333;">${message}</p>
        </div>
        <div style="margin-top: 20px; padding: 15px; background-color: #e8f4f8; border-radius: 8px;">
          <p style="margin: 0; font-size: 12px; color: #666;">
            This email was sent from the Deep Investment website contact form.
          </p>
        </div>
      </div>
    `;

    // Send email to business
    const emailResult = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [process.env.CONTACT_EMAIL || 'buddhadevdrashti@gmail.com'],
      subject: emailSubject,
      html: emailContent,
      replyTo: email,
    });

    if (emailResult.error) {
      console.error('Resend API Error:', emailResult.error);
      return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }

    // Confirmation email to user
    const confirmationEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #115099; margin-bottom: 20px;">Thank You for Contacting Deep Investment</h2>
        <p>Dear ${name},</p>
        <p>Thank you for reaching out to us! We have successfully received your message and our team will review it carefully.</p>
        <div style="background-color: #e8f4f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #115099; margin-top: 0;">What happens next?</h3>
          <ul style="color: #333; line-height: 1.6;">
            <li>Our certified financial planners will review your inquiry</li>
            <li>We will respond within 24 business hours</li>
            <li>If needed, we'll schedule a free consultation to discuss your financial goals</li>
          </ul>
        </div>
        <p>If you have any urgent questions, please feel free to call us directly:</p>
        <p><strong>Praful Mistry:</strong> +91 76000 21664<br>
           <strong>Deep Mistry:</strong> +91 94081 02596</p>
        <p>Best regards,<br>
        The Deep Investment Team</p>
        <div style="margin-top: 30px; padding: 15px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #115099;">
          <p style="margin: 0; font-size: 12px; color: #666;">
            Deep Investment - Protecting and growing wealth through personalised planning, smart investing and legacy protection.
          </p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: 'Deep Investment <noreply@resend.dev>',
      to: [email],
      subject: 'Thank You for Contacting Deep Investment',
      html: confirmationEmailContent,
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Your message has been sent successfully! We will contact you within 24 hours.',
      emailId: emailResult.data?.id 
    });

  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ error: 'Internal server error. Please try again later.' });
  }
}
