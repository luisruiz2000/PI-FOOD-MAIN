import { orderArrayByUtil } from '../../utils';
import {
   SET_RECIPES,
   SET_DIETS,
   SET_DIET_FILTER,
   SET_ORDER_BAY,
   SEARCH_BY_NAME,
   GET_DETAIL_RECIPE
} from '../Types'

const initialState = {
   recipes: [],
   detailRecipe: [],
   orderBy: 'az',
   pagesQuantity: 1,
   currentPage: 1,
   diets: [],
   dietFilter: null,
   loading: false,
   error: null
}
export default (state = initialState, action) => {
   switch (action.type) {
      case SET_RECIPES:
         return {
            ...state,
            recipes: orderArrayByUtil(action.payload.recipes, state.orderBy),
            pagesQuantity: action.payload.pagesQuantity
         }
      case SET_DIETS:
         return {
            ...state,
            diets: action.payload
         }
      case SET_DIET_FILTER:

         return {
            ...state,
            dietFilter: action.payload
         }

      case SET_ORDER_BAY:
         return {
            ...state,
            orderBy: action.payload,
            recipes: orderArrayByUtil(state.recipes, action.payload),
         }

      case SEARCH_BY_NAME:

         return {
            ...state,
            recipes: action.payload
         }

      case GET_DETAIL_RECIPE:
         console.log('====================================');
         console.log('REDUCER PAYLOAS', action.payload);
         console.log('====================================');
         return {
            ...state,
            detailRecipe: action.payload
         }

      default:
         return state;
   }
}