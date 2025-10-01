# DevCloud Partners - Multi-Platform Contact Form Deployment Guide

This guide explains how to deploy your website with the contact form on different platforms (Netlify, VPS, Vercel,    server {
       listen 80;
       server_name devcloudpartners.com www.devcloudpartners.com;
       
       # Frontend
       location / {
           root /var/www/devcloudpartners.com;
           try_files $uri $uri/ /index.html;
       }
       
       # Backend API
       location /api/ {
           proxy_pass http://localhost:3001;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       }
   }ck Start

### Current Setup (Netlify)
Your contact form currently works with Netlify Functions. No changes needed if staying on Netlify.

### Switching Platforms
Use the deployment script to easily switch between platforms:

```bash
# Deploy to Netlify (current setup)
npm run deploy:netlify

# Build for VPS deployment
npm run deploy:vps

# Deploy to Vercel
npm run deploy:vercel

# Setup local development
npm run setup:dev
```

## 📋 Platform Options

### 1. Netlify (Current Setup) ✅
- **Pros**: Serverless functions, easy deployment, automatic SSL
- **Cons**: Vendor lock-in, function cold starts
- **Contact Form**: Uses Netlify Functions (already working)

```bash
npm run deploy:netlify
```

### 2. VPS Deployment 🖥️
- **Pros**: Full control, better performance, cost-effective for high traffic
- **Cons**: Requires server management, manual SSL setup
- **Contact Form**: Uses Express.js backend

#### VPS Setup Steps:
1. **Build the project:**
   ```bash
   npm run deploy:vps --build-only
   ```

2. **Server Requirements:**
   - Node.js 18+ 
   - PM2 (process manager)
   - Nginx (web server)
   - SSL certificate for devcloudpartners.com

3. **Backend Setup:**
   ```bash
   # On your VPS
   cd backend
   npm install
   cp .env.production .env
   # Verify SMTP credentials in .env
   npm run build
   npm start
   ```

4. **Frontend Setup:**
   - Upload `dist/` folder to `/var/www/devcloudpartners.com/`
   - Configure nginx with provided nginx.conf
   - Set up SSL certificates for devcloudpartners.com

### 3. Vercel 🔺
- **Pros**: Great performance, easy deployment, serverless functions
- **Cons**: Different API structure than Netlify
- **Contact Form**: Uses Vercel API routes

```bash
npm run deploy:vercel
```

## 🔧 Configuration

### Environment Variables

The system automatically switches contact form endpoints based on the deployment platform:

| Platform | Endpoint | Configuration |
|----------|----------|---------------|
| Netlify | `/.netlify/functions/contact` | Automatic |
| VPS | `https://api.yourdomain.com/api/contact` | Set `VITE_API_URL` |
| Vercel | `/api/contact` | Automatic |
| Development | `http://localhost:3001/api/contact` | Local backend |

### Platform-Specific Environment Files

- `.env.netlify` - Netlify deployment
- `.env.vps` - VPS deployment  
- `.env.vercel` - Vercel deployment
- `.env.development` - Local development

## 📧 SMTP Configuration

All platforms use the same SMTP settings. Update these in your environment:

```bash
SMTP_HOST=smtp.dondominio.com
SMTP_PORT=465
SMTP_USER=hola@devcloudpartners.com
SMTP_PASS=your_password_here
```

## 🐳 Docker Deployment (VPS)

For easier VPS deployment, use Docker:

```bash
# Build and run with Docker Compose
cd backend
docker-compose up -d
```

This sets up:
- Express.js backend on port 3001
- Optional Nginx reverse proxy
- Automatic restarts
- Health checks

## 🔄 Development Workflow

### Local Development with Backend
```bash
# Setup development environment
npm run setup:dev

# Start frontend (port 5173)
npm run dev

# Start backend (port 3001)
npm run dev:backend
```

### Testing Contact Form Locally
1. Start both frontend and backend servers
2. The contact form will automatically use `http://localhost:3001/api/contact`
3. Check backend logs for email sending status

## 📊 Platform Comparison

| Feature | Netlify | VPS | Vercel |
|---------|---------|-----|--------|
| **Setup Complexity** | Easy | Moderate | Easy |
| **Cost** | Free tier available | Fixed monthly cost | Free tier available |
| **Performance** | Good | Excellent | Excellent |
| **Scaling** | Automatic | Manual | Automatic |
| **SSL** | Automatic | Manual setup | Automatic |
| **Custom Domain** | Easy | Full control | Easy |
| **Server Management** | None | Full | None |

## 🚨 Migration Steps

### From Netlify to VPS

1. **Prepare VPS:**
   ```bash
   # Build for VPS
   npm run deploy:vps
   ```

2. **Setup Backend on VPS:**
   ```bash
   # Copy backend folder to VPS
   scp -r backend user@your-vps:/path/to/app/

   # On VPS
   cd /path/to/app/backend
   npm install
   cp .env.example .env
   # Edit .env file with your settings
   npm run build
   pm2 start ecosystem.config.js
   ```

3. **Setup Nginx:**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       # Frontend
       location / {
           root /path/to/app/dist;
           try_files $uri $uri/ /index.html;
       }
       
       # Backend API
       location /api/ {
           proxy_pass http://localhost:3001;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
   }
   ```

4. **Update DNS and Test**

### From VPS to Netlify

1. **Prepare for Netlify:**
   ```bash
   npm run deploy:netlify
   ```

2. **Setup Netlify:**
   - Connect your Git repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Your Netlify function is already configured

## 🛠️ Troubleshooting

### Contact Form Not Working

1. **Check Environment:**
   ```bash
   # Verify current platform setting
   echo $VITE_DEPLOYMENT_PLATFORM
   ```

2. **Backend Issues (VPS):**
   ```bash
   # Check backend logs
   pm2 logs devcloud-backend
   
   # Test backend directly
   curl http://localhost:3001/health
   ```

3. **SMTP Issues:**
   - Verify SMTP credentials
   - Check firewall settings (port 465/587)
   - Test with a simple SMTP client

### Network/CORS Issues

- Ensure `ALLOWED_ORIGINS` includes your frontend domain
- Check if API endpoint is accessible from browser
- Verify proxy settings in nginx/apache

## 📞 Support

Need help with deployment? The contact form configuration is flexible and can work with any platform. The key is setting the correct API endpoint for your chosen platform.

For platform-specific issues:
- **Netlify**: Check Netlify Functions logs
- **VPS**: Check server logs and nginx configuration  
- **Vercel**: Check Vercel Functions logs