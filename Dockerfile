FROM node:12

COPY build/ .
RUN ls
RUN npm install express cors socket.io body-parser

CMD ["node", "NODE_ENV=production","node", "."]