# Escolha a imagem base mais recente e estável do Node
FROM node:18

# Defina o diretório de trabalho
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

COPY docker-entrypoint.sh /usr/src/app
RUN chmod +x /usr/src/app/docker-entrypoint.sh

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
