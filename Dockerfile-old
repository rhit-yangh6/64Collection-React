FROM node:alpine
WORKDIR '/app'

COPY package.json .
RUN yarn global add serve
COPY . .
CMD ["serve", "-s", "build"]