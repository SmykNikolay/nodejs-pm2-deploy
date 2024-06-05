// ecosystem.config.js
require('dotenv').config();

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REPOSITORY, DEPLOY_REF = 'origin/master'
} = process.env;

module.exports = {
  apps: [{
    name   : "backend",
    script : "./backend/dist/app.js",
    env: {
      ...require('dotenv').config({ path: './backend/.env.backend' }).parsed
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
      path: DEPLOY_PATH,
      'pre-deploy': `scp frontend/.env ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/frontend && scp backend/.env ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/backend`,
      'post-deploy': 'cd frontend && npm i && npm run build && pm2 reload pm2.config.js --env production && cd ../backend && npm i && npm run build && pm2 reload pm2.config.js --env production',
    },
  },
}