#Docker file 
FROM node:9.4.0-slim
MAINTAINER "amirsorouri26@gmail.com"

RUN mkdir -p /nodejs/app
WORKDIR /nodejs/app
COPY server.js .
COPY package.json .
RUN npm i
ENV APP_PORT 8000
CMD npm i && node server.js