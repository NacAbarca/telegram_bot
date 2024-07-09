const {Telegraf} = require('telegraf');

const bot = new Telegraf('6691430498:AAEBSD2ux8qzrPcRgJLX5Z3ZHRtARJkJ6JY');

bot.start((ctx)=>{
    console.log(ctx.from);
    console.log(ctx.chat);
    console.log(ctx.message);
    console.log(ctx.updateSubTypes);
    // ctx.reply(`Iniciar – Ok: Bienvenido ${ctx.from.first_name}. Has enviando un ${ctx.updateType[0]}`);
    bot.telegram.sendMessage(ctx.chat.id, `Iniciar – Ok: Bienvenido ${ctx.from.first_name}. Has enviando un..${ctx.updateSubTypes}.`);
});

bot.help((ctx)=>{
    ctx.reply('Ayudar – Ok');
});

bot.settings((ctx)=>{
    ctx.reply('Configurar ⚒️ – Ok');
});

bot.command(['MiTerminal','miterminal','MITERMINAL','test'],(ctx) => {
    ctx.reply('Comando – Ok');
});

bot.hears('computer',(ctx) => {
    ctx.reply('Computador 🔴 – Ok')
});

bot.mention('BotFather',(ctx) => [
    ctx.reply('BotFather 🤖 – Ok')
]);

bot.phone('+56967867789',(ctx) => [
    ctx.reply('Teléfono 📱 – Ok')
]);

bot.hashtag('developer',(ctx) => [
    ctx.reply('Hashtag 📝 – Ok')
]);

bot.on('text',ctx =>{
    ctx.reply('Texto 💬 – Ok');
});

bot.on('sticker',ctx =>{
    ctx.reply('Emojis 😱 – Ok');
})

bot.launch();