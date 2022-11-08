import React from 'react'
import { Link } from 'react-router-dom'
import { containerPage, btnPage } from './page.module.css';
const Page = () => {
   return (
      <div className={containerPage}>
         <Link to='/home'>
            <button className={btnPage}>
               <span>C</span>
               <span>o</span>
               <span>c</span>
               <span>i</span>
               <span>n</span>
               <span>a</span>
               <span>r</span>
            </button>
         </Link>
      </div>
   )
}

export default Page;