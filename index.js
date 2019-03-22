const express = require('express')
const helmet = require('helmet')
const server = express()
const DishesRouter = require('./data/routers/dishesRouter')
const RecipesRouter = require('./data/routers/recipesRouter')
const PORT = 9090

server.use(helmet())
server.use(express.json())
server.use('/api/dishes', DishesRouter)
server.use('/api/recipes', RecipesRouter)

server.get('/', (req, res) => res.send('<h2>Welcome to the API</h2>'))

server.listen(PORT, _ => console.log('Listening on port ' + PORT))
