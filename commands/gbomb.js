var prefix = 'bn'
const Discord = require('discord.js');
const snekfetch = require("snekfetch");
const client = new Discord.Client();
var key = '';
var search_url = 'https://www.giantbomb.com/api/search/?api_key=' + key + '&format=json&query=';
var home_url = 'https://www.giantbomb.com';

exports.run = async (client, message, args) => {
  if(args[1] === 'game'){
    let game = args[0].replace(/-/g, ' ');
    let game_url = search_url + game +'&resources='+args[1]
    console.log(game_url)
    snekfetch.get(game_url).then(r =>{
      let data = r.body;
      let name = data.results[0].name;
      let releaseDate = data.results[0].original_release_date;
      let siteLink = data.results[0].site_detail_url;
      let deck = data.results[0].deck;
      let embed = new Discord.RichEmbed()
        .setAuthor(name)
        .addField("Description", deck)
        .addField("Release Date", releaseDate)
        .addField("Link", siteLink)
        .setThumbnail(data.results[0].image.thumb_url);
      message.channel.send({embed: embed})
    });
  }
  else if(args[1] === 'franchise'){
    let franchise = args[0].replace(/-/g, ' ');
    let game_url = search_url + franchise +'&resources='+args[1]
    console.log(game_url)
    snekfetch.get(game_url).then(r =>{
      let data = r.body;
      let name = data.results[0].name;
      let releaseDate = data.results[0].original_release_date;
      let siteLink = data.results[0].site_detail_url;
      let deck = data.results[0].deck;
      let embed = new Discord.RichEmbed()
        .setAuthor(name)
        .addField("Description", deck)
        //  .addField("Release Date", releaseDate)
        .addField("Link", siteLink)
        .setThumbnail(data.results[0].image.thumb_url);
      message.channel.send({embed: embed})
    });
  }
  else if(args[1] === 'character') {
    let character = args[0].replace(/-/g, ' ');
    let character_url = search_url + character +'&resources='+args[1]
    console.log(character_url)
    snekfetch.get(character_url).then(r =>{
      let data = r.body;
      let name = data.results[0].name;
      let firstDate = data.results[0].first_appeared_in_game.name;
      let siteLink = data.results[0].site_detail_url;
      let deck = data.results[0].deck;
      let embed = new Discord.RichEmbed()
        .setAuthor(name)
        .addField("Description", deck)
        .addField("First Game", firstDate)
        .addField("Link", siteLink)
        .setThumbnail(data.results[0].image.thumb_url);
      message.channel.send({embed: embed})
    });
  }
  else if(args[1] === 'person') {
    let person = args[0].replace(/-/g, ' ');
    let person_url = search_url + person +'&resources='+args[1]
    console.log(person_url)
    snekfetch.get(person_url).then(r =>{
      let data = r.body;
      let name = data.results[0].name;
      let firstDate = data.results[0].first_credited_game.name;
      let siteLink = data.results[0].site_detail_url;
      let deck = data.results[0].deck;
      let country = data.results[0].country;
      let birthDate = data.results[0].birth_date;
      let embed = new Discord.RichEmbed()
        .setAuthor(name)
        .addField("Description", deck)
        .addField("Country", country)
        .addField("Date of Birth", birthDate)
        .addField("First Credited Game", firstDate)
        .addField("Link", siteLink)
        .setThumbnail(data.results[0].image.thumb_url);
    message.channel.send({embed: embed})
    });
  }
  else if(args[1] === 'company') {
    let company = args[0].replace(/-/g, ' ');
    let company_url = search_url + company +'&resources='+args[1]
    console.log(company_url)
    snekfetch.get(company_url).then(r =>{
      let data = r.body;
      let name = data.results[0].name;
      let firstDate = data.results[0].date_founded;
      let siteLink = data.results[0].site_detail_url;
      let deck = data.results[0].deck;
      let embed = new Discord.RichEmbed()
        .setAuthor(name)
        .addField("Description", deck)
        .addField("Founded", firstDate)
        .addField("Link", siteLink)
        .setThumbnail(data.results[0].image.thumb_url);
    message.channel.send({embed: embed})
    });
  };
};

exports.help = {
  name:"gsearch"
};
