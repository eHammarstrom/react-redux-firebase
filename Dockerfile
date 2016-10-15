FROM node:argon

MAINTAINER Emil Hammarstrom <emil.a.hammarstrom@gmail.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY build /usr/src/app/build

RUN npm install -g pushstate-server

ENV TINI_VERSION v0.10.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

EXPOSE 9002
CMD ["pushstate-server", "build", "9002"]
