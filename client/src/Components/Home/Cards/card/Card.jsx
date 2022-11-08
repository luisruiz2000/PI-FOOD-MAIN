import React from 'react'
import { cardContent, textCard, titleCard, imageCard, } from './Card.module.css'

const Card = (props) => {


  return (
    <div className={cardContent}>

      <img className={imageCard} src={props.image} />
      <div>

        <p className={titleCard}>{props.name}</p>
        <br />

        <p className={textCard}> <i className={titleCard}>Dietas</i> <br />{props.diets}</p>
        <br />
        <i> <b>Puntaje de salud:</b> {props.healthScore}</i>

      </div>

    </div>
  )
}

export default Card