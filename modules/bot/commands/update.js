// Import everything.
const Discord = require("discord.js");
const config = require("../botConfig.json");
const util = require("../util.js");

const credentials = {
    username: "woomyAPI",
    token: "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"
};

// Function provided by Sopur
async function main() {
    const cp = require("child_process");
    async function awaitCommand(command) {
        return new Promise((res) => {
            cp.exec(command).on("close", res).on("error", console.log);
        });
    }
    await awaitCommand("git pull origin main");
    //await awaitCommand(`git clone "https://${credentials.username}:${credentials.token}@github.com/z46-dev/woomy-server"`);
    console.log("Done!");
    closeArena();
};

module.exports = {
    run: async function(bot, message, args) {
        if (util.checkPermissions(message) < 3) return util.unauth(message);
        util.log(bot, "command", `<@!${message.author.id}> ran \`${message.content}\` in <#${message.channel.id}>`);
        await main();
        return util.info(message, "Server updated. Restarting.");
    },
    description: "Restarts the server.",
    usage: "update"
};
