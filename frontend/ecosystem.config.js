// frontend/ecosystem.config.js
require('dotenv').config();

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REPOSITORY, DEPLOY_REF = 'origin/master'
} = process.env;

module.exports = {
  apps: [{
    name   : "frontend",
    script : "./dist/app.js",
    env: {
      ...require('dotenv').config({ path: './.env.frontend' }).parsed
    },
    env_production: {
      NODE_ENV: "production",
    },
    env_development: {
      NODE_ENV: "development",
    },
    env_testing: {
      NODE_ENV: "testing",
    }
  }],
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPOSITORY,
      path: `${DEPLOY_PATH}/frontend`,
      'post-deploy': 'npm i && npm run build && pm2 reload pm2.config.js --env production',
    },
  },
}