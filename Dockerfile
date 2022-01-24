FROM node:14.18.2-alpine
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY . .
RUN echo $(ls -a /opt/app)
RUN npm install -g pm2
RUN npm i --only=production
CMD [ "npm", "run", "pm2" ]