FROM node:alpine

WORKDIR /testing

COPY package*.json ./
RUN npm install

COPY . .

CMD [ "npm", "start" ]