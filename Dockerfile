FROM node:15

WORKDIR /usr/src

EXPOSE 5000

COPY . .

RUN npm i && npm run build
CMD ["npm", "start"]