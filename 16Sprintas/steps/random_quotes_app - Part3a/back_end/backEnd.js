"use strict";

import express, { response } from "express";
import fs from "fs";
import { quotesCollection } from "./public/quotes.js";

const app = express();
const PORT = 3000;

// Register view engine
app.set("view engine", "ejs");

app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(
    `Your random_quotes server has been started, and is listening on port ${PORT}.`
  );
});

app.get("/", (request, response) => {
  const quotes = [
    { author: "Jack Handey", snippet: "On time-travel ..." },
    { author: "Jack Handey", snippet: "On poor people ..." },
    { author: "Jack Handey", snippet: "On de-forrestation ..." },
  ];
  response.render("index.ejs", { quotes: quotes });
  // response.redirect("/quotes");
});

// app.get("/", (request, response) => {
// response.send(`Your random quotes app is running!`);
// response.render("index.ejs", { root: "." });
// });

// app.get("/404", (request, response) => {
//   response.sendFile("./views/404.html", { root: "." });
// });

app.get("/about", (request, response) => {
  response.render("about.ejs", { root: "." });
});

app.get("/quotes/create", (req, res) => {
  res.render("create");
});

app.get("/randomJS", (request, response) => {
  const randomNumber = Math.floor(Math.random() * quotesCollection.length);
  console.log(randomNumber);

  let randomQuote = quotesCollection[randomNumber];

  response.send(randomQuote);
});

app.use((req, res) => {
  res.status(404).render("404.ejs");
});
