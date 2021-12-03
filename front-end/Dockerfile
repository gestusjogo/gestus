# build environment
FROM node:14-alpine as build
WORKDIR /front-end
ENV PATH /front-end/node_modules/.bin:$PATH
COPY package.json /front-end/package.json
RUN npm install
COPY . /front-end
RUN npm run build

# production environment
FROM nginx:1.17.9-alpine
COPY --from=build /front-end/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY config/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]