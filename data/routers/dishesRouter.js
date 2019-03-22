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

module.exports = router
