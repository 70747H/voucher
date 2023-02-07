FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm cache clean --force
RUN npm install
COPY . .
EXPOSE 8090
CMD ["npm", "start:dev"]