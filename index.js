const express = require('express');
const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN);
const data = require('./data.js');
var emoji = require('node-emoji');
const { Markup } = require('telegraf');

const app = express();
app.listen( process.env.PORT, () => {
  console.log('Servidor corriendo en puerto ' + process.env.PORT );
});

bot.start(ctx => {
  console.log(data.responses.experience);

  let user = ctx.message.from.first_name || ctx.message.from.id;
  ctx.reply(
    `Hola ${user}! puedes preguntarme cualquier cosa relacionada con mi curriculum ${emoji.get('smile')}`
  );
        
  });
bot.hears(['hi', "Hi", "Hola", "hola"], (ctx) => ctx.reply('Hola! \uD83D\uDE00'))
bot.hears([/\btí\b/gmi, /\bti\b/gmi], (ctx) => ctx.reply(data.responses.me))
bot.hears([/\bmotivación\b/gmi, /\bmotivacion\b/gmi], (ctx) => ctx.reply(data.responses.motivation))
bot.hears([/\bExperiencia\b/gmi, /\btrabajo\b/gmi], (ctx) => ctx.reply(data.responses.experience))
bot.hears([/\bestudios\b/gmi, /\bformación\b/gmi], (ctx) => ctx.reply(data.responses.education))
bot.hears([/\bcontacto\b/gmi, /\befzf\b/gmi], (ctx) => ctx.reply(data.responses.education))

bot.startPolling();

