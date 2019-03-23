const express = require('express')
const Ingredients = require('../helpers/ingredientsDb')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const ingredients = await Ingredients.getIngredients()
    res.status(200).json(ingredients)
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const ingredient = await Ingredients.getIngredient(id)
    ingredient
      ? res.status(200).json(ingredient)
      : res.status(404).json({ error: 'Ingredient not found' })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.post('/', async (req, res) => {
  const { body } = req
  if (body && body.ingredient_name)
    try {
      const id = await Ingredients.addIngredient(body)
      res.status(201).json(id)
    } catch (error) {
      res.status(500).json({ error })
    }
  else res.status(500).json({ error: 'Please provide an ingredient name' })
})

module.exports = router
