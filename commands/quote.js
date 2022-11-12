const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
      .setName('quote')
      .setDescription('quote a random text'),
  async execute(interaction) {
      await interaction.reply('Rattanak is a dumb bitch')
  },
};