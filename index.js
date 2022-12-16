const TelegramBot = require("node-telegram-bot-api");
const config = require("./config");
console.log(config);
const bot = new TelegramBot(config.token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Вы ввели команду /start", {
    reply_markup: {
      keyboard: [["Отправь мне картинку", "Отправь мне аудио"], ["/start"]],
    },
  });
});

bot.onText(/\/sendaudio/, (msg) => {
  bot.sendAudio(msg.chat.id, "res/audio.mp3");
});
// bot.on("message", (msg) => {
//   let greeting = {
//     привет: "Привет, дорогой пользователь",
//     hello: "Hello dear user",
//     hi: "hi my dear user",
//   };
//   let byes = {
//     пока: "До скорых встреч мой дорогой пользователь",
//     bye: "bye my dear user",
//     goodbye: "goodbye my dear user",
//   };
//   for (let key in greeting) {
//     if (msg.text.toString().toLowerCase().indexOf(key) === 0) {
//       bot.sendMessage(msg.chat.id, greeting[key] + " " + msg.from.first_name);
//     }
//   }
//   for (let key in byes) {
//     if (msg.text.toString().toLowerCase().includes(key)) {
//       bot.sendMessage(msg.chat.id, byes[key] + " " + msg.from.first_name);
//     }
//   }
//   //  оптравить локацию
//   let location = "location";
//   if (msg.text.indexOf(location) === 0) {
//     bot.sendLocation(msg.chat.id, 44.97108, -104.27719);
//     bot.sendMessage(msg.chat.id, "Наши координаты");
//   }
//   //  кик пользователя
//   let badwords = [
//     "идиот",
//     "придурок",
//     "nigger",
//     "nigga",
//     "naga",
//     "ниггер",
//     "нига",
//     "нага",
//     "faggot",
//     "пидор",
//     "пидорас",
//     "педик",
//     "гомик",
//     "даун",
//     "аутист",
//     "дебил",
//     "retard",
//   ];
//   for (let word in badword) {
//     if (msg.text.toString().toLowerCase().includes(word)) {
//       bot.sendMessage(
//         msg.chat.id,
//         "Вы использовали запрщённое слово" + msg.from.first_name
//       );
//       bot.kickChatMember(msg.chat.id, msg.from.id);
//     }
//   }
//   if (msg.text.toString() === "Отправь мне картинку") {
//     bot.sendPhoto(
//       msg.chat.id,
//       "https://static.tildacdn.com/tild6364-3230-4537-b661-323034363738/_-14_1.png",
//       { caption: "Айтигенио приветствует тебя" }
//     );
//   }
//   if (msg.text.toString() === "Отправь мне аудио") {
//     bot.sendAudio(msg.chat.id, "res/audio.mp3");
//   }
// });
bot.on("message", (msg) => {
  if (msg.text.toString() === "Отправь мне картинку") {
    bot.sendPhoto(
      msg.chat.id,
      "https://static.tildacdn.com/tild6364-3230-4537-b661-323034363738/_-14_1.png",
      { caption: "Айтигенио приветствует тебя" }
    );
  }
  if (msg.text.toString() === "Отправь мне аудио") {
    bot.sendAudio(msg.chat.id, "res/audio.mp3");
  }
});
