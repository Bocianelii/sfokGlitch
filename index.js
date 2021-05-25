const Discord = require('discord.js');
const config = require('./config/main.json');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {
  if (msg.content === 'kamil') {
    msg.channel.send('to kid');
  } 
});
client.on('message', async message => {

    if (!message.guild) return;
    if (message.content === 'helpKremuwa') 
    {
      message.reply("Komendy: kremuwka, kapus");
    }
    if (message.content === 'kremuwka') {
      if (message.member.voice.channel) {
        message.reply('Już lece brachu');
        const connection = await message.member.voice.channel.join();
        connection.play('barka.webm', { volume: 1 });
      } else {
        message.reply('You need to join a voice channel first!');
      }
    }else
    if (message.content === 'kapus') {
      if (message.member.voice.channel) {
        message.reply('Już lece brachu');
        const connection = await message.member.voice.channel.join();
        
        connection.play('bonus.mp3', { volume: 10});
      } else {
        message.reply('You need to join a voice channel first!');
      }
    }
  });
client.login('NjkyMzIwNzUzMDA5NDI2NTAz.Xnsz8g.bEz_3TbuSpnO9fXCwBAGCA1LTmM');