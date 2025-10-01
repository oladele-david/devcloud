# DevCloud Partners - Backend API

This is the Express.js backend for the DevCloud Partners contact form, designed for VPS or custom server deployment.

## 🚀 Quick Start

### Development
```bash
npm install
cp .env.example .env  # Edit with your SMTP settings
npm run dev
```

### Production
```bash
npm install
npm run build
npm start

# Or with PM2
npm run pm2:start
```

### Docker
```bash
docker-compose up -d
```

## 📧 Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# Server
PORT=3001
NODE_ENV=production

# CORS
ALLOWED_ORIGINS=https://yourdomain.com

# SMTP (Required)
SMTP_HOST=smtp.dondominio.com
SMTP_PORT=465
SMTP_USER=your-email@domain.com
SMTP_PASS=your-password
SMTP_FROM=your-email@domain.com
CONTACT_EMAIL=your-email@domain.com
```

## 🛠️ API Endpoints

### Health Check
```
GET /health
```

### Contact Form
```
POST /api/contact
Content-Type: application/json

{
  "firstName": "string",
  "lastName": "string", 
  "email": "string",
  "company": "string",
  "phone": "string",
  "location": "string",
  "budget": "string",
  "timeline": "string",
  "service": "string",
  "message": "string"
}
```

## 🔧 Features

- ✅ **Rate Limiting**: 5 requests per minute per IP
- ✅ **CORS Protection**: Configurable allowed origins
- ✅ **Input Validation**: Zod schema validation
- ✅ **Email Service**: Nodemailer with SMTP
- ✅ **Auto-Reply**: Sends confirmation email to users
- ✅ **Logging**: Structured logging with timestamps
- ✅ **Health Checks**: Built-in health monitoring
- ✅ **Process Management**: PM2 configuration included
- ✅ **Docker Support**: Production-ready containers

## 🚀 Deployment

### VPS with PM2
```bash
npm run build
pm2 start ecosystem.config.js
```

### Docker
```bash
docker-compose up -d
```

### Nginx Configuration
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    # Frontend
    location / {
        root /path/to/frontend/dist;
        try_files $uri $uri/ /index.html;
    }
    
    # Backend API
    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

## 🔍 Monitoring

### Logs
```bash
# PM2 logs
pm2 logs devcloud-backend

# Docker logs  
docker-compose logs -f backend
```

### Health Check
```bash
curl http://localhost:3001/health
```

## 🛡️ Security

- Rate limiting per IP address
- CORS protection
- Input validation and sanitization
- Helmet.js security headers
- No sensitive data in logs

## 📝 Scripts

- `npm run dev` - Development server with watch mode
- `npm run build` - Build TypeScript to JavaScript
- `npm run start` - Start production server
- `npm run pm2:start` - Start with PM2
- `npm run pm2:stop` - Stop PM2 process
- `npm run pm2:restart` - Restart PM2 process
- `npm run pm2:logs` - View PM2 logs

## 🔧 Troubleshooting

### SMTP Issues
1. Verify SMTP credentials in `.env`
2. Check firewall allows outbound SMTP (ports 465/587)
3. Test with a simple SMTP client

### CORS Issues
1. Add your frontend domain to `ALLOWED_ORIGINS`
2. Check if API is accessible from browser
3. Verify proxy settings

### Performance
1. Use PM2 cluster mode for multiple instances
2. Configure reverse proxy (nginx/apache)
3. Monitor with `pm2 monit`