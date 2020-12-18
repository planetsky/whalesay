FROM harbor.octanner.io/developer/oct-node:14

WORKDIR /usr/src/app

COPY . .

# install cowsay
RUN npm install

USER worf:users

CMD ["npm", "start"]
