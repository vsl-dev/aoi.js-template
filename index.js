const aoijs = require("aoi.js");
const bot = new aoijs.Bot({
token: "TOKEN" ,
prefix: "PREFIX", 
intents: "all",
mobile: false,
fetchInvites: false
})
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, './commands/');

//Events

bot.onLeave();
bot.onJoin();
bot.onMessage();
bot.onUserUpdate();
bot.onChannelDelete();
bot.onChannelCreate();
bot.onChannelUpdate();
bot.onRoleCreate();
bot.onRoleDelete();
bot.onMessageUpdate();
bot.onMessageDelete();

//Ready Event

bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

//Commands

bot.command({
name: "ping",
code: `Pong! \`$ping\`ms`
})

//Status

bot.status({
  text: "I love pandas", 
  type: "PLAYING", 
  status: "online",
  time: 12 
});

//Variables

bot.variables({
  hw: "Hello World!"
})
