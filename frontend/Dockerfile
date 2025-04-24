FROM node:16-alpine
 
ADD . /frontend
WORKDIR /frontend
RUN npm install --silent
EXPOSE 3000
CMD ["npm", "start"]
