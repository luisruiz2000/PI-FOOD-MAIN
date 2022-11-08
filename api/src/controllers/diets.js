const { getApiInfo } = require('./recipes');

module.exports = async () => {
  const dietsApi = await getApiInfo();
  return dietsApi.reduce((acc, curr) => {
    if (curr.diets) {
      curr.diets.forEach((d) => {
        if (acc.includes(d) === false) acc.push(d);
      });
    }
    return acc;
  }, []);
}