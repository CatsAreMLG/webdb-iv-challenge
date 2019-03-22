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

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const recipe = await Recipes.getRecipe(id)
    if (recipe && recipe.recipe_name) {
      let newRecipe = {
        recipe_name: '',
        dish_name: '',
        ingredients: []
      }
      for (let i in recipe) {
        newRecipe.recipe_name = recipe[i].recipe_name
        newRecipe.dish_name = recipe[i].dish_name
        newRecipe.ingredients.push({
          quantity: recipe[i].quantity,
          measurement_name: recipe[i].measurement_name,
          ingredient_name: recipe[i].ingredient_name
        })
      }
      res.status(200).json(newRecipe)
    } else res.status(404).json({ error: 'Recipe not found' })
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
