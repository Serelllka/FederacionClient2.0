FROM node

COPY ["src", "/var/www/html/src"]
COPY ["project", "/var/www/html/"]

WORKDIR "/var/www/html/"

RUN npm install
COPY ["run_script.sh", "/usr/bin/run_script"]
RUN chmod +x /usr/bin/run_script
CMD ["run_script"]