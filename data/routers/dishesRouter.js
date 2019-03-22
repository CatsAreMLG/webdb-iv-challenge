const express = require('express')
const Dishes = require('../helpers/dishesDb')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const dishes = await Dishes.getDishes()
    res.status(200).json(dishes)
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const dish = await Dishes.getDish(id)
    dish
      ? res.status(200).json(dish)
      : res.status(404).json({ error: 'Dish not found' })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.post('/', async (req, res) => {
  const { body } = req
  if (body && body.dish_name)
    try {
      const id = await Dishes.addDish(body)
      res.status(201).json(id)
    } catch (error) {
      res.status(500).json({ error })
    }
  else res.status(500).json({ error: 'Please provide a dish name' })
})

module.exports = router
