FROM mysql:latest
ENV MYSQL_ROOT_PASSWORD password
ENV MYSQL_DATABASE users
ADD users.sql /docker-entrypoint-initdb.d
EXPOSE 3306

FROM ubuntu:18.04
EXPOSE 3306
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Singapore

RUN apt-get update
RUN apt-get install -y nodejs npm
ENV USER root
RUN npm install -g express-generator
RUN npm install express --save
RUN useradd -ms /bin/bash user
COPY app.js /home/user/app.js
COPY start.sh /home/user/start.sh
RUN chmod a+x /home/user/start.sh
USER user
WORKDIR /home/user

CMD ["sh","/home/user/start.sh"]