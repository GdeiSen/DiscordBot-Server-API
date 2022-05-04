module.exports.run = (bot, message, args) => {
  const queue = message.client.queue.get(message.guild.id);
  if (!args || isNaN(args[0]) || args > queue.songs.length || args[0] == 0) queue.embedManager.sendRemoveEmbed(message.channel, { warning: "incorrect_args" })
  queue.playerManager.remove(args - 1);
  queue.embedManager.sendRemoveEmbed(message.channel)
};

module.exports.config = {
  name: "remove",
  description: "deletes a track from the queue",
  usage: "~remove args",
  accessableby: "Members",
  aliases: [],
  category: "music",
  accesTest: "music-command"
}