FROM node:latest

ENV PORT=3000
EXPOSE 3000
WORKDIR /app
COPY tsconfig.json .
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
# USER node
CMD ["yarn", "dev"]