import React from 'react'
import { Link, } from 'react-router-dom'
import { headerContent, btnCreated, titleHead } from './Head.module.css'
const Header = (props) => {
   return (
      <div className={headerContent}>
         <span className={titleHead}>FOODS APP</span>
         <Link to={props.route}>
            <button className={btnCreated}>{props.textBtn}</button>
         </Link>
      </div>
   )
}

export default Header