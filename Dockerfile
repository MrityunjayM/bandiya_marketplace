FROM --platform=linux/amd64 node:16-alpine

WORKDIR app

COPY package.json ./

ENV NODE_ENV=development

RUN apk add --no-cache autoconf
RUN npm install

COPY ./ ./

RUN npm run build

# ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "serve"]