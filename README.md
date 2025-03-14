# Snappy - Chat Application

Snappy is a chat application built with the power of the MERN Stack (MongoDB, Express.js, React.js, Node.js). This document provides a comprehensive guide to the setup, development, and deployment of the application.

![login page](./images/snappy_login.png)

![home page](./images/snappy.png)

## Table of Contents

- [Snappy - Chat Application](#snappy---chat-application)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Requirements](#requirements)
  - [Installation](#installation)
    - [First Method: Local Setup](#first-method-local-setup)
      - [Second Method](#second-method)

## Introduction

Snappy is designed to provide real-time chat functionality, utilizing WebSockets for instant communication. The tutorial for building this application can be found [here](https://www.youtube.com/watch?v=otaQKODEUFs).

## Requirements

- [Node.js](https://nodejs.org/en/download)
- [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/)
- [Docker](https://docs.docker.com/get-docker/) (Optional, for Docker setup)

Ensure MongoDB is running before starting the backend server.

## Installation

### First Method: Local Setup

1. **Clone the repository:**

   ```shell
   git clone https://github.com/koolkishan/chat-app-react-nodejs
### Installation

#### First Method
```shell
git clone https://github.com/koolkishan/chat-app-react-nodejs
cd chat-app-react-nodejs
```
Now rename env files from .env.example to .env
```shell
cd public
mv .env.example .env
cd ..
cd server
mv .env.example .env
cd ..
```

Now install the dependencies
```shell
cd server
yarn
cd ..
cd public
yarn
```
We are almost done, Now just start the development server.

For Frontend.
```shell
cd public
yarn start
```
For Backend.

Open another terminal in folder, Also make sure mongodb is running in background.
```shell
cd server
yarn start
```
Done! Now open localhost:3000 in your browser.

#### Second Method
- This method requires docker and docker-compose to be installed in your system.
- Make sure you are in the root of your project and run the following command.

```shell
docker compose build --no-cache
```
after the build is complete run the containers using the following command
```shell
docker compose up
```
now open localhost:3000 in your browser.#   C h a t - a p p 

This README provides a comprehensive guide, covering all necessary aspects from installation to deployment, along with explanations of the configurations and decisions made during the development and deployment process.
