# Use below nginx version
FROM nginx:latest
# Copy the build folder of the react app
COPY ./build /var/www
# Copy the ngnix configrations
COPY deployments/nginx.conf /etc/nginx/nginx.conf
# Expose it on port 80
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]