require("dotenv").config();
const { APIKEY } = process.env;
const { Router } = require("express");
const { Recipe, TypeDiet } = require("../db");
const { getDbInfo, getAllInfo } = require("../controllers/recipes");

const axios = require("axios");
const router = Router();

router.get("/", async (req, res) => {
  const { name } = req.query;
  const allRecipes = await getAllInfo();
  try {
    if (name) {
      let recipeInfo = await allRecipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(name.toLowerCase())
      );
      recipeInfo.length
        ? res.status(200).json(recipeInfo)
        : res
            .status(404)
            .json({
              msg: "No se encontraron resultados, Intenta buscar otra receta",
            });
    } else {
      res.status(200).json(allRecipes);
    }
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const idP = req.params.id;
  if (Number(idP)) {
    const urlId = await axios(
      `https://api.spoonacular.com/recipes/${idP}/information?apiKey=${APIKEY}`
    );
    res.json(urlId.data);
  } else {
    const recipesTotal = await getDbInfo();
    const filterId = recipesTotal.filter((recipes) => {
      return recipes.id === idP;
    });
    res.json(filterId);
  }
});

router.post("/", async (req, res) => {
  let { name, summary, healthScore, instructions, createdInDb, diets } =
    req.body;
  try {
    let recipesInDb = await Recipe.create({
      name,
      summary,
      healthScore,
      createdInDb,
      instructions,
    });

    let diestInDb = await TypeDiet.findAll({
      where: { name: diets },
    });
    recipesInDb.addTypeDiet(diestInDb);
    res.status(201).json("Reseta creada correctamente");
    console.log("Reseta Creada correctamente");
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
});

module.exports = router;
