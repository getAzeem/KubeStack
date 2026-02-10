FROM nginx:alpine

RUN apk add --no-cache gettext

COPY index.html /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY entrypoint.sh /entrypoint.sh

EXPOSE 80
CMD ["/entrypoint.sh"]

