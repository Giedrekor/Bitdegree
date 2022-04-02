"use strict";

import express from "express";
import fs from "fs";
import { quotesCollection } from "./public/quotes.js";
import mongoose from "mongoose";
import { Quote } from "./models/quote.js";

const app = express();
const PORT = 3000;

// MongoDB
const dbURI =
  "mongodb+srv://gdr:AJaiy3gOhXThcGlR@cluster0.lrr6z.mongodb.net/test";

// Register view engine
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000), console.log("connected to DB"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(
    `Your random_quotes server has been started, and is listening on port ${PORT}.`
  );
});

app.get("/", (request, response) => {
  // const quotes = [
  //   { author: "Jack Handey", snippet: "On time-travel ..." },
  //   { author: "Jack Handey", snippet: "On poor people ..." },
  //   { author: "Jack Handey", snippet: "On de-forrestation ..." },
  // ];
  // response.render("index.ejs", { quotes: quotes });
  response.redirect("/quotes");
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

// Quotes "Create" Action
app.post("/quotes", (req, res) => {
  console.log(req.body);
  const newQuote = new Quote(req.body);
  newQuote
    .save()
    .then((result) => {
      // res.send(result)
      res.redirect("/quotes");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/quotes", (req, res) => {
  Quote.find().then((result) => {
    res.render("index", { quotes: result });
  });
});

app.get("/quotes/:id", (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  Quote.findById(id).then((result) => {
    console.log(result);
    res.render("details", { quote: result });
  });
});

app.delete("/quotes/:id", (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  Quote.findByIdAndDelete(id).then((result) => {
    console.log(result);
    res.json({ redirect: "/quotes" });
  });
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
