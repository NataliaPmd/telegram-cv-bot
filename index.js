const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN);
const data = import(data.json);

bot.start(ctx => {
  let user = ctx.message.from.first_name || ctx.message.from.id;
  ctx.reply(
    `Hola ${user}! puedes preguntarme cualquier cosa relacionada con mi curriculum \uD83D\uDE00`
  );
        
  });
bot.hears(['hi', "Hi", "Hola", "hola"], (ctx) => ctx.reply('Hola! \uD83D\uDE00'))
bot.hears(['que edad tienes?', "cuantos años tienes?"], (ctx) => ctx.reply('Tengo 28 años'))
bot.hears([/\bmotivación\b/gmi], (ctx) => ctx.reply(data.motivation))
bot.hears([/\bExperiencia\b | \btrabajo\b/gmi], (ctx) => ctx.reply(data.experience))
bot.launch()

