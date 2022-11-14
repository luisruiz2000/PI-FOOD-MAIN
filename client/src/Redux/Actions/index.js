import axios from "axios";
import {
  SET_RECIPES,
  SET_DIETS,
  SET_DIET_FILTER,
  SET_ORDER_BAY,
  SEARCH_BY_NAME,
  GET_DETAIL_RECIPE,
} from "../Types";

const paginationAndFilter = ({
  quantityElementsByPage = 9,
  dietFilter = null,
  page = 1,
}) => {
  return async (dispatch) => {
    const paginationFilter = await axios(
      `http://localhost:3001/paginationAndFilter?quantityElementsByPage=${quantityElementsByPage}&page=${page}&dietFilter=${dietFilter}`
    );

    dispatch({
      type: SET_RECIPES,
      payload: {
        recipes: paginationFilter.data.recipesByPage,
        pagesQuantity: paginationFilter.data.pagesQuantity,
      },
    });
  };
};

const setDietsAction = () => {
  return async (dispatch) => {
    const allDiets = await axios("http://localhost:3001/diets/");

    dispatch({
      type: SET_DIETS,
      payload: allDiets.data,
    });
  };
};

const setDietFilterAction = (payload) => {
  return (dispatch) => {
    dispatch({
      type: SET_DIET_FILTER,
      payload,
    });
  };
};

const setOrderBy = (payload) => {
  return (dispatch) => {
    dispatch({
      type: SET_ORDER_BAY,
      payload,
    });
  };
};

const searchByName = (payload) => {
  return async (dispatch) => {
    const allDiets = await axios(
      `http://localhost:3001/recipes?name=${payload}`
    );

    dispatch({
      type: SEARCH_BY_NAME,
      payload: allDiets.data,
    });
  };
};

const getDetailRecipe = (payload) => {
  return async (dispatch) => {
    const detailRecipe = await axios(
      `http://localhost:3001/recipes/${payload}`
    );

    dispatch({
      type: GET_DETAIL_RECIPE,
      payload: detailRecipe.data,
    });
  };
};

export {
  paginationAndFilter,
  setDietsAction,
  setDietFilterAction,
  setOrderBy,
  searchByName,
  getDetailRecipe,
};
