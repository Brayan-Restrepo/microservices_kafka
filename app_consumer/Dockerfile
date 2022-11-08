# FROM node:lts-alpine
FROM node:16.13.1-alpine3.13
ENV NODE_ENV=production
WORKDIR /usr/src/app_consumer
COPY ["app_consumer/package.json", "app_consumer/package-lock.json*", "app_consumer/npm-shrinkwrap.json*", "./"]
RUN npm install -g npm@8.19.3
RUN ls
RUN pwd
RUN npm install --production --silent && mv node_modules ../
COPY ./app_consumer .
EXPOSE 3000
RUN chown -R node /usr/src/app_consumer
USER node
CMD ["node", "index.js"]
