/* import jwt from 'jsonwebtoken' */
require('dotenv').config()
const jwt = require('jsonwebtoken')
const express = require('express')
/* import express from 'express'; */
const tehtavaService = require('../services/tehtava')

const Tehtava = require('../schema/tehtava')
const Kayttaja = require('../schema/kayttaja')
/* import Tehtava from '../schema/tehtava' */
/* import Kayttaja from '../schema/kayttaja' */
const kayttajaRouter = require('./lisaaKayttaja')

let authorization = null

const tehtavaController = express.Router();

const salaus = process.env.SALAUS


const getTokenFrom = (authorization) => {
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7)
    }
    return null
  }

tehtavaController.get('/', async (req, res) => {
    const tehtavat = await Tehtava
        .find({}).populate('kayttaja', { nimi: 1 })
    
    /* console.log(tehtavat) */
    res.json(tehtavat/* .map<naytettavaKayttaja>(tehtava => tehtava.toJSON()) */)
})

tehtavaController.post('/', async (req, res) => {
    const authorization = req.get('authorization')
    const body = req.body
    console.log(body)
    console.log(authorization)
    const token = getTokenFrom(authorization)
    const decodedToken = jwt.verify(token, salaus)
    if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })  
    }
    console.log(decodedToken.id, ' käytettävä id')
    const kayttaja = await Kayttaja.findById(decodedToken.id)
    console.log(kayttaja, ' löydetty käyttäjä')
    const doc = new Tehtava({
        otsikko: req.body.otsikko,
        tekija: kayttaja.nimi,
        kommentti: req.body.kommentti
    })
    const lahetetty = await doc.save()
    res.json(lahetetty)
    console.log(lahetetty)
    kayttaja.tehtavat = kayttaja.tehtavat.concat(lahetetty._id)
    const paivitettyKayttaja = await kayttaja.save()
    console.log(paivitettyKayttaja)
    res.json(lahetetty.toJSON())
    /* res.send(tehtavaService.lisaaTehtava()) */
})

tehtavaController.put('/:id', async (req, res/* , next */) => {
    const body = req.body
    console.log('muokkaus käynnissä')

  const tehtava = {
    otsikko: body.otsikko,
    tekija: body.tekija,
    kommentti: body.kommentti
  }
  console.log(req.params.id)
  console.log(tehtava) 
  const muokattu = await Tehtava.findByIdAndUpdate(req.params.id, tehtava)
  console.log(muokattu)
  console.log('mongoosesta palautettu muokattu')
    if (muokattu) {
        res.json(muokattu.toJSON())
    } else {
        next('ei löytynyt')
    }
})

tehtavaController.delete('/:id', async (req, res, next) => {
  /* testi */
    const authorization = req.get('authorization')
    const body = req.body
    /* console.log('rivi 87')
    console.log(authorization) */
    const token = getTokenFrom(authorization)
    const decodedToken = jwt.verify(token, salaus)
    const kayttaja = await Kayttaja.findById(decodedToken.id)
    let kayttajanTehtavat = kayttaja.tehtavat
    console.log(req.params.id, 'tarkastettava id')
    let paivitetytTehtavat = []
    /* console.log(typeof(req.params.id), req.params.id, 'WOLOLOLOO WOLOLOLOO WOLOLOLOO ')
    console.log(kayttajanTehtavat)
    console.log('KAYTTAJAN TEHTAVAT KAYTTAJAN TEHTAVAT KAYTTAJAN TEHTAVAT ')
    console.log(typeof(toString(kayttajanTehtavat[2])), kayttajanTehtavat[2],  'WOLOLOLOO WOLOLOLOO WOLOLOLOO WOLOLOLOO WOLOLOLOO WOLOLOLOO tässä on mongo db tullut yhden tyyppi')
    console.log(kayttajanTehtavat[1]) */
    kayttajaTehtavat = kayttajanTehtavat.map(n => { if (n != req.params.id) {
      paivitetytTehtavat = paivitetytTehtavat.concat(n)
      console.log(n, 'eri')
    } else {
      console.log(n, 'SAMA SAMA SAMA SAMA')
    }})
    let uusiKayttaja = {
      tunnus: kayttaja.tunnus,
      nimi: kayttaja.nimi,
      salasana: kayttaja.salasana,
      tehtavat: paivitetytTehtavat
    }
    console.log(uusiKayttaja)
    console.log(paivitetytTehtavat)
    console.log('VERTAUS VERTAUS VERTAUS VERTAUS VERTAUS ')
    kayttajanTehtavat.map(n => console.log(n))

  /* testi */
    console.log('delete avattu')
    console.log(req.params.id)
    await Tehtava.findByIdAndRemove(req.params.id)
    const muokattu = await Kayttaja.findByIdAndUpdate(req.params.id, uusiKayttaja)
    console.log(muokattu)
    /* Tehtava.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end()
    }) */
})

module.exports = tehtavaController