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
    
    res.json(tehtavat/* .map<naytettavaKayttaja>(tehtava => tehtava.toJSON()) */)
})

tehtavaController.post('/', async (req, res) => {
    const authorization = req.get('authorization')
    const body = req.body
    const token = getTokenFrom(authorization)
    const decodedToken = jwt.verify(token, salaus)
    if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })  
    }
    const kayttaja = await Kayttaja.findById(decodedToken.id)
    const doc = new Tehtava({
        otsikko: req.body.otsikko,
        tekija: kayttaja.nimi,
        kommentti: req.body.kommentti
    })
    const lahetetty = await doc.save()
    res.json(lahetetty)
    kayttaja.tehtavat = kayttaja.tehtavat.concat(lahetetty._id)
    const paivitettyKayttaja = await kayttaja.save()
    res.json(lahetetty.toJSON())
    /* res.send(tehtavaService.lisaaTehtava()) */
})

tehtavaController.put('/:id', async (req, res/* , next */) => {
    const body = req.body

  const tehtava = {
    otsikko: body.otsikko,
    tekija: body.tekija,
    kommentti: body.kommentti
  }
  const muokattu = await Tehtava.findByIdAndUpdate(req.params.id, tehtava)
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
    const token = getTokenFrom(authorization)
    const decodedToken = jwt.verify(token, salaus)
    const kayttaja = await Kayttaja.findById(decodedToken.id)
    let kayttajanTehtavat = kayttaja.tehtavat
    console.log(kayttajanTehtavat.length)
    console.log('kayttajan tehtavat listattuna ennen poisto muokkausta')
    let paivitetytTehtavat = []
    kayttajaTehtavat = kayttajanTehtavat.map(n => { if (n != req.params.id) {
      paivitetytTehtavat = paivitetytTehtavat.concat(n)
      console.log(n, 'eri')
    } else {
      console.log(n, 'SAMA SAMA SAMA SAMA')
    }})

    console.log(paivitetytTehtavat.length)

    let uusiKayttaja = {
      tunnus: kayttaja.tunnus,
      nimi: kayttaja.nimi,
      salasana: kayttaja.salasana,
      tehtavat: paivitetytTehtavat
    }
    await Tehtava.findByIdAndRemove(req.params.id)
    const muokattu = await Kayttaja.findByIdAndUpdate(decodedToken.id, uusiKayttaja)
    console.log(muokattu)
    /* Tehtava.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end()
    }) */
})

module.exports = tehtavaController