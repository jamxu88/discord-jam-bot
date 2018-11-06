const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Jam-Bot Online");
  x = 0
  v = 6
  d = 79
});
const prefix = "=";
client.on("message", (message) => {
if (x == 200) {
  message.channel.send("`Hey! Support our Discord by checking out our stuff:` \n **Our Partners**: \n `Discord Ads` - <https://discord.gg/48axjnP> \n `Naihvoom40` - <https://www.twitch.tv/naihvoom40> \n `Idle-Empire` - <https://www.idle-empire.com/r/discord> \n `Heroku` - <http://heroku.com> \n **Our Media**: \n `Instagram` - <https://www.instagram.com/vires.esports/> \n `Twitter` - <https://twitter.com/ViresEsports> \n `Steam Group` - <https://steamcommunity.com/groups/viresesports> \n `Jam's Steam Profile` - <https://steamcommunity.com/id/jaaaaaaaam> \n `Spig's Steam Profile` - <https://steamcommunity.com/id/RavenPotato> \n `Gold's Steam Profile` - <https://steamcommunity.com/id/VS2TGOLD>");
  x = 0
}else
  x = x + 1
  if (x % 10 == 0) {
    message.react("🤔")
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
        description: "**Commands:** \n \n `=alert`: Alert an admin \n \n `=ping`: Check the status of the bot \n \n `=help`: This menu \n \n `=owner`: The creator of the bot \n \n `=clear`: Clear the bot messages \n \n `=info`: Get VS2T Gaming's Info \n \n `=version`: Developer Tools / Log \n \n `=github`: This bot's source code \n \n `=ad`: #DiscordAds Ad Request"
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
      message.channel.send("**Our Partners**: \n `Discord Ads` - <https://discord.gg/48axjnP> \n `Naihvoom40` - <https://www.twitch.tv/naihvoom40> \n `Idle-Empire` - <https://www.idle-empire.com/r/discord> \n `Heroku` - <http://heroku.com> \n **Our Media**: \n `Instagram` - <https://www.instagram.com/vires.esports/> \n `Twitter` - <https://twitter.com/ViresEsports> \n `Steam Group` - <https://steamcommunity.com/groups/viresesports> \n `Jam's Steam Profile` - <https://steamcommunity.com/id/jaaaaaaaam> \n `Spig's Steam Profile` - <https://steamcommunity.com/id/RavenPotato> \n `Gold's Steam Profile` - <https://steamcommunity.com/id/VS2TGOLD>");
    }else
    if (message.content.startsWith(prefix + "version")) {
      message.channel.send("This bot is on Version `" + v + "`. `x` is equal to `" + x + "`");
      message.channel.send({embed: {
        color: 16777215,
        description: "**Recent Changes**: \n \n Fixed a Version/Deployment Bug \n \n Changed embed colors to white. \n \n Made the code simpler \n \n Jam Bot Presence :thinking: \n \n Changed the `=help` command. \n \n Added `=ad` \n \n Heroku added to partner list. \n \n Added `=github` command. \n \n Added a super secret command \n \n `redeployed for v" + d + "`"
      }});
    }else
    if (message.content.startsWith(prefix + "github")) {
      message.channel.send("<https://github.com/jamxu88/discord-jam-bot>");
    }else
    if (message.content.startsWith(prefix + "supersecretcommand")) {
      message.channel.send(":thinking:");
    }else
    if (message.content.startsWith(prefix + "ad")) {
      message.channel.send("#DiscordAds is a paid advertising service where we use bots to send Direct Message advertisements to users. These ads are non-intrusive and the user is able to opt out of receiving ads at any time. Fill out the form to request advertising- https://goo.gl/pfGACN");
      console.log("Ad-Request Made")
      let members = message.channel.members;
      let jam = members.find('id', '289523788822085632');
      jam.send('Possible Ad Request- https://goo.gl/pfGACN');
    }
  });
client.login(process.env.BOT_TOKEN);
