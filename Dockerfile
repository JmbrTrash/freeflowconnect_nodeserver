FROM node:12

COPY build/ app/
RUN cd app
RUN ls
RUN npm install express cors socket.io body-parser
RUN export NODE_ENV=production
CMD ["node", "app/"]