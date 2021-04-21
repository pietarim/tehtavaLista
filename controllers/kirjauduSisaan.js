const express = require('express')
require('dotenv').config()
/* import express from 'express' */
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const kirjautuminenRouter = express.Router()
const Kayttaja = require('../schema/kayttaja')

const salaus = process.env.SALAUS

kirjautuminenRouter.post('/', async (req, res) => {
  
  const body = req.body
  console.log(body, ' tässä on body')
  console.log(body.tunnus, ' tässä on tunnus')
  console.log(body.salasana, ' tässä on salaus')

  const kayttaja = await Kayttaja.findOne({ tunnus: body.tunnus })
  console.log(kayttaja, ' tässä on kaikki etsityn käyttäjän tiedot')
  if (!kayttaja) {
    return res.status(401).json({
      error: 'väärä tunnus tai salasana'
    })
  }

  const salasanaOikein = await bcrypt.compare(body.salasana, kayttaja.salasana)

  console.log('WOLOLOO WOLOLOO WOLOLOO WOLOLOO WOLOLOO WOLOLOO ')
  console.log(salasanaOikein)

    const kayttajaOikein = (kayttaja.tunnus === body.tunnus) ?
    false
    : true

  if (!(kayttaja && salasanaOikein && !kayttajaOikein)) {
    return res.status(401).json({
      error: 'väärä tunnus tai salasana'
    })
  }

  const userForToken = {
    id: kayttaja._id,
  }

  const token = jwt.sign(userForToken, salaus)
  console.log('error if lauseen päästy ohi')

  res
    .status(200)
    .send({ token, tunnus: kayttaja.tunnus, nimi: kayttaja.nimi })
})

module.exports = kirjautuminenRouter