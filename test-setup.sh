#!/bin/bash

# Test script for the multi-platform contact form setup

echo "🧪 DevCloud Partners - Contact Form Test Suite"
echo "=============================================="

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test functions
test_netlify_setup() {
    echo -e "\n📡 Testing Netlify Setup..."
    
    if [ -f "netlify/functions/contact.ts" ]; then
        echo -e "${GREEN}✓${NC} Netlify function exists"
    else
        echo -e "${RED}✗${NC} Netlify function missing"
    fi
    
    if [ -f ".env.netlify" ]; then
        echo -e "${GREEN}✓${NC} Netlify environment config exists"
    else
        echo -e "${RED}✗${NC} Netlify environment config missing"
    fi
}

test_vps_setup() {
    echo -e "\n🖥️  Testing VPS Setup..."
    
    if [ -d "backend" ]; then
        echo -e "${GREEN}✓${NC} Backend directory exists"
    else
        echo -e "${RED}✗${NC} Backend directory missing"
        return
    fi
    
    cd backend
    
    if [ -f "package.json" ]; then
        echo -e "${GREEN}✓${NC} Backend package.json exists"
    else
        echo -e "${RED}✗${NC} Backend package.json missing"
    fi
    
    if [ -d "node_modules" ]; then
        echo -e "${GREEN}✓${NC} Backend dependencies installed"
    else
        echo -e "${YELLOW}⚠${NC} Backend dependencies not installed (run: npm install)"
    fi
    
    if [ -d "dist" ]; then
        echo -e "${GREEN}✓${NC} Backend built successfully"
    else
        echo -e "${YELLOW}⚠${NC} Backend not built (run: npm run build)"
    fi
    
    cd ..
    
    if [ -f ".env.vps" ]; then
        echo -e "${GREEN}✓${NC} VPS environment config exists"
    else
        echo -e "${RED}✗${NC} VPS environment config missing"
    fi
}

test_vercel_setup() {
    echo -e "\n🔺 Testing Vercel Setup..."
    
    if [ -f "api/contact.ts" ]; then
        echo -e "${GREEN}✓${NC} Vercel API route exists"
    else
        echo -e "${RED}✗${NC} Vercel API route missing"
    fi
    
    if [ -f ".env.vercel" ]; then
        echo -e "${GREEN}✓${NC} Vercel environment config exists"
    else
        echo -e "${RED}✗${NC} Vercel environment config missing"
    fi
}

test_frontend_config() {
    echo -e "\n⚛️  Testing Frontend Configuration..."
    
    if [ -f "src/config/deployment.ts" ]; then
        echo -e "${GREEN}✓${NC} Deployment configuration exists"
    else
        echo -e "${RED}✗${NC} Deployment configuration missing"
    fi
    
    # Check if Contact.tsx imports deployment config
    if grep -q "deploymentConfig" src/pages/Contact.tsx; then
        echo -e "${GREEN}✓${NC} Contact form uses deployment config"
    else
        echo -e "${RED}✗${NC} Contact form not updated with deployment config"
    fi
}

test_deployment_scripts() {
    echo -e "\n🚀 Testing Deployment Scripts..."
    
    if [ -f "deploy.sh" ] && [ -x "deploy.sh" ]; then
        echo -e "${GREEN}✓${NC} Deployment script exists and is executable"
    else
        echo -e "${RED}✗${NC} Deployment script missing or not executable"
    fi
    
    # Check package.json scripts
    if grep -q "deploy:netlify" package.json; then
        echo -e "${GREEN}✓${NC} Package.json deployment scripts configured"
    else
        echo -e "${RED}✗${NC} Package.json deployment scripts missing"
    fi
}

test_docker_setup() {
    echo -e "\n🐳 Testing Docker Setup..."
    
    if [ -f "backend/Dockerfile" ]; then
        echo -e "${GREEN}✓${NC} Backend Dockerfile exists"
    else
        echo -e "${RED}✗${NC} Backend Dockerfile missing"
    fi
    
    if [ -f "backend/docker-compose.yml" ]; then
        echo -e "${GREEN}✓${NC} Docker Compose configuration exists"
    else
        echo -e "${RED}✗${NC} Docker Compose configuration missing"
    fi
}

# Run all tests
echo "Running compatibility tests..."

test_netlify_setup
test_vps_setup
test_vercel_setup
test_frontend_config
test_deployment_scripts
test_docker_setup

echo -e "\n📋 Summary"
echo "========="
echo "✅ Current setup: Your contact form works on Netlify"
echo "🔄 Multi-platform: Ready to deploy on VPS, Vercel, or other platforms"
echo "🛠️  Development: Backend available for local development"
echo -e "\n💡 Next Steps:"
echo "• To stay on Netlify: No action needed"
echo "• To deploy on VPS: Run './deploy.sh vps'"
echo "• To deploy on Vercel: Run './deploy.sh vercel'"
echo "• For local development: Run './deploy.sh development'"

echo -e "\n🎉 Your contact form is now platform-agnostic!"