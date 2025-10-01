#!/bin/bash

# VPS Setup Script for DevCloud Partners
# Run this on your VPS to set up the backend

set -e

echo "🚀 DevCloud Partners VPS Setup"
echo "=============================="

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   warn "This script should not be run as root for security reasons"
   exit 1
fi

# Install Node.js if not present
if ! command -v node &> /dev/null; then
    log "Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Install PM2 globally if not present
if ! command -v pm2 &> /dev/null; then
    log "Installing PM2..."
    sudo npm install -g pm2
fi

# Create application directory
APP_DIR="/var/www/devcloudpartners"
sudo mkdir -p $APP_DIR
sudo chown $USER:$USER $APP_DIR

log "Application directory created: $APP_DIR"

# Create backend directory
mkdir -p $APP_DIR/backend
cd $APP_DIR/backend

log "Setting up backend..."

# Copy backend files (assumes you've uploaded them)
if [ -f "package.json" ]; then
    log "Installing backend dependencies..."
    npm install
    
    # Copy production environment
    if [ -f ".env.production" ]; then
        cp .env.production .env
        log "Production environment configured"
    else
        warn "No .env.production found. Please create .env manually"
    fi
    
    # Build backend
    log "Building backend..."
    npm run build
    
    # Start with PM2
    log "Starting backend with PM2..."
    pm2 start ecosystem.config.js
    pm2 save
    pm2 startup
    
    log "Backend setup complete!"
else
    warn "No package.json found. Please upload backend files first."
fi

# Create frontend directory
sudo mkdir -p /var/www/devcloudpartners.com
sudo chown $USER:$USER /var/www/devcloudpartners.com

log "Frontend directory created: /var/www/devcloudpartners.com"

echo ""
echo "✅ VPS Setup Complete!"
echo ""
echo "Next steps:"
echo "1. Upload your frontend build files to: /var/www/devcloudpartners.com/"
echo "2. Configure nginx with the provided nginx.conf"
echo "3. Set up SSL certificate for devcloudpartners.com"
echo "4. Test the setup: curl http://localhost:3001/health"
echo ""
echo "Backend is running on: http://localhost:3001"
echo "API endpoint: http://localhost:3001/api/contact"