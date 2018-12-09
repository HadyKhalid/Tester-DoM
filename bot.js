client.on('message', async msg => {
const devs = ['Your ID here'];
if(!devs.includes(message.author.id)) return;
  if(msg.author.bot) return;
  let prefix = "$";
  if(!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0].slice(prefix.length);
  let args = msg.content.split(" ").slice(1);
 
  if(command == 'say') {
    if(!args.join(" ")) return msg.delete();
    msg.channel.send(args.join(" "));
    return;
  }
});
client.login(process.env.BOT_TOKEN);
