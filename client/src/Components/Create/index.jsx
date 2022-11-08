import Head from '../Home/Header/Head/Head'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { setDietsAction } from '../../Redux/Actions'
import { formContent, createContent, formCreate, inputCreate, selectCreate, btnCreate, textInputError } from './Create.module.css'
const Create = () => {

   const dispatch = useDispatch()
   const { diets } = useSelector(state => state);

   const [name, setName] = useState('');
   const [abstract, setAbstract] = useState('');
   const [healthScore, setHealthScore] = useState('');
   const [instructions, setInstructions] = useState('');

   useEffect(() => {
      dispatch(setDietsAction())
   }, [])

   const handleChangeinputs = (ev) => {
      const name = ev.target.value
      setName(name)
   }

   const handleSubmit = (ev) => {
      ev.preventDefault();
      console.log('name=>>', name);
      return typeof name === 'number' ? console.log('error') : console.log('correcto')
   }

   return (
      <div className={createContent}>

         <Head textBtn='Regresar' route='/home' />

         <div className={formContent}>
            <form onSubmit={handleSubmit}>

               <div className={formCreate}>
                  <input
                     className={inputCreate}
                     placeholder='Nombre'
                     value={name}
                     onChange={handleChangeinputs}
                  />
                  <p className={textInputError}>lorem lorem lorem</p>

                  <input
                     className={inputCreate}
                     placeholder='Resumen'
                     value={abstract}
                     onChange={handleChangeinputs}
                  />
                  <p className={textInputError}>lorem lorem lorem</p>

                  <input
                     className={inputCreate}
                     placeholder='Nivel de salud'
                     value={healthScore}
                     onChange={handleChangeinputs}
                  />
                  <p className={textInputError}>lorem lorem lorem</p>

                  <input
                     className={inputCreate}
                     placeholder='Paso a paso'
                     value={instructions}
                     onChange={handleChangeinputs}
                  />
                  <p className={textInputError}>lorem lorem lorem</p>

                  <select
                     className={selectCreate}>
                     <option>Tipo de dieta</option>
                     {
                        diets.map(diet => {
                           return (
                              <option key={diet} value={diet}>{diet}</option>
                           )
                        })
                     }
                  </select>
               </div>
               <div>
                  <p><i>ERROR:</i>Por favor rellene el fomulario correctamente</p>
               </div>
               <button className={btnCreate}>Crear</button>

            </form>
         </div>
      </div >
   )
}

export default Create