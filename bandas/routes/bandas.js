let express = require('express');
const bandas = require('../db');
let router = express.Router();
let db = require("../db/index")
let bandasController= require("../controllers/bandasController");

router.get('/id/:id', bandasController.id);

router.get('/genero/:genero', bandasController.genero);

module.exports= router;







