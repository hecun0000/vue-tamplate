FROM nginx:latest
ADD ./docs/.vuepress/dist /var/www/html/vuePress
ADD ./nginx/conf.d /etc/nginx/conf.d
EXPOSE 80