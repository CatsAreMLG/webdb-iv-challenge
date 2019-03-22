const express = require('express')
const knex = require('knex')
const helmet = require('helmet')
const server = express()
const db = require('./dbConfig')
const knexConfig = require('./knexfile')
const DishesRouter = require('./data/routers/dishesRouter')
const PORT = 9090

server.use(helmet())
server.use(express.json())
server.use('/api/dishes', DishesRouter)

server.get('/', (req, res) => res.send('<h2>Welcome to the API</h2>'))

server.listen(PORT, _ => console.log('Listening on port ' + PORT))
