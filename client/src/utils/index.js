export const orderArrayByUtil = (arrayToOrder, orderKey) => {
   if (orderKey === 'az') {
      return arrayToOrder.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
   }
   if (orderKey === 'za') {
      return arrayToOrder.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
   }
   if (orderKey === 'minMax') {
      return arrayToOrder.sort((a, b) => a.healthScore < b.healthScore ? -1 : 1)
   }
   if (orderKey === 'maxMin') {
      return arrayToOrder.sort((a, b) => a.healthScore < b.healthScore ? 1 : -1)
   }
}

export const setItemInArray = (paramArray, paramItem) => {
   if (paramArray.includes(paramItem)) {
      return paramArray.filter(item => item !== paramItem)
   }

   return [...paramArray, paramItem]
}