module.exports.run = async (client, message, args) => {
  client.musicPlayer.play(message, args, {searchType: 'playlist'});
};

module.exports.config = {
  name: "playlist",
  description: "plays a playlist",
  usage: "~playlist",
  accessableby: "Members",
  aliases: ['pl','list','plist','playl'],
  category: "music",
  accesTest: "music-player"
};