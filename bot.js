const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Jam-Bot Online");
  x = 0
});
const prefix = "=";
client.on("message", (message) => {
if (x == 200) {
  message.channel.send("`Hey! Support our Discord by checking out our stuff:` \n **Our Partners**: \n `Discord Ads` - <https://discord.gg/48axjnP> \n `Naihvoom40` - <https://www.twitch.tv/naihvoom40> \n `Idle-Empire` - <https://www.idle-empire.com/r/discord> \n **Our Media**: \n `Instagram` - <https://www.instagram.com/vs2tgaming/> \n `Twitter` - <https://twitter.com/VS2T_Gaming> \n `Steam Group` - <https://steamcommunity.com/groups/VS2T> \n `Steam Curator` - <https://store.steampowered.com/curator/31900195/> \n `Jam's Steam Profile` - <https://steamcommunity.com/id/jaaaaaaaam> \n `Spig's Steam Profile` - <https://steamcommunity.com/id/RavenPotato> \n `Gold's Steam Profile` - <https://steamcommunity.com/id/VS2TGOLD>");
  x = 0
}else
  x = x + 1
  if (!message.content.startsWith(prefix)) return;
  if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.content.startsWith(prefix + "alert")) {
      let members = message.channel.members;
      let jam = members.find('id', '289523788822085632');
      let gold = members.find('id', '332611268085153792');
      let spig = members.find('id', '275642801545281536');
      let celery = members.find('id', '204664162729590793');
      jam.send('Alert! A user needs you.');
      gold.send('Alert! A user needs you.');
      celery.send('Alert! A user needs you.');
      spig.send('Alert! A user needs you.');
      console.log("Admin Alert!");
      message.channel.send("An admin has been alerted.");
      message.author.send("Your Alert has been Sent");
      client.channels.get("471805062222446604").send({embed: {
        color: 3447003,
        description: "User " + message.author.toString() + ", has used the =alert command."
      }});
    }else
    if (message.content.startsWith(prefix + "ping")) {
      message.channel.send("Pong! This bot is on version 53.");
      console.log("Pinged");
    }else
    if (message.content.startsWith(prefix + "help")) {
      message.channel.send({embed: {
        color: 3447003,
        description: "Commands: `=alert`, `=ping`, `=help`, `=owner`, `=clear`, `=info`"
      }});
    }else
    if (message.content.startsWith(prefix + "owner")) {
      message.channel.send("This bot was created by jam#3515");
    }else
    if (message.content.startsWith(prefix + "gay?")) {
      message.channel.send("yes");
      message.channel.send("i think");
      message.channel.send("but are you?");
      message.channel.send("yes");
    }else
    if (message.content.startsWith(prefix + "clear")) {
      message.channel.send("yeah jam doesn't know how to do that just yet");
    }else
    if (message.content.startsWith(prefix + "info")) {
      message.channel.send("**Our Partners**: \n `Discord Ads` - <https://discord.gg/48axjnP> \n `Naihvoom40` - <https://www.twitch.tv/naihvoom40> \n `Idle-Empire` - <https://www.idle-empire.com/r/discord> \n **Our Media**: \n `Instagram` - <https://www.instagram.com/vs2tgaming/> \n `Twitter` - <https://twitter.com/VS2T_Gaming> \n `Steam Group` - <https://steamcommunity.com/groups/VS2T> \n `Steam Curator` - <https://store.steampowered.com/curator/31900195/> \n `Jam's Steam Profile` - <https://steamcommunity.com/id/jaaaaaaaam> \n `Spig's Steam Profile` - <https://steamcommunity.com/id/RavenPotato> \n `Gold's Steam Profile` - <https://steamcommunity.com/id/VS2TGOLD>");
    }
  });
client.login(process.env.BOT_TOKEN);
