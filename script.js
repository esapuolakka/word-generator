const words = require('an-array-of-english-words');

const messageGen = (count) => {
  let newMessage = [];
  for (let i = 0; i < count; i++) {
    let randomWordIndex = Math.floor(Math.random() * words.length)
    newMessage.push(words[randomWordIndex])
  }
  return newMessage.join(' ');
}

console.log(messageGen(6))