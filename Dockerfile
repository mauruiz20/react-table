FROM node:18.7.0 AS build
WORKDIR /build

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

COPY public/ public
COPY src/ src
RUN yarn build

FROM httpd:alpine
WORKDIR /usr/local/apache2/htdocs
COPY --from=build /build/build/ .
RUN chown -R www-data:www-data /usr/local/apache2/htdocs \
    && sed -i "s/Listen 80/Listen \${PORT}/g" /usr/local/apache2/conf/httpd.conf