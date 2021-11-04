//const { MessageEmbed, Message } = require("discord.js");
const { MessageEmbed } = require("discord.js");
const text = require("./text_packs/en.json")
module.exports.run = function(message){

  let error_text = new MessageEmbed()
      .setTitle(text.warnings.error_02.embedTitle)
      .setDescription(text.warnings.error_02.embedDescription)
      .setColor(text.warnings.error_02.embedColor)

  if(message.author.bot) return 0;
  if(message.author.id === "853197891609690112" || message.author.id === "596967380089962496" || message.author.id === "468380034273509376"){return "admin"}
  else {message.channel.send({embeds:[error_text]})};
  };
