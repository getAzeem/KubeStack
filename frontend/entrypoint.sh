#!/bin/sh
set -e

envsubst < /usr/share/nginx/html/app.js > /usr/share/nginx/html/app.js.tmp
mv /usr/share/nginx/html/app.js.tmp /usr/share/nginx/html/app.js

exec nginx -g "daemon off;"

