FROM node:14.17.3 AS development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .