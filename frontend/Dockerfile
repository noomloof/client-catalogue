FROM node:latest
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
CMD ["yarn", "start"]

# FROM nginx:1.19.0
# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=builder /app/build .
# ENTRYPOINT ["nginx", "-g", "daemon off;"]