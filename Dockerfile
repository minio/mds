FROM nginx:1.23

COPY nginx.conf /etc/nginx/nginx.conf
COPY docs /usr/share/nginx/html