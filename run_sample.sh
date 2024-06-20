#!/bin/sh

podman run -it --rm --name my-apache-app -p 8080:80 -v "$PWD":/usr/local/apache2/htdocs/ localhost/my_httpd
