import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import nodemailer from 'nodemailer';

// SMTP configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.dondominio.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'hola@devcloudpartners.com',
    pass: process.env.SMTP_PASS || 'js3nN;)47{bc21',
  },
});

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

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Handle CORS preflight request
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    if (!event.body) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing request body' }),
      };
    }

    const formData: ContactFormData = JSON.parse(event.body);

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    const fromEmail = process.env.SMTP_FROM || 'hola@devcloudpartners.com';

    // Email template for the company
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

    // Auto-reply email template for the client
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

    // Send email to company
    const companyMailOptions = {
      from: fromEmail,
      to: fromEmail,
      subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
      html: companyEmailHtml,
      replyTo: formData.email,
    };

    // Send auto-reply to client
    const clientMailOptions = {
      from: fromEmail,
      to: formData.email,
      subject: 'Thank you for contacting DevCloud Partners - We\'ll be in touch soon!',
      html: clientEmailHtml,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(clientMailOptions),
    ]);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully' 
      }),
    };

  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to send email', 
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
    };
  }
};