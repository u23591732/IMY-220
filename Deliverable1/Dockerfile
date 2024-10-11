FROM node:14
WORKDIR /src/app


COPY package*.json ./


RUN npm install


COPY . .


EXPOSE 1320


CMD ["npm", "start"]