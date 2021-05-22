# Telegram Bot with NodeJS and Firebase
Example a telegram bot response with weather of a city. We use to get weather data from https://openweathermap.org/api

## Requirements
- `node 14.*`

## Firebase Tool
- Install firebase-cli  `npm i firebase-tools -g`

## Setup
- Create an account in firebase and create project as telegramBot
- Go to web.telegram.org
- Find bot `BotFather` and `start`

## Login Firebase
- `firebase login` to access.

## Run in local
- Create file `env.json` and set data, for example
`
  {
    "service": {
      "openweather_key": "123123",
      "telegram_key": "abc123"
    }
  }
`
- `firebase serve`


## Deploy to firebase
- `firebase deploy --only functions`


# Steps to create a new project from 0
- `firebase init functions`

## Running Application
### Step 1
Install dependencies
with `npm install`

### Step 2
make the bundle to client
`npm run build`

### Step 3
Configuration database in
`config/index` you can change de port in `DB` in case if it's necesary

**IMPORTANT** if you don't want use mongo please **disabled** configuration in `config/index` as `enabled_mongo: false`

### Step 4
`npm run start-dev`

### Step 5
Open in browser
`http://localhost:4000`

## Run test
`npm run test`

You can see component test and coverage in `coverage` folder.

## Functionality
1. By default read tasks from (https://hipsum.co/the-api/)
2. In the first request when you enter in `http://localhost:4000`, the server make other request to himpsum and get 10 tasks and save in `mongodb`, it make only once if there isn't tasks in mongo.
3. In the page you have a switch to read data(tasks) from `himpsum` or from `mongo`.
4. The quantity selector is enable only to read data from `himpsum`, if you switched to read from `mongo` the quantity selector is disabled.
5. If the switch is read from `himpsum` every request return always different data and mongo return the same data. When read from mongo the tasks start with `From Mongo - ...`
6. When you complete de task
  Switch on
  - Request to api and change task in mongo. To verify refresh window in switch on return task with done.
  Switch off
  - Request to api and only add log.
