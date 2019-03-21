const express = require('express')
const knex = require('knex')
const server = express()
const helmet = require('helmet')
const db = require('./dbConfig')

const PORT = 9090

server.use(helmet())
server.use(express.json())

server.get('/', (req, res) => res.send('<h2>Welcome to the API</h2>'))

server.listen(PORT, _ => console.log('Listening on port ' + PORT))
