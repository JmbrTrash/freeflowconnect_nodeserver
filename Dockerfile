FROM node:12


WORKDIR /usr/src/app
COPY build/ .
RUN ls
RUN npm install express cors socket.io body-parser

CMD ["node", "NODE_ENV=production node ."]