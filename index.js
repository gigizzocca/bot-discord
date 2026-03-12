require("./server");
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on("messageCreate", message => {

  if (message.author.bot) return;

  if (message.content === "!racas") {

    const racas = [

      {
        nome: "Humano",
        chance: 40,
        cor: "#bfbfbf",
        descricao: "Versáteis e adaptáveis. Humanos dominam diversas artes.",
        imagem: "https://i.imgur.com/8Km9tLL.png"
      },

      {
        nome: "Elfo",
        chance: 25,
        cor: "#2ecc71",
        descricao: "Seres antigos ligados à natureza e à magia.",
        imagem: "https://i.imgur.com/6rlNQ3H.png"
      },

      {
        nome: "Anjo",
        chance: 10,
        cor: "#f1c40f",
        descricao: "Entidades celestiais com poderes divinos.",
        imagem: "https://i.imgur.com/wSTFkRM.png"
      },

      {
        nome: "Demônio",
        chance: 10,
        cor: "#e74c3c",
        descricao: "Criaturas do abismo com força devastadora.",
        imagem: "https://i.imgur.com/xs7fF9A.png"
      },

      {
        nome: "Dragão",
        chance: 5,
        cor: "#9b59b6",
        descricao: "Ser ancestral que domina fogo e poder absoluto.",
        imagem: "https://i.imgur.com/2s9XG9F.png"
      },

      {
        nome: "Deus Antigo",
        chance: 1,
        cor: "#000000",
        descricao: "Uma entidade primordial além da compreensão mortal.",
        imagem: "https://i.imgur.com/zE9Yb4K.png"
      }

    ];

    let total = racas.reduce((acc, r) => acc + r.chance, 0);
    let random = Math.random() * total;

    let resultado;

    for (let r of racas) {
      if (random < r.chance) {
        resultado = r;
        break;
      }
      random -= r.chance;
    }

    const embed = new EmbedBuilder()
      .setTitle(`🎲 Raça obtida: ${resultado.nome}`)
      .setDescription(resultado.descricao)
      .setColor(resultado.cor)
      .setImage(resultado.imagem)
      .setFooter({ text: "Sistema de Raças RPG" });

    message.channel.send({ embeds: [embed] });
  }

});

client.login(process.env.TOKEN);
