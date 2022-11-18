//values can be changed
//var str = 'Shahid';
//let name = 'Shahid';

//value can not be changed
//const surname= 'Khatri';

const Quote = require("inspirational-quotes");

var cowsay = require("cowsay");

console.log(
  cowsay.think({
    text: Quote.getQuote().author,
    e: "$$",
    T: "U ",
  })
);
const a=Quote.getQuote().text;
console.log(a);
console.log(Quote.getRandomQuote());
