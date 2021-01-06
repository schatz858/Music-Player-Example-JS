const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require("ytdl-core");

client.on("ready", () => {
  client.user.setActivity("example activity", {});
});

client.on("message", async message => {
  if (!message.guild) return;

  if (message.content === "!join") {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play(
        ytdl("youtubevideo.link", {
          filter: "audioonly"
        })
      );
    } else {
      message.reply("You need to join a voice channel first!");
    }
  }
});
