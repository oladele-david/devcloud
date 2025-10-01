import type { VercelRequest, VercelResponse } from '@vercel/node';
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

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).setHeader('Access-Control-Allow-Origin', '*').end();
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
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Company:</strong> ${formData.company}</p>
        <p><strong>Service:</strong> ${formData.service}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      </div>
    `;

    const clientEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>Thank you for contacting DevCloud Partners!</h2>
        <p>Dear ${formData.firstName},</p>
        <p>We have received your inquiry and will get back to you soon.</p>
      </div>
    `;

    // Send emails
    await Promise.all([
      transporter.sendMail({
        from: fromEmail,
        to: fromEmail,
        subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
        html: companyEmailHtml,
        replyTo: formData.email,
      }),
      transporter.sendMail({
        from: fromEmail,
        to: formData.email,
        subject: 'Thank you for contacting DevCloud Partners',
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