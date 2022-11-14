import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { getDetailRecipe } from '../../Redux/Actions'
import Head from '../Home/Header/Head/Head'
import { detail, contentDetail, imgDetail } from './Detail.module.css'
import imgDefault from '../../asset/images/imageCard.jpg'

const Detail = () => {
   const { recipeId } = useParams()
   const dispatch = useDispatch()
   const { detailRecipe } = useSelector(state => state)

   const { title, healthScore, image, summary, diets, dishTypes, instructions } = detailRecipe

   useEffect(() => {
      dispatch(getDetailRecipe(recipeId))
   }, []);


   return (
      <div>
         <Head textBtn='Regresar' route='/home' />
         <div className={detail}>
            <div className={contentDetail}>
               <img className={imgDetail} src={image ? image : imgDefault} />
               <div>
                  <h3>{title}</h3>
                  <p><b>Dietas: </b>{diets}</p>
                  <p><b>Nivel de salud: </b>{healthScore}</p>
                  <p><b>Tipo de plato: </b>{dishTypes}</p>
                  <p><b>Resumem: </b>{summary}</p>
               </div>
            </div>
            <p><b>Paso a paso: </b>{instructions}</p>
         </div>
      </div>
   )
}

export default Detail