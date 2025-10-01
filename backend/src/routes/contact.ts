import { Router } from 'express';
import type { Router as ExpressRouter } from 'express';
import { z } from 'zod';
import { sendContactEmail } from '../services/emailService';
import { logger } from '../utils/logger';

const router: ExpressRouter = Router();

// Contact form validation schema
const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  email: z.string().email('Invalid email address'),
  company: z.string().min(1, 'Company is required').max(100),
  phone: z.string().min(1, 'Phone number is required').max(20),
  location: z.string().min(1, 'Location is required').max(100),
  budget: z.string().min(1, 'Budget is required'),
  timeline: z.string().min(1, 'Timeline is required'),
  service: z.string().min(1, 'Service is required'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

router.post('/contact', async (req, res) => {
  try {
    // Validate request body
    const validatedData = contactSchema.parse(req.body);

    // Log the contact attempt (without sensitive data)
    logger.info('Contact form submission received', {
      email: validatedData.email,
      company: validatedData.company,
      service: validatedData.service,
      ip: req.ip,
      userAgent: req.get('User-Agent'),
    });

    // Send email
    await sendContactEmail(validatedData);

    // Success response
    res.json({
      success: true,
      message: 'Email sent successfully',
    });

    // Log success
    logger.info('Contact email sent successfully', {
      email: validatedData.email,
      company: validatedData.company,
    });

  } catch (error) {
    // Log the error
    logger.error('Contact form error:', error instanceof Error ? error : new Error(String(error)));

    if (error instanceof z.ZodError) {
      // Validation error
      return res.status(400).json({
        error: 'Validation failed',
        message: 'Please check your form data',
        details: error.errors,
      });
    }

    // Email service error
    if (error instanceof Error && error.message.includes('SMTP')) {
      return res.status(503).json({
        error: 'Email service unavailable',
        message: 'We are experiencing technical difficulties. Please try again later or contact us directly.',
      });
    }

    // Generic server error
    res.status(500).json({
      error: 'Internal server error',
      message: 'Something went wrong. Please try again later.',
    });
  }
});

export default router;