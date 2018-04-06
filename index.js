const Discord = require('discord.js');
const config = require('./config.json');
const snekfetch = require("snekfetch");
const client = new Discord.Client();
const key = config.key;
const prefix = config.prefix;
const search_url = 'https://www.giantbomb.com/api/search/?api_key='+key+'&format=json&query=';
const testLink = 'Test';

client.on("message", async message => {
  if (message.author.bot) return;

  if (message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }

  if (command === 'ping') {
    message.channel.send('Pong...').then((msg) => {
      msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    });
  } else
  if (command === 'speak') {
    message.channel.send(args.join(' '));
    message.delete();
  }
});

const handleReady = () => {
  console.log(`Logged in as ${client.user.tag}!`);
};

client.on('ready', handleReady);


client.login(config.token);
