FROM node:lts-slim

WORKDIR /usr/app/client
COPY . .
RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]