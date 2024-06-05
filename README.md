# Деплой приложения на сервер с использованием pm2

Стартеркит проекта по автоматизации деплоя фронтенда и бэкенда при помощи pm2 (pm2 deploy)

# URL
- **IP адрес**: 158.160.144.19
- **Frontend**: [https://smyk-frontend.nomorepartiesco.ru](https://smyk-frontend.nomorepartiesco.ru)
- **Backend**: [https://api.smyk-frontend.nomorepartiesco.ru](https://api.smyk-frontend.nomorepartiesco.ru)

# Start app
```bash 
cp .env.example .env.development

pm2 start ecosystem.config.js --env development

pm2 deploy ecosystem.config.js development
pm2 start ecosystem.config.js --env development


pm2 deploy ecosystem.config.js production
pm2 start ecosystem.config.js --env production
```
