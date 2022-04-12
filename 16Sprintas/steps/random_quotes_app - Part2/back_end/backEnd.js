"use strict";

import express, { response } from "express";

import { quotesCollection } from "./public/quotes.js";

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(
    `Your random_quotes server has been started, and is listening on port ${PORT}.`
  );
});

app.get("/", (request, response) => {
  // response.send(`Your random quotes app is running!`);
  response.sendFile("./views/index.html", { root: "." });
});

app.get("/404", (request, response) => {
  response.sendFile("./views/404.html", { root: "." });
});

app.get("/about", (request, response) => {
  response.sendFile("./views/about.html", { root: "." });
});

app.get("/randomJS", (request, response) => {
  const randomNumber = Math.floor(Math.random() * quotesCollection.length);
  console.log(randomNumber);

  let randomQuote = quotesCollection[randomNumber];

  response.send(randomQuote);
});
