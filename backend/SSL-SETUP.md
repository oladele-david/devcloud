# SSL Setup for DevCloud Partners (devcloudpartners.com)

This guide explains how to set up SSL certificates for your domain on a VPS.

## 🔒 SSL Certificate Options

### Option 1: Let's Encrypt (Free, Recommended)

```bash
# Install Certbot
sudo apt update
sudo apt install snapd
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot

# Create symbolic link
sudo ln -s /snap/bin/certbot /usr/bin/certbot

# Generate certificates for your domain
sudo certbot certonly --nginx -d devcloudpartners.com -d www.devcloudpartners.com

# Certificates will be created in:
# /etc/letsencrypt/live/devcloudpartners.com/fullchain.pem
# /etc/letsencrypt/live/devcloudpartners.com/privkey.pem
```

### Option 2: Custom SSL Certificate

If you have your own SSL certificate:

```bash
# Create SSL directory
sudo mkdir -p /etc/nginx/ssl

# Copy your certificates
sudo cp your-certificate.crt /etc/nginx/ssl/devcloudpartners.com.crt
sudo cp your-private-key.key /etc/nginx/ssl/devcloudpartners.com.key

# Set proper permissions
sudo chmod 600 /etc/nginx/ssl/devcloudpartners.com.key
sudo chmod 644 /etc/nginx/ssl/devcloudpartners.com.crt
```

## 🔧 Nginx Configuration Update

After obtaining SSL certificates, update your nginx configuration:

### For Let's Encrypt:

```nginx
# Update the SSL certificate paths in nginx.conf
ssl_certificate /etc/letsencrypt/live/devcloudpartners.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/devcloudpartners.com/privkey.pem;
```

### For Custom Certificates:

```nginx
# Use the paths where you copied your certificates
ssl_certificate /etc/nginx/ssl/devcloudpartners.com.crt;
ssl_certificate_key /etc/nginx/ssl/devcloudpartners.com.key;
```

## 🚀 Complete Setup Commands

```bash
# 1. Setup SSL with Let's Encrypt
sudo certbot certonly --nginx -d devcloudpartners.com -d www.devcloudpartners.com

# 2. Copy nginx configuration
sudo cp nginx.conf /etc/nginx/nginx.conf

# 3. Update SSL paths in nginx.conf (if using Let's Encrypt)
sudo sed -i 's|/etc/nginx/ssl/devcloudpartners.com.crt|/etc/letsencrypt/live/devcloudpartners.com/fullchain.pem|g' /etc/nginx/nginx.conf
sudo sed -i 's|/etc/nginx/ssl/devcloudpartners.com.key|/etc/letsencrypt/live/devcloudpartners.com/privkey.pem|g' /etc/nginx/nginx.conf

# 4. Test nginx configuration
sudo nginx -t

# 5. Reload nginx
sudo systemctl reload nginx

# 6. Enable automatic certificate renewal
sudo certbot renew --dry-run
```

## 🔄 Auto-Renewal Setup

Let's Encrypt certificates expire every 90 days. Set up automatic renewal:

```bash
# Add to crontab for automatic renewal
echo "0 12 * * * /usr/bin/certbot renew --quiet && systemctl reload nginx" | sudo crontab -
```

## ✅ Verification

Test your SSL setup:

```bash
# Test SSL certificate
openssl s_client -connect devcloudpartners.com:443 -servername devcloudpartners.com

# Test website
curl -I https://devcloudpartners.com

# Check SSL rating
# Visit: https://www.ssllabs.com/ssltest/analyze.html?d=devcloudpartners.com
```

## 🛡️ Security Headers

The provided nginx.conf includes security headers:
- X-Frame-Options
- X-XSS-Protection  
- X-Content-Type-Options
- Content-Security-Policy
- Referrer-Policy

## 🔧 Troubleshooting

### Certificate Issues
```bash
# Check certificate status
sudo certbot certificates

# Force renewal
sudo certbot renew --force-renewal
```

### Nginx Issues
```bash
# Check nginx status
sudo systemctl status nginx

# Check nginx logs
sudo tail -f /var/log/nginx/error.log
```

### DNS Issues
- Ensure your domain points to your VPS IP address
- Check both A record (devcloudpartners.com) and CNAME (www.devcloudpartners.com)

## 📋 Final Checklist

- [ ] Domain DNS points to VPS IP
- [ ] SSL certificate installed
- [ ] Nginx configured and running
- [ ] Backend API running (PM2)
- [ ] Frontend files uploaded
- [ ] HTTPS redirects working
- [ ] Contact form API accessible via HTTPS

Your site will be available at:
- https://devcloudpartners.com
- https://www.devcloudpartners.com

API endpoint:
- https://devcloudpartners.com/api/contact