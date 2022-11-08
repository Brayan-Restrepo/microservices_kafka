# FROM node:lts-alpine
FROM node:16.13.1-alpine3.13
ENV NODE_ENV=production
WORKDIR /usr/src/app_producer
COPY ["app_producer/package.json", "app_producer/package-lock.json*", "app_producer/npm-shrinkwrap.json*", "./"]
RUN npm install -g npm@8.19.3
RUN npm install --production --silent && mv node_modules ../
COPY ./app_producer .
EXPOSE 3000
RUN chown -R node /usr/src/app_producer
USER node
CMD ["node", "index.js"]
