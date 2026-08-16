# express may nginx nhi use hoga q kay wo only static file serve krta ha
# Node.js khud web server hai, isliye ye requests directly handle karta hai.

# stage 1 
FROM node:22 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# stage 2
FROM node:22-slim

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 5000

CMD ["node", "server.js"]
