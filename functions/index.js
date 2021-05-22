const functions = require('firebase-functions');
const {Telegraf} = require('telegraf');
const restClient = require('axios').create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
});
let config = require('./env.json');

if (Object.keys(functions.config()).length) {
  config = functions.config();
}

const bot = new Telegraf(config.service.telegram_key);
bot.start((ctx) => ctx.reply('Welcome'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.on('text', (ctx) => {
  const q = ctx.update.message.text;
  const query = {
    q: decodeURI(q),
    appid: config.service.openweather_key,
    lang: 'es',
    units: 'metric',
  };
  restClient.get('/weather', {params: query})
      .then(({data}) => {
        return ctx.reply(`The current weather in ${data.name} is C: ${data.main.temp}`); // eslint-disable-line
      })
      .catch(() => {
        return ctx.reply('This city is not exist');
      });
});
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));

bot.launch();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', {structuredData: true});
  response.send('Hello from ZD Telegram Bot!');
});
