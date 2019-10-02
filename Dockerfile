FROM node:12


WORKDIR /usr/src/app
COPY build/ .
RUN ls

CMD ["node", "NODE_ENV=production node ./index.js"]