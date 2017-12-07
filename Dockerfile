FROM quay.maru.octanner.io/developer/oct-ubuntu

WORKDIR /cowsay

COPY . .
# install cowsay, and move the "default.cow" out of the way so we can overwrite it with "docker.cow"
RUN apt-get update && \
    apt-get install -y cowsay --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

# "cowsay" installs to /usr/games
ENV PATH $PATH:/usr/games

COPY docker.cow /usr/share/cowsay/cows/

CMD ["cowsay"]