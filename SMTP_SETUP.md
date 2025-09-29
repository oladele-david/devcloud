# SMTP Email Setup for Contact Form

This document explains the SMTP email configuration that has been implemented for the DevCloud Partners contact form.

## 🔧 What Was Set Up

### 1. Backend API (`/netlify/functions/contact.ts`)
- **Netlify serverless function** to handle form submissions
- **Nodemailer** integration with your SMTP credentials
- **Dual email system**: 
  - Notification email to your company
  - Auto-reply confirmation to the client
- **Professional HTML email templates** with styling
- **CORS handling** for cross-origin requests

### 2. Frontend Integration (`/src/pages/Contact.tsx`)
- **Form submission handler** with loading states
- **Toast notifications** for success/error feedback
- **Form validation** and error handling
- **Bilingual support** (English/Spanish) for all messages
- **Netlify function endpoint** integration

### 3. SMTP Configuration
- **Host**: smtp.dondominio.com
- **Port**: 465 (SSL)
- **Email**: hola@devcloudpartners.com
- **Authentication**: Configured with your provided credentials

## 📁 Files Modified

```
├── netlify/
│   └── functions/
│       └── contact.ts          # Netlify serverless function
├── src/
│   ├── i18n.ts                # Added success/error messages
│   └── pages/
│       └── Contact.tsx         # Enhanced with form handling
├── .env                        # SMTP environment variables
├── .env.example               # Template for environment variables
├── .gitignore                 # Added .env to ignored files
└── netlify.toml               # Netlify configuration
```

## 🔐 Environment Variables

The following environment variables are configured:

```env
SMTP_HOST=smtp.dondominio.com
SMTP_PORT=465
SMTP_USER=hola@devcloudpartners.com
SMTP_PASS=js3nN;)47{bc21
SMTP_FROM=hola@devcloudpartners.com
```

## 📧 Email Features

### Company Notification Email
- **Subject**: "New Contact Form Submission from [Name]"
- **Contains**: All form data in a structured format
- **Reply-To**: Set to client's email for easy response

### Client Auto-Reply Email
- **Subject**: "Thank you for contacting DevCloud Partners"
- **Contains**: Professional thank you message with next steps
- **Branded**: Includes company information and links

## 🚀 How to Test

### Local Development with Netlify Dev: 
```bash
# Install Netlify CLI if you haven't already
npm install -g netlify-cli

# Run with Netlify dev server (recommended)
netlify dev

# Or run regular dev server
npm run dev
```

### Test the Contact Form:
1. Navigate to `/contact`
2. Fill out the contact form
3. Check for:
   - Success toast notification
   - Form reset after successful submission
   - Both emails should be received

## 📋 Form Fields Handled

- First Name & Last Name
- Email & Phone
- Company & Location
- Budget Range & Timeline
- Service Interest
- Project Message

## 🌐 Production Deployment

### Netlify Environment Variables
When deploying to Netlify, add these environment variables in your Netlify dashboard:

**Via Netlify UI:**
1. Go to your site dashboard
2. Navigate to **Site settings** → **Environment variables**
3. Add the following variables:

```
SMTP_HOST=smtp.dondominio.com
SMTP_PORT=465
SMTP_USER=hola@devcloudpartners.com
SMTP_PASS=js3nN;)47{bc21
SMTP_FROM=hola@devcloudpartners.com
```

**Via Netlify CLI:**
```bash
netlify env:set SMTP_HOST "smtp.dondominio.com"
netlify env:set SMTP_PORT "465"
netlify env:set SMTP_USER "hola@devcloudpartners.com"
netlify env:set SMTP_PASS "js3nN;)47{bc21"
netlify env:set SMTP_FROM "hola@devcloudpartners.com"
```

### Netlify Configuration
The `netlify.toml` file is configured with:
- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`
- Redirect for API compatibility: `/api/*` → `/.netlify/functions/:splat`

### Security Notes
- ✅ Environment variables are properly secured
- ✅ Email credentials are not hardcoded
- ✅ Form validation prevents spam
- ✅ CORS headers handled properly
- ✅ Netlify Functions provide secure serverless execution

## 🐛 Troubleshooting

### Common Issues:

1. **"Failed to send email"**
   - Check SMTP credentials in Netlify environment variables
   - Verify server allows port 465 connections
   - Check Netlify function logs

2. **Form not submitting**
   - Check browser console for errors
   - Verify function endpoint `/.netlify/functions/contact`
   - Check Netlify function deployment

3. **No email received**
   - Check spam/junk folders
   - Verify SMTP server status
   - Check email quotas
   - Review Netlify function logs

4. **Function not found (404)**
   - Ensure `netlify.toml` is properly configured
   - Check that functions are in `netlify/functions/` directory
   - Verify function name matches URL path

### Debug Commands:
```bash
# Check build
npm run build

# Check types
npm run lint

# Test with Netlify dev
netlify dev

# View Netlify environment variables
netlify env:list

# View function logs
netlify functions:log contact

# Deploy to Netlify
netlify deploy --prod
```

### Netlify Function Logs:
- Go to your Netlify dashboard
- Navigate to **Functions** → **contact**
- Check the function logs for any errors

## 📞 Support

If you encounter any issues with the email functionality:
1. Check the browser console for errors
2. Verify all environment variables are set in Netlify
3. Review Netlify function logs
4. Test the SMTP connection manually if needed

## 🎯 Netlify-Specific Features

- **Edge Functions**: Fast serverless execution
- **Automatic HTTPS**: Secure email transmission
- **Environment Variables**: Secure credential storage
- **Function Logs**: Easy debugging and monitoring
- **Deploy Previews**: Test changes before going live

The setup is now complete and ready for Netlify deployment! 🎉