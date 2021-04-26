/* import express from 'express'; */
/* require('dotenv').config() */
const express = require('express')
/* import Tehtava from './schema/tehtava' */
const jwt = require('jsonwebtoken')
const tehtava = require('./schema/tehtava')
const tehtavaRoute = require('./controllers/tehtavaRoute')
const kayttajaLisaysRouter = require('./controllers/lisaaKayttaja')
const kirjautuminenRouter = require('./controllers/kirjauduSisaan')
const http = require('http')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')


/* const PORT = 3001 */

/*  mongoose.connect('mongodb+srv://pietari:pietari@maaliskuu.jawq8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000 // Timeout after 5s instead of 30s
})*/

const salaus = process.env.SALAUS
const mongodb = process.env.DBURL

console.log(salaus)
console.log('salaus')

/* 'mongodb+srv://pietari:pietari@maaliskuu.jawq8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' */

mongoose.connect(process.env.DBURL, { useNewUrlParser: true, useUnifiedTopology: true })    
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.error('error connection to MongoDB:', error.message)
    })

const app = express()

app.use(cors())

/* testi */

app.use(express.static('build'))

/* testi */

app.use(express.json())

app.get('/api', (req, res) => {
    res.send('hei')
})


app.use('/api/tehtavat', tehtavaRoute)

app.use('/api/lisaaKayttaja', kayttajaLisaysRouter)

app.use('/api/kirjautuminen', kirjautuminenRouter)

/* app.get('/api/tehtava', (req, res) => {
    res.send('asia')
    console.log('/api/tehtava linkki toimii')
});

app.post('/api/tehtava', async (req,res) => {
    const body = req.body
    const lisattava = new Tehtava({
        otsikko: body.otsikko,
        tekija: body.tekija
    })
    const tallennettu = await lisattava.save()
    console.log(tallennettu)
    res.send('hei')
}) */

const server = http.createServer(app)

app.listen(3001, () => {
    console.log(`Server is running at port 3001`)
})
