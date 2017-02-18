## Frontend case study

[![Build Status](https://travis-ci.org/mediaupstream/case-study-app.svg?branch=master)](https://travis-ci.org/mediaupstream/case-study-app)

A frontend case study built with ReactJS, Boostrap, and Sass.

## Installation

Clone the project and run:

```bash
npm install
```

Or you can use [Yarn](https://yarnpkg.com/en/) if you prefer:

```bash
yarn
```

## Production Deploy

Deploy to **S3** via [travis-ci](https://travis-ci.org/mediaupstream/case-study-app)

To create a deploy:  
  - Add a new feature
  - `git add -A && git commit -am "My New Feature"`
  - `git push origin master`

Travis listens for commits to the master branch, runs the test suite, and if it passes generates and uploads the **build** folder to **S3**.

You can view the deployed application here: [http://case-study-app-bucket.s3-website-us-west-2.amazonaws.com/](http://case-study-app-bucket.s3-website-us-west-2.amazonaws.com/)

### Available Scripts

In the project directory, you can run:

#### npm start

runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it.

#### npm test

Launches the test runner [Jest](https://facebook.github.io/jest) in interactive watch mode.

#### npm run build

Builds the app for production, outputs build files in the `build` folder.

