// Alternative Vercel API route without @vercel/node dependency
// Use this if you prefer not to install @vercel/node

import nodemailer from 'nodemailer';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  location: string;
  budget: string;
  timeline: string;
  service: string;
  message: string;
}

export default async function handler(req: any, res: any) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData: ContactFormData = req.body;

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // SMTP configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.dondominio.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER || 'hola@devcloudpartners.com',
        pass: process.env.SMTP_PASS,
      },
    });

    const fromEmail = process.env.SMTP_FROM || 'hola@devcloudpartners.com';

    // Email templates (same as Netlify function)
    const companyEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #2563eb; margin-bottom: 20px; text-align: center;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h3 style="color: #495057; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Location:</strong> ${formData.location}</p>
          </div>
          
          <div style="background-color: #e3f2fd; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h3 style="color: #1976d2; margin-top: 0;">Project Details</h3>
            <p><strong>Service Interested:</strong> ${formData.service}</p>
            <p><strong>Budget Range:</strong> ${formData.budget}</p>
            <p><strong>Timeline:</strong> ${formData.timeline}</p>
          </div>
          
          <div style="background-color: #fff3e0; padding: 15px; border-radius: 5px;">
            <h3 style="color: #f57c00ff; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6;">${formData.message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
            <p style="color: #6c757d; font-size: 14px;">
              This email was sent from the DevCloud Partners contact form at devcloudpartners.com
            </p>
          </div>
        </div>
      </div>
    `;

    const clientEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #f57c00; margin-bottom: 10px;">Thank you for contacting DevCloud Partners!</h2>
            <div style="width: 50px; height: 3px; background-color: #f57c00; margin: 0 auto;"></div>
          </div>
          
          <p style="color: #495057; line-height: 1.6; margin-bottom: 20px;">
            Dear ${formData.firstName},
          </p>
          
          <p style="color: #495057; line-height: 1.6; margin-bottom: 20px;">
            Thank you for reaching out to us! We have received your inquiry about our <strong>${formData.service}</strong> services and appreciate your interest in DevCloud Partners.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #495057; margin-top: 0; margin-bottom: 15px;">What happens next?</h3>
            <ul style="color: #6c757d; line-height: 1.8; padding-left: 20px;">
              <li>Our team will review your requirements within 24 hours</li>
              <li>We'll prepare a customized proposal based on your project details</li>
              <li>One of our cloud experts will reach out to schedule a consultation call</li>
              <li>We'll discuss your specific needs and how we can help accelerate your cloud journey</li>
            </ul>
          </div>
          
          <p style="color: #495057; line-height: 1.6; margin-bottom: 20px;">
            In the meantime, feel free to explore our case studies and learn more about how we've helped other organizations optimize their cloud infrastructure and reduce costs.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://devcloudpartners.com" style="background-color: #f57c00; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Visit Our Website
            </a>
          </div>
          
          <div style="border-top: 1px solid #e9ecef; padding-top: 20px; margin-top: 30px;">
            <p style="color: #6c757d; font-size: 14px; line-height: 1.6;">
              <strong>DevCloud Partners</strong><br>
              Your Cloud Transformation Partner<br>
              📧 ${fromEmail}<br>
              🌐 <a href="https://devcloudpartners.com" style="color: #f57c00;">devcloudpartners.com</a>
            </p>
          </div>
        </div>
      </div>
    `;

    // Send emails
    await Promise.all([
      transporter.sendMail({
        from: fromEmail,
        to: process.env.CONTACT_EMAIL || fromEmail,
        subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
        html: companyEmailHtml,
        replyTo: formData.email,
      }),
      transporter.sendMail({
        from: fromEmail,
        to: formData.email,
        subject: 'Thank you for contacting DevCloud Partners - We\'ll be in touch soon!',
        html: clientEmailHtml,
      }),
    ]);

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ success: true, message: 'Email sent successfully' });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}