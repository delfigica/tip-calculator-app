import React, { useContext } from "react";
import { dataContext } from "../hooks/dataContext";

export const Amount = () => {
  const { data, setData } = useContext(dataContext);

  const { bill, tip, people } = data;

  let tipAmount = (bill * tip) / parseInt(people);

  let total = (bill * tip + parseInt(bill)) / parseInt(people);

  const handleReset = () => {
    setData({
        bill: 0,
        people: 1,
        tip: 0
    })
  }
  return (
    <div className="amount-container">
      <div className="tips-amount-container">
        <div className="tip-amount-container">
          <div className="text-amount">
            <p className="title-amount">Tip Amount</p>
            <p className="person-amount">/ person</p>
          </div>
          <div className="number-amount">
            <h2>${tipAmount || 0}</h2>
          </div>
        </div>
        <div className="tip-amount-container">
          <div className="text-amount">
            <p className="title-amount">Total</p>
            <p className="person-amount">/ person</p>
          </div>
          <div className="number-amount">
            <h2>${total || 0}</h2>
          </div>
        </div>
      </div>
      <div className="btn-amount-container">
          <button onClick={handleReset} className="btn-reset">RESET</button>
      </div>
    </div>
  );
};
