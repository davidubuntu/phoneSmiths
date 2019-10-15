FROM node:lts-slim

WORKDIR /usr/app/server
COPY . .
RUN npm install

EXPOSE 5000
CMD [ "npm", "start" ]