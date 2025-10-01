#!/bin/bash

# DevCloud Partners Deployment Script

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
PLATFORMS=("netlify" "vps" "vercel" "development")
DEFAULT_PLATFORM="netlify"

# Functions
print_usage() {
    echo "Usage: $0 [PLATFORM] [OPTIONS]"
    echo ""
    echo "Platforms:"
    for platform in "${PLATFORMS[@]}"; do
        echo "  - $platform"
    done
    echo ""
    echo "Options:"
    echo "  --build-only    Only build, don't deploy"
    echo "  --env-only      Only setup environment"
    echo "  --help          Show this help"
    echo ""
    echo "Examples:"
    echo "  $0 netlify              # Deploy to Netlify"
    echo "  $0 vps --build-only     # Build for VPS deployment"
    echo "  $0 development          # Setup for local development"
}

log() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
    exit 1
}

setup_environment() {
    local platform=$1
    
    log "Setting up environment for $platform deployment..."
    
    # Copy appropriate environment file
    if [ -f ".env.$platform" ]; then
        cp ".env.$platform" ".env"
        log "Environment file copied: .env.$platform -> .env"
    else
        warn "No environment file found for $platform (.env.$platform)"
    fi
}

build_frontend() {
    local platform=$1
    
    log "Building frontend for $platform..."
    
    # Install dependencies if needed
    if [ ! -d "node_modules" ]; then
        log "Installing frontend dependencies..."
        npm install
    fi
    
    # Build the project
    case $platform in
        "netlify")
            npm run build
            ;;
        "vps"|"vercel")
            npm run build
            ;;
        "development")
            log "Development mode - no build needed, use 'npm run dev'"
            return 0
            ;;
        *)
            npm run build
            ;;
    esac
    
    log "Frontend build completed"
}

build_backend() {
    local platform=$1
    
    if [ "$platform" = "vps" ]; then
        log "Building backend for VPS deployment..."
        
        cd backend
        
        # Install dependencies if needed
        if [ ! -d "node_modules" ]; then
            log "Installing backend dependencies..."
            npm install
        fi
        
        # Build backend
        npm run build
        
        cd ..
        
        log "Backend build completed"
    fi
}

deploy_netlify() {
    log "Deploying to Netlify..."
    
    # Check if Netlify CLI is installed
    if ! command -v netlify &> /dev/null; then
        error "Netlify CLI not found. Install it with: npm install -g netlify-cli"
    fi
    
    # Deploy
    netlify deploy --prod
    
    log "Netlify deployment completed"
}

deploy_vps() {
    log "VPS deployment preparation completed"
    log "Next steps:"
    echo "1. Copy the 'dist' folder to your VPS web server"
    echo "2. Copy the 'backend' folder to your VPS"
    echo "3. Install backend dependencies: cd backend && npm install"
    echo "4. Set up environment variables on your VPS"
    echo "5. Start the backend server: npm start or pm2 start ecosystem.config.js"
    echo "6. Configure your web server (nginx/apache) to serve the frontend"
    echo "7. Set up SSL certificates"
}

deploy_vercel() {
    log "Deploying to Vercel..."
    
    # Check if Vercel CLI is installed
    if ! command -v vercel &> /dev/null; then
        error "Vercel CLI not found. Install it with: npm install -g vercel"
    fi
    
    # Deploy
    vercel --prod
    
    log "Vercel deployment completed"
}

# Main script logic
PLATFORM=${1:-$DEFAULT_PLATFORM}
BUILD_ONLY=false
ENV_ONLY=false

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --build-only)
            BUILD_ONLY=true
            shift
            ;;
        --env-only)
            ENV_ONLY=true
            shift
            ;;
        --help)
            print_usage
            exit 0
            ;;
        netlify|vps|vercel|development)
            PLATFORM=$1
            shift
            ;;
        *)
            warn "Unknown option: $1"
            shift
            ;;
    esac
done

# Validate platform
if [[ ! " ${PLATFORMS[@]} " =~ " ${PLATFORM} " ]]; then
    error "Invalid platform: $PLATFORM"
fi

log "Starting deployment for platform: $PLATFORM"

# Setup environment
setup_environment $PLATFORM

if [ "$ENV_ONLY" = true ]; then
    log "Environment setup completed"
    exit 0
fi

# Build
build_frontend $PLATFORM
build_backend $PLATFORM

if [ "$BUILD_ONLY" = true ]; then
    log "Build completed"
    exit 0
fi

# Deploy
case $PLATFORM in
    "netlify")
        deploy_netlify
        ;;
    "vps")
        deploy_vps
        ;;
    "vercel")
        deploy_vercel
        ;;
    "development")
        log "Development setup completed. Use 'npm run dev' to start development server"
        log "Use 'cd backend && npm run dev' to start backend development server"
        ;;
esac

log "Deployment process completed for $PLATFORM"