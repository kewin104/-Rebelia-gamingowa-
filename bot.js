const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDkzODM4NjMwODQyNzkzOTg3.Dovs9g.umd4DETTlCQWUfla3D80K0bJdV0);
