const { Router } = require('express');
const allDiests = require('../controllers/diets');

const router = Router();
router.get('/', async (req, res) => {
   try {
      const getAllDiets = await allDiests();
      res.json(getAllDiets);
   } catch (error) {
      console.log(error)
      res.status(404).json({ msg: error.message });
   }
})

module.exports = router