// ecosystem.config.js

module.exports = {
  apps: [{
    name: 'backend',
    script: './dist/app.js',
    env_production: {
      NODE_ENV: 'production',
    },
    env_development: {
      NODE_ENV: 'development',
    },
    env_testing: {
      NODE_ENV: 'testing',
    },
  }],
};
