FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

RUN npm install -g pm2

COPY . .

EXPOSE 8000

CMD ["pm2-runtime", "server.js", "--name", "test_server"]