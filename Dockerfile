FROM node:7

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN cd /usr/src/app/

ARG NODE=production
ENV NODE_ENV ${NODE}

RUN npm install
RUN node --version

# Bundle app source
COPY . /usr/src/app

# Expose PORT
EXPOSE 8082

# START
CMD [ "npm", "start" ]