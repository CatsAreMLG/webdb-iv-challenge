const express = require('express')
const Recipes = require('../helpers/RecipesDb')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes()
    res.status(200).json(recipes)
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.post('/', async (req, res) => {
  const { body } = req
  if (body && body.recipe_name && body.dish_id)
    try {
      const id = await Recipes.addRecipe(body)
      res.status(201).json(id)
    } catch (error) {
      res.status(500).json({ error })
    }
  else
    res.status(500).json({ error: 'Please provide a recipe name and dish id' })
})

module.exports = router
