import React from 'react'
import Nav from './Nav/Nav'
import Head from './Head/Head'
const Herader = () => {
   return (
      <div>
         <Head textBtn='Crear Receta' route='/create' />
         <Nav />
      </div>
   )
}

export default Herader;