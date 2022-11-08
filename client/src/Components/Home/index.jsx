import React from 'react'
import Cards from './Cards';
import Header from './Header'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { paginationAndFilter } from '../../Redux/Actions'
const Home = () => {

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(paginationAndFilter({}))
   }, [])

   return (
      <div>
         <div>
            <Header />
            <Cards />
         </div>
      </div>
   )
}

export default Home;