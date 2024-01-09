FROM nginx:1

COPY nginx.conf /etc/nginx/nginx.conf
COPY docs /usr/share/nginx/html