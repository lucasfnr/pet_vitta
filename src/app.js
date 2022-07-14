const express = require('express');
const path = require('path');

const mainRouter = require('./routes/main.routes');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('/', mainRouter);

app.listen(3333, () => {
  console.log('🚀 🚀 🚀 Funcionando na porta 3333 🚀 🚀 🚀');
});

module.exports = app;