import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { paginationAndFilter } from '../../../Redux/Actions'
import { contentPagination, listPagination, numberPage, contentPage } from './Pagination.module.css'

const Pagination = () => {
   const dispatch = useDispatch();

   const { pagesQuantity, dietFilter } = useSelector(state => state);

   const numberPages = []

   for (let i = 1; i <= pagesQuantity; i++) numberPages.push(i)

   const getRecipesByPage = (page) => {
      dispatch(paginationAndFilter({ page, dietFilter }))
   }

   return (
      <nav className={contentPagination}>
         <ul className={listPagination}>
            {
               numberPages.map(number => {
                  return (
                     <li key={number} className={contentPage}>
                        <a className={numberPage} onClick={() => getRecipesByPage(number)}>{number}</a>
                     </li>
                  )
               })
            }
         </ul>
      </nav>
   )
}

export default Pagination;