const addDietsDb = require('./controllers/diets')
const { TypeDiet } = require('./db');

module.exports = async () => {
    const diets = await addDietsDb();

    try {
        diets.forEach(async (d) => {
            await TypeDiet.findOrCreate({
                where: { name: d },
            })
        })
        console.log('Dietas cargadas en la db correctamente')
    } catch (error) {
        console.log(error)
    }

}