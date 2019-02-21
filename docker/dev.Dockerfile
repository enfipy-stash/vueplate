FROM node:10-alpine
WORKDIR /app
ADD package.json yarn.lock ./
RUN yarn install
ADD . .
CMD ["yarn", "serve"]
