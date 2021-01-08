module.exports = member => {
  let guild = member.guild;
  member.send('Neden ayrıldın?');
  guild.defaultChannel.send(`${member.user.username} aramızdan ayrıldı...`);
};
