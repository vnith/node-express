FROM node:16.13.1-alpine3.14 as service-build

# install curl
RUN apk update && apk add curl bash && rm -rf /var/cache/apk/*

# install node-prune
RUN curl -sfL https://gobinaries.com/tj/node-prune | sh

WORKDIR /service-build

COPY package*.json /service-build/

RUN npm install

COPY ./ /service-build/

RUN npm run build

# remove dev dependencies
RUN npm prune --production

# run node prune
RUN /usr/local/bin/node-prune

FROM node:16.13.1-alpine3.14

WORKDIR /service

COPY --from=service-build /service-build/node_modules /service/node_modules

COPY --from=service-build /service-build/dist /service/dist

EXPOSE 80

CMD ["node", "dist/server.js"]
