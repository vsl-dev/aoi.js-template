const express = require("express");
const app = express();
const http = require("http");
app.get("/", (req, res) => {
	res.sendStatus(200);
});
app.listen(process.env.PORT);

const aoijs = require("aoi.js");
const bot = new aoijs.Bot({
	token: "TOKEN",
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
    code: `$log[Ready on $userTag[$clientID]]
    $log[https://vsldev.tk/github template!]`
})

//Commands

bot.command({
name: "ping",
code: `Pong! \`$ping\`ms`
})

bot.command({
    name: "help",
    code: ` Join offical discord server for help https://vsldev.tk/discord `
})

//Status

bot.status({
  text: "vsldev.tk/github", 
  type: "PLAYING", 
  status: "online",
  time: 12 
});

//Variables

bot.variables({
  site: "https://vsldev.tk/"
})
