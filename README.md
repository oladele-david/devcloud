# DevCloud Partners

A modern, full-stack React application with multi-platform contact form deployment capabilities. Built with TypeScript, this project includes both a React frontend and an Express.js backend API, designed to work seamlessly across Netlify, VPS, Vercel, and other platforms.

🌐 **Live Site**: [https://devcloudpartners.com](https://devcloudpartners.com)

## 🏗️ Architecture

This project consists of two main parts:
- **Frontend**: React application with TypeScript and Tailwind CSS
- **Backend**: Express.js API server for contact form handling (VPS/custom deployments)
- **Multi-Platform Support**: Automatic platform detection and API routing

## 🚀 Tech Stack

### Frontend Stack
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript 5.8.3** - Type-safe JavaScript development
- **Vite 5.4.19** - Lightning-fast build tool and development server
- **React Router DOM 6.30.1** - Client-side routing
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - Accessible component library
- **i18next** - Internationalization support (English/Spanish)
- **GSAP** - Advanced animations

### Backend Stack
- **Express.js 4.21.2** - Node.js web framework
- **TypeScript** - Type-safe server development
- **Nodemailer 6.10.1** - Email sending capabilities
- **Zod 3.25.76** - Runtime type validation
- **Rate Limiting** - API protection and abuse prevention
- **CORS & Helmet** - Security middleware

### Deployment Platforms
- **Netlify** - Serverless functions (current)
- **VPS** - Custom Express.js server
- **Vercel** - Edge functions
- **Docker** - Containerized deployment

## ✨ Features

### Frontend Features
- 🎨 **Modern UI** - 40+ accessible components with shadcn/ui
- 🌙 **Theme Support** - Dark/light mode with system preference
- 🌍 **Internationalization** - English and Spanish language support
- 📱 **Responsive Design** - Mobile-first responsive layout
- ⚡ **Performance** - Optimized builds with Vite
- � **Animations** - Smooth GSAP animations throughout
- 📧 **Contact Form** - Multi-platform compatible contact system

### Backend Features
- 🚀 **Multi-Platform API** - Works on Netlify, VPS, Vercel
- 📧 **Email Service** - Professional email handling with auto-replies
- 🛡️ **Security** - Rate limiting, CORS, input validation
- � **Monitoring** - Health checks and structured logging
- � **Docker Ready** - Containerized deployment support
- 🔄 **Auto-Switching** - Platform detection and API routing

## 🏗️ Project Structure

```
devcloud/
├── src/                     # React frontend
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── Header.tsx       # Navigation component
│   │   ├── Footer.tsx       # Footer component
│   │   └── ...
│   ├── pages/
│   │   ├── Index.tsx        # Homepage
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Services.tsx     # Services page
│   │   └── ...
│   ├── config/
│   │   └── deployment.ts    # Platform detection
│   └── i18n.ts              # Internationalization
├── backend/                 # Express.js API server
│   ├── src/
│   │   ├── routes/          # API routes
│   │   ├── services/        # Business logic
│   │   ├── middleware/      # Custom middleware
│   │   └── utils/           # Helper functions
│   ├── Dockerfile           # Docker configuration
│   ├── docker-compose.yml   # Docker Compose setup
│   └── nginx.conf           # Nginx configuration
├── api/                     # Vercel API routes
│   └── contact.ts           # Vercel function
├── netlify/functions/       # Netlify Functions
│   └── contact.ts           # Netlify function
└── deploy.sh                # Multi-platform deployment script
```

## 🚀 Quick Start

### Prerequisites
- **Node.js 20+** (specified in package.json engines)
- **npm/yarn/pnpm** - Package manager
- **Git** - Version control

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/oladele-david/devcloud.git
   cd devcloud
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or npm install / yarn install
   ```

3. **Setup development environment**
   ```bash
   npm run setup:dev
   ```

4. **Start development servers**
   ```bash
   # Frontend (http://localhost:5173)
   npm run dev
   
   # Backend API (http://localhost:3001) - in separate terminal
   npm run dev:backend
   ```

5. **Test the setup**
   ```bash
   # Run automated tests
   ./test-setup.sh
   ```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start frontend development server |
| `npm run dev:backend` | Start backend development server |
| `npm run dev:netlify` | Start Netlify development environment |
| `npm run build` | Build frontend for production |
| `npm run setup:backend` | Install and build backend dependencies |
| `npm run deploy:netlify` | Deploy to Netlify |
| `npm run deploy:vps` | Build for VPS deployment |
| `npm run deploy:vercel` | Deploy to Vercel |
| `./deploy.sh [platform]` | Multi-platform deployment script |

## 🚀 Deployment Guide

### Platform Options

| Platform | Use Case | Complexity | Contact Form Endpoint |
|----------|----------|------------|----------------------|
| **Netlify** | Current setup, serverless | Easy | `/.netlify/functions/contact` |
| **VPS** | Full control, high traffic | Moderate | `https://devcloudpartners.com/api/contact` |
| **Vercel** | Modern serverless | Easy | `/api/contact` |
| **Docker** | Containerized VPS | Moderate | `https://devcloudpartners.com/api/contact` |

---

## 📦 Frontend Deployment

### 1. Netlify (Current - No Changes Needed)
```bash
# Already deployed at https://devcloudpartners.com
# Contact form uses Netlify Functions
# No action required - works out of the box
```

**Environment Variables (Netlify Dashboard):**
```bash
SMTP_HOST=smtp.dondominio.com
SMTP_PORT=465
SMTP_USER=hola@devcloudpartners.com
SMTP_PASS=your_password_here
```

### 2. Vercel Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
npm run deploy:vercel
# or manually: vercel --prod
```

**Environment Variables (Vercel Dashboard):**
```bash
SMTP_HOST=smtp.dondominio.com
SMTP_PORT=465
SMTP_USER=hola@devcloudpartners.com
SMTP_PASS=your_password_here
SMTP_FROM=hola@devcloudpartners.com
CONTACT_EMAIL=hola@devcloudpartners.com
```

### 3. VPS Frontend Deployment
```bash
# Build for production
npm run deploy:vps --build-only

# Upload dist/ folder to your web server
scp -r dist/* user@your-vps:/var/www/devcloudpartners.com/

# Configure nginx (see backend section)
```

---

## 🖥️ Backend Deployment (VPS/Custom Server)

### Prerequisites
- Ubuntu/Debian VPS
- Node.js 20+
- PM2 (process manager)
- Nginx (reverse proxy)
- SSL certificate

### 1. Quick VPS Setup
```bash
# On your VPS, run the automated setup
cd /path/to/uploaded/backend
chmod +x setup-vps.sh
./setup-vps.sh
```

### 2. Manual VPS Setup

**Step 1: Install Dependencies**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2
```

**Step 2: Setup Application**
```bash
# Create app directory
sudo mkdir -p /var/www/devcloudpartners
sudo chown $USER:$USER /var/www/devcloudpartners

# Upload and setup backend
cd /var/www/devcloudpartners
# (Upload your backend folder here)
cd backend

# Install dependencies
npm install

# Setup environment
cp .env.production .env
# Edit .env with your SMTP credentials

# Build and start
npm run build
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

**Step 3: Nginx Configuration**
```bash
# Install Nginx
sudo apt install nginx -y

# Copy provided nginx configuration
sudo cp nginx.conf /etc/nginx/nginx.conf

# Test and reload
sudo nginx -t
sudo systemctl reload nginx
```

**Step 4: SSL Setup (Let's Encrypt)**
```bash
# Install Certbot
sudo snap install --classic certbot

# Generate certificates
sudo certbot --nginx -d devcloudpartners.com -d www.devcloudpartners.com

# Auto-renewal
echo "0 12 * * * /usr/bin/certbot renew --quiet" | sudo crontab -
```

### 3. Docker Deployment
```bash
# Setup environment
cd backend
cp .env.production .env
# Edit .env file

# Deploy with Docker Compose
docker-compose up -d

# Check status
docker-compose ps
docker-compose logs -f backend
```

**Docker includes:**
- Express.js backend on port 3001
- Nginx reverse proxy on ports 80/443
- Automatic restarts and health checks
- SSL-ready configuration

### 4. Backend Environment Variables
```bash
# Production Environment (.env file)
PORT=3001
NODE_ENV=production
ALLOWED_ORIGINS=https://devcloudpartners.com,https://www.devcloudpartners.com
SMTP_HOST=smtp.dondominio.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=hola@devcloudpartners.com
SMTP_PASS=your_password_here
SMTP_FROM=hola@devcloudpartners.com
CONTACT_EMAIL=hola@devcloudpartners.com
```

---

## 🔧 Platform Switching

The application automatically detects the deployment platform and routes API calls accordingly:

```bash
# Switch between platforms easily
./deploy.sh netlify    # Deploy to Netlify
./deploy.sh vps        # Build for VPS
./deploy.sh vercel     # Deploy to Vercel
./deploy.sh development # Setup local development
```

**Environment Files:**
- `.env.netlify` - Netlify configuration
- `.env.vps` - VPS configuration  
- `.env.vercel` - Vercel configuration
- `.env.development` - Local development

---

## �️ Monitoring & Maintenance

### Backend Monitoring (VPS)
```bash
# PM2 Commands
pm2 status                    # Check processes
pm2 logs devcloud-backend     # View logs
pm2 restart devcloud-backend  # Restart app
pm2 reload devcloud-backend   # Zero-downtime restart
pm2 monit                     # Real-time monitoring

# System Health
curl https://devcloudpartners.com/api/health
curl http://localhost:3001/health
```

### Docker Monitoring
```bash
# Docker Commands
docker-compose ps              # Check containers
docker-compose logs -f backend # View logs
docker-compose restart backend # Restart backend
docker-compose down && docker-compose up -d  # Full restart
```

### Troubleshooting
```bash
# Check Nginx
sudo systemctl status nginx
sudo tail -f /var/log/nginx/error.log

# Check SSL
openssl s_client -connect devcloudpartners.com:443

# Test API
curl -X POST https://devcloudpartners.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","lastName":"User","email":"test@example.com","message":"Test message","company":"Test Co","phone":"123","location":"Test","budget":"5k-15k","timeline":"1-month","service":"devops"}'
```

## � Testing & Validation

### Automated Testing
```bash
# Run the comprehensive test suite
./test-setup.sh

# Test specific platform configurations
npm run setup:dev     # Test development setup
npm run deploy:netlify --build-only  # Test Netlify build
npm run deploy:vps --build-only      # Test VPS build
```

### Manual Testing Checklist

**Frontend:**
- [ ] Homepage loads correctly
- [ ] Contact form renders properly
- [ ] Navigation works on all pages
- [ ] Responsive design on mobile/desktop
- [ ] Language switching (EN/ES) works
- [ ] Theme switching (light/dark) works

**Backend (VPS/Docker):**
- [ ] Health endpoint: `curl http://localhost:3001/health`
- [ ] API responds: `curl -X POST http://localhost:3001/api/contact`
- [ ] Email sending works (check logs)
- [ ] CORS headers present
- [ ] Rate limiting active (test with multiple requests)

**Production:**
- [ ] HTTPS redirect works
- [ ] SSL certificate valid
- [ ] Contact form submission successful
- [ ] Auto-reply email received
- [ ] Performance: PageSpeed Insights > 90

---

## 📚 Additional Resources

### Documentation
- [`DEPLOYMENT.md`](DEPLOYMENT.md) - Comprehensive deployment guide
- [`backend/README.md`](backend/README.md) - Backend-specific documentation
- [`backend/SSL-SETUP.md`](backend/SSL-SETUP.md) - SSL certificate setup guide

### Configuration Files
- [`deploy.sh`](deploy.sh) - Multi-platform deployment script
- [`backend/nginx.conf`](backend/nginx.conf) - Production nginx configuration
- [`backend/docker-compose.yml`](backend/docker-compose.yml) - Docker setup
- [`vercel.json`](vercel.json) - Vercel deployment configuration

### Platform-Specific Guides
- **Netlify**: Already configured and deployed
- **VPS**: Run `backend/setup-vps.sh` on your server
- **Docker**: Use `docker-compose up -d` in backend directory
- **Vercel**: Install Vercel CLI and run `vercel --prod`

---

## 🚀 Performance & Security

### Frontend Optimizations
- ✅ **Vite Build**: Optimized production bundles
- ✅ **Code Splitting**: Automatic route-based splitting
- ✅ **Asset Optimization**: Image and CSS optimization
- ✅ **Caching**: Proper cache headers for static assets

### Backend Security
- ✅ **Rate Limiting**: 5 requests per minute per IP
- ✅ **CORS Protection**: Configured for devcloudpartners.com
- ✅ **Input Validation**: Zod schema validation
- ✅ **Security Headers**: Helmet.js middleware
- ✅ **HTTPS**: SSL/TLS encryption ready

### Monitoring
- ✅ **Health Checks**: Built-in health monitoring
- ✅ **Structured Logging**: JSON-formatted logs
- ✅ **Error Handling**: Graceful error responses
- ✅ **Process Management**: PM2 with clustering

---

## 📞 Support & Contact

### Getting Help
1. **Documentation**: Check `DEPLOYMENT.md` and backend docs
2. **Issues**: Create GitHub issues for bugs/features
3. **Testing**: Run `./test-setup.sh` to validate setup

### Project Maintainer
**DevCloud Partners** - Cloud transformation specialists
- 🌐 Website: [devcloudpartners.com](https://devcloudpartners.com)
- 📧 Email: hola@devcloudpartners.com
- 🔧 GitHub: [@oladele-david](https://github.com/oladele-david)

---

**🎉 Your multi-platform contact form is ready for deployment!**

This project demonstrates modern full-stack development with platform-agnostic deployment capabilities. The contact form automatically adapts to work on Netlify, VPS, Vercel, or any other platform without code changes.

Built with ❤️ using React, TypeScript, Express.js, and modern DevOps practices.
