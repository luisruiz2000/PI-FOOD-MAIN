const { Router } = require('express');
const { paginationAndFilter } = require('../controllers/recipes')

const router = Router();

router.get('/', async (req, res) => {
   const { quantityElementsByPage, page, dietFilter } = req.query
   const allInfo = await paginationAndFilter({ quantityElementsByPage, page, dietFilter })
   res.send(allInfo)
})

module.exports = router;