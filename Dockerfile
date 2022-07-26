#FROM node:16.16.0-alpine3.15
FROM node:16.16.0-alpine3.15.pm2

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm config set registry https://registry.npmmirror.com
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
# CMD [ "node", "server.js" ]
CMD [ "pm2-runtime", "pm2.config.js" ]