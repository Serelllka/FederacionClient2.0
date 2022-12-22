FROM node AS buildstage

COPY project/package.json /var/www/html/
COPY project/package-lock.json /var/www/html/

WORKDIR /var/www/html/

RUN npm install

COPY project/public /var/www/html/
COPY project/src /var/www/html/
COPY project/postcss.config.js /var/www/html/
COPY project/tailwind.config.js /var/www/html/

RUN npm run build

FROM node:alpine

COPY --from=buildstage /var/www/html/build /var/www/html

WORKDIR /var/www/html/

CMD ["npm", "start"]
#COPY ["run_script.sh", "/usr/bin/run_script"]
#RUN chmod +x /usr/bin/run_script
#CMD ["run_script"]