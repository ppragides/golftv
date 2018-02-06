# Use an official node runtime as a parent image
FROM nginx:latest

# Copy the current directory contents into the container at /app
ADD /etc/nginx/conf.d /etc/nginx/conf.d
ADD /webroot /var/www/html/

# Make port 80 and 443 available to the world outside this container
EXPOSE 80

# Make the nginx logs available to the docker daemon logging system
RUN ln -sf /dev/stdout /var/log/nginx/access.log &&\
        ln -sf /dev/stderr /var/log/nginx/error.log