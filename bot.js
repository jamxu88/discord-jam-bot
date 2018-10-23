const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Jam-Bot Online");
});
const prefix = "=";
client.on("message", (message) => {
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
    message.channel.send("Pong!");
    console.log("Pinged");
  }else
  if (message.content.startsWith(prefix + "help")) {
    message.channel.send({embed: {
      color: 3447003,
      description: "Commands: `=alert`, `=ping`, `=help`,`=owner`"
    }});
  }else
  if (message.content.startsWith(prefix + "owner")) {
    message.channel.send("This bot was created by jam#3515");
  }else
  if (message.content.startsWith(prefix + "gay?")) {
    message.channel.send("yes");
  }
});
client.login(process.env.BOT_TOKEN);
