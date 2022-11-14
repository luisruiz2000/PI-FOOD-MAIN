import Head from "../Home/Header/Head/Head";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { setDietsAction } from "../../Redux/Actions";
import { setItemInArray } from "../../utils";
import {
  formContent,
  createContent,
  formCreate,
  inputCreate,
  selectCreate,
  btnCreate,
  textInputError,
  checkbox,
} from "./Create.module.css";
const Create = () => {
  const dispatch = useDispatch();
  const { diets } = useSelector((state) => state);

  const [form, setForm] = useState({
    name: "",
    summary: "",
    healthScore: 0,
    instructions: "",
    diets: [],
  });

  const [error, setError] = useState({});

  useEffect(() => {
    dispatch(setDietsAction());
  }, []);

  const handleChangeinputs = (ev) => {
    const inputName = ev.target.name;
    const inputValue = ev.target.value;

    // setForm({
    //   ...form,
    //   [inputName]: inputValue,
    // });

    if (form.name.length > 5) {
      setForm({
        ...form,
        [inputName]: inputValue,
      });
    } else {
      setError({
        name: "el nombre debe contener mas de 5 caracteres",
      });
    }

    // setForm({
    //   ...form,
    //   [inputName]: inputValue,
    // });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // return typeof name === 'number' ? console.log('error') : console.log('correcto')
  };

  const handleChangeCheckbox = (ev) => {
    console.log("ev=>", ev.target.value);
    const valueCheck = ev.target.value;

    setForm({
      ...form,
      diets: setItemInArray(form.diets, valueCheck),
    });
  };

  return (
    <div className={createContent}>
      <Head textBtn="Regresar" route="/home" />

      <div className={formContent}>
        <form onSubmit={handleSubmit}>
          <div className={formCreate}>
            <input
              type="text"
              name="name"
              className={inputCreate}
              placeholder="Nombre"
              // value={form}
              onChange={handleChangeinputs}
            />
            <p className={textInputError}>{error.name ? error.name : ""}</p>

            <input
              type="text"
              name="summary"
              className={inputCreate}
              placeholder="Resumen"
              // value={form}
              onChange={handleChangeinputs}
            />
            <p className={textInputError}>lorem lorem lorem</p>

            <input
              type="number"
              name="healthScore"
              className={inputCreate}
              placeholder="Nivel de salud"
              // value={form}
              onChange={handleChangeinputs}
            />
            <p className={textInputError}>lorem lorem lorem</p>

            <input
              type="text"
              name="instructions"
              className={inputCreate}
              placeholder="Paso a paso"
              // value={form}
              onChange={handleChangeinputs}
            />
            <p className={textInputError}>lorem lorem lorem</p>
            <div className={selectCreate}>
              {diets.map((diet) => {
                return (
                  <div key={diet}>
                    <label className={checkbox} htmlFor={diet}>
                      {diet}
                    </label>
                    <input
                      onChange={handleChangeCheckbox}
                      name="diet"
                      id={diet}
                      type="checkbox"
                      value={diet}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <p>
              <i>ERROR:</i>Por favor rellene el fomulario correctamente
            </p>
          </div>
          <button className={btnCreate}>Crear</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
