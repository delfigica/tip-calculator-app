import React, { useContext } from "react";
import { dataContext } from "../hooks/dataContext";

export const Form = () => {
  const { data, setData } = useContext(dataContext);

  const handleInputChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const handleClick = (tip) => {
    setData({
      ...data,
      tip: tip,
    });
  };
  const handleCustomTip = ({ target }) => {
    setData({
      ...data,
      tip: target.value / 100,
    });
  };
  console.log(data);
  return (
    <div className="form-container">
      <div className="bill-container">
        <p className="text-form">Bill</p>
        <input
          type="number"
          name="bill"
          value={data.bill}
          className="form-input"
          onChange={handleInputChange}
        />
      </div>
      <div className="container-tips">
        <p className="text-form">Select Tip %</p>
        <div className="btns-container-tips">
          <button className="btn-tip" onClick={() => handleClick(0.05)}>
            5%
          </button>
          <button className="btn-tip" onClick={() => handleClick(0.1)}>
            10%
          </button>
          <button className="btn-tip" onClick={() => handleClick(0.15)}>
            15%
          </button>
          <button className="btn-tip" onClick={() => handleClick(0.25)}>
            25%
          </button>
          <button className="btn-tip" onClick={() => handleClick(0.5)}>
            50%
          </button>
          <input
            type="number"
            placeholder="custom"
            onChange={handleCustomTip}
            value={data.tip}
            className="input-tip"
          />
        </div>
      </div>
      <div className="people-container">
        <p className="text-form">Number of People</p>
        <input
          type="number"
          name="people"
          className="form-input"
          value={data.people}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};
