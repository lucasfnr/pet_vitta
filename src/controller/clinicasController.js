const { response } = require('express');
const fs = require('fs');
const path = require('path');

const clinicasFilePath = path.join(__dirname, '../data/clinicasDataBase.json');
const clinicas = JSON.parse(fs.readFileSync(clinicasFilePath, 'utf-8'));

const controller = {
	clinicas: (req, res) => {
		res.render ('clinicasveterinarias');
	},

};

module.exports = controller;