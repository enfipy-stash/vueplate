FROM cypress/browsers:chrome69

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN npm install cypress@2.1.0

COPY cypress ./cypress
COPY cypress.json ./cypress.json

RUN ./node_modules/.bin/cypress verify
