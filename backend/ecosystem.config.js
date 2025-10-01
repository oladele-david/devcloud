module.exports = {
  apps: [
    {
      name: 'devcloud-backend',
      script: 'dist/server.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'development',
        PORT: 3001,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
      // Restart configuration
      watch: false,
      ignore_watch: ['node_modules', 'logs'],
      
      // Log configuration
      log_file: './logs/combined.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      
      // Advanced configuration
      max_memory_restart: '1G',
      node_args: '--max-old-space-size=1024',
      
      // Health check
      health_check_grace_period: 3000,
    },
  ],
};