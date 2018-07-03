# Crud Mean App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0. It is a MEAN stack app. Angular, Node JS + Express, Mongo DB.

## Run application
Download the repo locally and follow the below steps.

1. npm install
2. Run npm start (in terminal 1) to start node server
3. Run mongod (in terminal 2) to create mongod instance. Mongo DB should be installed to run this step.
4. Run this code (in terminal 3) to pre-populate data.

curl -i -X POST -H "Content-Type: application/json" -d '[{"customerID":1,"name":{"first":"Peter","last":"Smith"},"birthday":"1996-10-12","gender":"m","lastContact":"2017-06-01T23:28:56.782Z","customerLifetimeValue":191.12},{"customerID":2,"name":{"first":"Anna","last":"Hopp"},"birthday":"1987-05-03","gender":"w","lastContact":"2017-07-08T13:18:56.888Z","customerLifetimeValue":50.99},{"customerID":3,"name":{"first":"Christian","last":"Cox"},"birthday":"1991-02-21","gender":"m","lastContact":"2017-08-01T11:57:47.142Z","customerLifetimeValue":0},{"customerID":4,"name":{"first":"Roxy","last":"Fox"},"birthday":"1979-06-30","gender":"w","lastContact":"2017-01-29T21:08:50.700Z","customerLifetimeValue":213.12},{"customerID":5,"name":{"first":"Eric","last":"Adam"},"birthday":"1969-11-21","gender":"m","lastContact":"2017-03-18T12:20:06.702Z","customerLifetimeValue":1019.91}]' localhost:3000/api

5. Open http://localhost:3000 (port 3000 by default)

Completed items:

- [x] Angular framework used
- [x] Unit tests with Jasmine
- [x] Support in evergreen browsers
- [x] Provide documentation
- [x] RWD with Bootstrap 4.0
- [x] Github, Git
- [x] Build process -> ng build from angular cli.
- [x] Used TypeScript
- [x] Node server
- [x] Mongo DB for persistent storage
- [ ] Application hosting in Heroku
- [ ] CI/CD with Jenkins and Travis
- [ ] E2E protractor tests


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Pending issues / Planned items
- Remove angular-material library from 2 other components and style with bootstrap
- Move add customer page to a modal
- Implement search
- Add a table view for listing customers 
- Write unit tests for all components
- Fix a bug in deleting customer
- Add support for SASS
