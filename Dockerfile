FROM harbor.octanner.io/developer/oct-node:14

# RUN [ ! -d "/app" ] && mkdir /app
# RUN chown worf.users /app
# RUN chmod 775 /app

WORKDIR /usr/src/app

COPY . .

# install cowsay
RUN npm install

USER worf:users

CMD ["npm", "start"]
