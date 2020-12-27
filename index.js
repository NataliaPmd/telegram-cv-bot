const { Telegraf } = require('telegraf')
const bot = new Telegraf("1314450246:AAHZUifwXRfF-z3oAQUBr6ls2h_k0W3bYwg");

bot.start(ctx => {
    console.log(ctx.message.from);
    if (ctx.message.from.first_name !== undefined) {
        ctx.reply(
          `Hola ${ctx.message.from.first_name}! puedes preguntarme cualquier cosa relacionada con mi curriculum \uD83D\uDE00`
        );
      }
     else if (ctx.message.from.username !== undefined) {
        ctx.reply(
          `Hola ${ctx.message.from.username}! puedes preguntarme cualquier cosa relacionada con mi curriculum \uD83D\uDE00`
        );
      } else {
      ctx.reply(
        `Hola ${ctx.message.from.id}! puedes preguntarme cualquier cosa relacionada con mi curriculum \uD83D\uDE00`
      );
    }
  });
bot.hears(['hi', "Hi", "Hola", "hola"], (ctx) => ctx.reply('Hola! \uD83D\uDE00'))
bot.hears(['que edad tienes?', "cuantos años tienes?"], (ctx) => ctx.reply('Tengo 28 años'))
bot.hears(['en que trabajas?', "cuál es tu trabajo?"], (ctx) => ctx.reply('Soy desarrolladora de software en Odilo. Trabajo con el stack MEAN y un poquito de java con springboot'))
bot.hears(['que es lo que mas te gusta de programar?', "por que elegiste esta carrera?"], (ctx) => ctx.reply('Siempre me ha llamado la atención el mundo de la tecnología y los ordenadores y mi sueño era poder hacer cosas tan chulas como este bot :D'))
bot.launch()

