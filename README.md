# PhoneSmiths WEB APP

Simple web application that shows a phone catalog with the information about different phones . User can view more deatailed info about the phone.

## Technologies and apis

- Node Api Route
- React
- Redux (managing fetch data from api)
- Styled Components
- Npm
- Web server with Node (Express)
- Node js
- Webpack

## Decisions

I decided to use create-react-app js application using a simple configuration.
I separate in single components to achieve the main purpose of the web. For the javascript part there is a main component which manages the communication with the api data model using Reudx.

For styling I used styled components to style the web.

I set a proxy field to in package.json to tell the development server to proxy any unknown requests to the API server in development.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pages

Web is divided in two main parts (each of them is a link in the header navbar):

- Home
- Phones

## INSTALL USING NPM

- ## First
  In the project root directory, you can run:

### `cd client`

### `npm i`

- ## Second
  In the project root directory, you can run:

### `cd server`

### `npm i`

## RUN USING NPM

In the project root directory, you can run:

### `npm start`

This will run both server and client:

Runs the app in the development mode.<br />

- Open [http://localhost:3000](http://localhost:3000) to view the client app in the browser.
- Open [http://localhost:5000/phones](http://localhost:5000/phones) to view the node api route

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## INSTALL AND RUN USING DOCKER

- Docker is necessary.Node and npm are not necessary.

In the project directory, you can run:

### `docker-compose up`

- Open [http://localhost:3000](http://localhost:3000) to view the client app in the browser.
- Open [http://localhost:5000/phones](http://localhost:5000/phones) to view the node api route
