# Voucher

## Installation

- Install [NodeJS](https://nodejs.org/en/) lts or latest version
- Install [Docker](https://www.docker.com/get-started/)

- In root dir run `npm install`
- In root dir run `docker-compose up` to setup postgres docker image for local development

- Create a .env file with the content from .env.example note that allowed NODE_ENV values are [development & test]

## Migrations

Migration scripts:

- `npm run migration:up` - runs migration
- `npm run seed:run` - runs seed

## Running the app for development
- To start the project, run `npm run start:dev`

## Running the app for test
- To run the tests, run `npm run coverage`
- Note that the tests has it's own database called db_test which you can find in the docker-compose file

Application runs on [localhost:8090](http://localhost:8090) by default.

### API
[postman collection](postman_collection.json)

### Seed
- the seed creates 3 vouchers.

<br/>
<br/>
<br/>
