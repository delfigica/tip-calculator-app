import React, { useState } from "react";
import { Amount } from "./components/Amount";
import { Form } from "./components/Form";
import { dataContext } from "./hooks/dataContext";

export const TipCalculatorApp = () => {
  const [data, setData] = useState({});

  return (
    <dataContext.Provider value={{ data, setData }}>
      <div className="container">
        <div className="title-container">
          <h2 className="title">SPLI</h2>
          <h2 className="title">TTER</h2>
        </div>
        <div className="card">
          <Form /> <Amount />
        </div>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://www.delfi.ar">Delfina Cañas</a>.
        </div>
      </div>
    </dataContext.Provider>
  );
};
