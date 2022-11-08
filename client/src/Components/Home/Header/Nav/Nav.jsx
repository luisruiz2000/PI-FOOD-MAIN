import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { navContent, sectionNav, btnSearchName, inputSeachtByName } from './Nav.module.css'
import {
   setDietsAction,
   paginationAndFilter,
   setDietFilterAction,
   setOrderBy,
   searchByName
} from '../../../../Redux/Actions'

const Nav = () => {

   const dispatch = useDispatch()
   const { diets } = useSelector(state => state);
   const [searchName, setSearchName] = useState('')

   useEffect(() => {
      dispatch(setDietsAction())
   }, []);

   const handleRecipeByDiets = (ev) => {

      const type = ev.target.value === 'todas las dietas' ? null : ev.target.value;

      dispatch(setDietFilterAction(type))
      dispatch(paginationAndFilter({ dietFilter: type }))
   }

   const handleSortRecipes = (ev) => {
      dispatch(setOrderBy(ev.target.value))
   }


   const changeSearchName = (ev) => {
      setSearchName(ev.target.value)
   }

   const submitSearchName = (ev) => {
      ev.preventDefault();
      const name = searchName
      dispatch(searchByName(name))
   }

   return (
      <div>
         <hr />
         <div className={navContent}>

            <div className={sectionNav}>
               <form onSubmit={submitSearchName}>
                  <input
                     type="text"
                     className={inputSeachtByName}
                     value={searchName}
                     onChange={changeSearchName}
                     placeholder="Buscar Por Nombre"
                  />
                  <button className={btnSearchName} type="submit">Buscar</button>
               </form>

               <select onChange={handleRecipeByDiets}>
                  <option value={null}>todas las dietas</option>
                  {
                     diets.map(diet => {
                        return (
                           <option key={diet} value={diet}>{diet}</option>
                        )
                     })
                  }
               </select>

               <select onChange={handleSortRecipes}>
                  <option value='az'>A-Z</option>
                  <option value='za'>Z-A</option>
                  <option value='minMax'>Min - Max</option>
                  <option value='maxMin'>Max - Min</option>
               </select>

            </div>
         </div>
      </div>
   )
}

export default Nav;