FROM node:lts

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 8080
CMD NEWS_API_KEY=$NEWS_API_KEY SERVER_PORT=8080 npm start