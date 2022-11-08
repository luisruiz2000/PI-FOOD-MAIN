require('dotenv').config();
const { APIKEY } = process.env;
const axios = require('axios');
const { Recipe, TypeDiet } = require('../db')
const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&addRecipeInformation=true&number=100`

const getApiInfo = async () => {
   const apiUrl = await axios(API_URL)
   const getInfo = await apiUrl.data.results.map(r => {
      return {
         id: r.id,
         name: r.title,
         image: r.image,
         healthScore: r.healthScore,
         diets: r.diets.map(r => r)
      }
   })
   return getInfo;
}

const getDbInfo = async () => {
   const infoDb = await Recipe.findAll({
      include: {
         model: TypeDiet,
         attributes: ['name'],
         through: {
            attributes: [],
         },
      }
   })
   return infoDb.map(r => {
      return {
         id: r.id,
         name: r.name,
         image: r.image,
         summary: r.summary,
         healthScore: r.healthScore,
         instructions: r.instructions,
         diets: r.TypeDiets.map(r => r.name),
      }
   })
}

const getAllInfo = async () => {
   const apiInfo = await getApiInfo();
   const dbInfo = await getDbInfo();
   const allInfo = apiInfo.concat(dbInfo)
   return allInfo;
}

const paginationAndFilter = async ({ quantityElementsByPage, page, dietFilter }) => {

   const apiInfo = await getAllInfo();
   const allRecipes = apiInfo.map(r => r).sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)

   const recipesFilter = !dietFilter || dietFilter === 'null' ? allRecipes.map(recipe => recipe) : allRecipes.filter(recipe => {
      return recipe.diets.includes(dietFilter)
   })

   const pagesQuantity = Math.ceil(recipesFilter.length / quantityElementsByPage);
   const recipesByPage = [];

   for (let i = 0; i < pagesQuantity; i++) {
      recipesByPage.push(recipesFilter.splice(0, quantityElementsByPage))
   }

   return {
      recipesQuantity: allRecipes.length,
      pagesQuantity,
      recipesByPageQuantity: recipesByPage[page - 1].length,
      recipesByPage: recipesByPage[page - 1]
   };
}

module.exports = {
   getApiInfo,
   getDbInfo,
   getAllInfo,
   paginationAndFilter
}
