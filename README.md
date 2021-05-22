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