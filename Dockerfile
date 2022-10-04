FROM node:16-alpine as build
WORKDIR /app
COPY . .
RUN yarn install && yarn build
CMD ["yarn", "start"]

# production environment
FROM nginx:alpine as deploy
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]