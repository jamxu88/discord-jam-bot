const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Jam-Bot Online");
  x = 1
  v = 7.0
  d = 94
});
const prefix = "=";
client.on("message", (message) => {
if (x % 1000 == 0) {
  message.channel.send("`Hey! Support our Discord by checking out our stuff:` \n **Our Partners**: \n `Naihvoom40` - <https://www.twitch.tv/naihvoom40> \n `Idle-Empire` - <https://www.idle-empire.com/r/discord> \n `Heroku` - <http://heroku.com> \n **Our Media**: \n `Instagram` - <https://www.instagram.com/vires.esports/> \n `Twitter` - <https://twitter.com/ViresEsports> \n `Steam Group` - <https://steamcommunity.com/groups/viresesports>");
  x = x + 1
}else
  x = x + 1
  if (x % 55 == 0) {
    message.react("💎")
 }else
   if (x % 888 == 0) {
     message.react("🎉")
     message.author.send(":tada: Congrats! You have won a Vires Esports Discord Steam Key Giveaway! :tada:")
     message.channel.send(":tada: Winner! :tada:")
     client.channels.get("471805062222446604").send({embed: {
        color: 16753920,
        description: ":tada: User " + message.author.toString() + ", has just won a random giveaway! :tada:"
      }});
     x = x + 1
  }else
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
        color: 16777215,
        description: "User " + message.author.toString() + ", has used the =alert command."
      }});
    }else
    if (message.content.startsWith(prefix + "ping")) {
      message.channel.send("Pong! This bot is on version `" + v + "`.");
      console.log("Pinged");
    }else
    if (message.content.startsWith(prefix + "help")) {
      message.channel.send({embed: {
        color: 16777215,
        description: "**Commands:** \n \n `=alert`: Alert an admin \n \n `=ping`: Check the status of the bot \n \n `=help`: This menu \n \n `=owner`: The creator of the bot \n \n `=clear`: Clear the bot messages \n \n `=info`: Get VS2T Gaming's Info \n \n `=version`: Developer Tools / Log \n \n `=github`: This bot's source code \n \n Start any message with `.` to add the rating system to your message."
      }});
    }else
    if (message.content.startsWith(prefix + "owner")) {
      message.channel.send("This bot was created by jam#3515");
    }else
    if (message.content.startsWith(prefix + "gay?")) {
      message.channel.send("yes");
      message.channel.send("i think");
      message.channel.send("but are you?");
    }else
    if (message.content.startsWith(prefix + "clear")) {
      message.channel.send("yeah jam doesn't know how to do that just yet");
    }else
    if (message.content.startsWith(prefix + "info")) {
      message.channel.send("**Our Partners**: \n `Naihvoom40` - <https://www.twitch.tv/naihvoom40> \n `Idle-Empire` - <https://www.idle-empire.com/r/discord> \n `Heroku` - <http://heroku.com> \n **Our Media**: \n `Instagram` - <https://www.instagram.com/vires.esports/> \n `Twitter` - <https://twitter.com/ViresEsports> \n `Steam Group` - <https://steamcommunity.com/groups/viresesports> \n `Jam's Steam Profile` - <https://steamcommunity.com/id/jamxu> \n `Spig's Steam Profile` - <https://steamcommunity.com/id/RavenPotato> \n `Gold's Steam Profile` - <https://steamcommunity.com/id/VS2TGOLD>");
    }else
    if (message.content.startsWith(prefix + "version")) {
      message.channel.send("This bot is on Version `" + v + "`. `x` is equal to `" + x + "`");
      message.channel.send({embed: {
        color: 16777215,
        description: "**Recent Changes**: \n \n Edited Some information, removed a command. (v94) \n \n `redeployed for v" + d + "`"
      }});
    }else
    if (message.content.startsWith(prefix + "github")) {
      message.channel.send("<https://github.com/jamxu88/discord-jam-bot>");
    }else
    if (message.content.startsWith(prefix + "supersecretcommand")) {
      message.channel.send(":thinking:");
    }
  });
client.login(process.env.BOT_TOKEN);
