// Deployment configuration
export const deploymentConfig = {
  // Platform detection
  platform: process.env.VITE_DEPLOYMENT_PLATFORM || 'netlify', // 'netlify', 'vps', 'vercel', 'custom'
  
  // API endpoints for different platforms
  apiEndpoints: {
    netlify: '/.netlify/functions/contact',
    vercel: '/api/contact',
    vps: process.env.VITE_API_URL ? `${process.env.VITE_API_URL}/api/contact` : '/api/contact',
    custom: process.env.VITE_CONTACT_API_ENDPOINT || '/api/contact'
  },

  // Get the appropriate contact API endpoint
  getContactEndpoint(): string {
    const platform = this.platform as keyof typeof this.apiEndpoints;
    return this.apiEndpoints[platform] || this.apiEndpoints.custom;
  },

  // Check if running on Netlify
  isNetlify(): boolean {
    return this.platform === 'netlify' || typeof window !== 'undefined' && window.location.hostname.includes('netlify');
  },

  // Check if running on VPS/custom server
  isVPS(): boolean {
    return this.platform === 'vps' || this.platform === 'custom';
  },

  // Check if running on Vercel
  isVercel(): boolean {
    return this.platform === 'vercel' || typeof window !== 'undefined' && window.location.hostname.includes('vercel');
  }
};

export default deploymentConfig;