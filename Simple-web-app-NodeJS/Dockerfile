# Build
FROM node:hydrogen-alpine3.21 AS builder
WORKDIR /app
COPY package.json package-lock.json index.html ./

# Read package.json & and "install Dependencies" inside "node_modules" to run Project
RUN npm install
COPY . .

# Runtime
FROM node:hydrogen-alpine3.21
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3030
CMD ["node", "app.js"]