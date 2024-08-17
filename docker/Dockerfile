FROM node:20-alpine

WORKDIR /usr/src/app

COPY . ./
RUN npm install

RUN npx prisma generate --no-engine

RUN npm run build
CMD ["npm", "start"]
