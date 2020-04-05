# Stage 1
FROM node:alpine as builder
WORKDIR /usr/src/app
COPY package.json .
COPY .babelrc ./
COPY .env ./
COPY src ./
RUN npm install
RUN npm build

# Stage 2
FROM node:alpine
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY --from=builder /usr/src/app/dist ./dist
CMD ["npm","prod"]