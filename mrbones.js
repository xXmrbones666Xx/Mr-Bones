

const Discord = require("discord.js");

// this is the most important part - it imports the sentience library
// without this the bot is not able to determine right from wrong or have any sense of morality really
// make sure this is included
const sentience = require('sentience');

const client = new Discord.Client();
var token = "<YOUR TOKEN HERE>";

client.on("ready", function() {
	console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
});

client.on("message", function(message) {
	// tell the bot this message and let it consider the implications of the message
	// the bot will then produce a response message
	var reply = sentience.getReply(message.content);
	if (reply) { // if the bot has a reply, send it in the channel
		message.channel.send(reply).catch(console.error);
	}
});

client.login(token);