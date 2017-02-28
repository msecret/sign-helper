FROM kkarczmarczyk/node-yarn:6.9

ADD . /app

RUN cd /app; \
    yarn --prod

EXPOSE 8080

CMD ["node", "/app/index.js"]
