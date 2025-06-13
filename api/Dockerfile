# Usa a imagem oficial do Node.js como base
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3080

CMD ["npm", "start"]