FROM node:12.8.0-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.5.0/wait /wait
RUN chmod +x /wait

COPY package.json /usr/src/app

RUN npm install

COPY . /usr/src/app

CMD /wait && npm run init:db && npm run dev
