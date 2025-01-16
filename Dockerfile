FROM mongo:latest

COPY init.js /docker-entrypoint-initdb.d/

WORKDIR /data/db

EXPOSE 27017

CMD ["mongod"]

