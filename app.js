// import express from "express";
//Insere o modulo de express
const express = require("express");
const app = express();

// Implementa Session
const session = require("express-session");

// Multer é um middleware que permite que o usuário envie um arquivo
const multer = require("multer");

app.get("/", (req, res) => {
  res.send("Servidor funcionando)");
});
app.listen(3000, () => {
  console.log("Servidor funcionando na porta 3000");
});

app.set("view engine", "ejs");
