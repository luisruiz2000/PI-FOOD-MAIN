const { Router } = require('express');
const recipes = require('./recipes')
const diets = require('./diets')
const paginationAndFilter = require('./paginationAndFilter');

const router = Router();


router.use('/recipes', recipes)
router.use('/diets', diets)
router.use('/paginationAndFilter', paginationAndFilter)



module.exports = router;