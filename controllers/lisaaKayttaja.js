const express = require('express')
/* import express from 'express' */
const kayttajaRouter = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Kayttaja = require('../schema/kayttaja')

kayttajaRouter.post('/', async (req, res) => {
    const body = req.body
    console.log('lisääminen käynnissä')
    const saltRounds = 10
    const salasana = await bcrypt.hash(body.salasana, saltRounds)

    const kayttaja = new Kayttaja({
        tunnus: body.tunnus,
        nimi: body.nimi,
        salasana: salasana,
    })

    const tallennettuKayttaja = await kayttaja.save()

    res.send(tallennettuKayttaja)    
})

kayttajaRouter.get('/', async (req, res) => {
    const kayttajat = await Kayttaja
        .find({})

    res.send(kayttajat)    
})

module.exports = kayttajaRouter