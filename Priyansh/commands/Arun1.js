 const fs = require("fs");
module.exports.config = {
	name: "Arun",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "suraj", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
     react.includes("Arun") || 
react.includes("arun")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★\n\n✦suraj✦\n\n★★᭄𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐋𝐢𝐧𝐤 :\n\n✦ https://youtube.com/@skfecbookstar1052?si=VNgXqiePQaSdB8VD/@MirryKal ✦ \n𝗝𝗼𝗶𝗻 𝗢𝘂𝗿 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 freind \n 𝗞𝗮𝗮𝗹 𝗟𝗼𝗸 😋https://www.facebook.com/share/1C6guRSZ89/`",
				attachment: fs.createReadStream(__dirname + `/noprefix/kk1.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
