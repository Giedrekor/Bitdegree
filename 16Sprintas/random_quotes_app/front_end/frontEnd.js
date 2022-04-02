"use strict";

// https://parade.com/947443/parade/best-friend-quotes/
// const quotesCollection = [
//   "A real friend is one who walks in when the rest of the world walks out.",
//   "Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.",
//   "If you live to be a hundred, I hope I live to be a hundred minus one day, so I never have to live without you.",
//   "Things are never quite as scary when you’ve got a best friend.",
//   "Real friendship is when your friend comes over to your house and then you both just take a nap.",
//   "Friendship is born at that moment when one person says to another, ‘What! You too? I thought I was the only one.",
//   "Don’t make friends who are comfortable to be with. Make friends who will force you to lever yourself up.",
//   "Friendship marks a life even more deeply than love. Love risks degenerating into obsession, friendship is never anything but sharing.",
//   "Friendship is the hardest thing in the world to explain. It’s not something you learn in school. But if you haven’t learned the meaning of friendship, you really haven’t learned anything.",
//   "A true friend never gets in your way unless you happen to be going down.",
// ];

function newQuote() {
  const randomNumber = Math.floor(Math.random() * quotesCollection.length);

  document.getElementById("quoteDisplayField").innerHTML =
    quotesCollection[randomNumber];

  // console.log("newQuote was run from frontEnd.js");
}
