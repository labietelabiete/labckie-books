import React, { useState } from "react";
import Cards from "react-credit-cards";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "react-credit-cards/es/styles-compiled.css";

export default function Payment() {
  const [cardValues, setCardValues] = useState({
    cvc: "",
    expiry: "",
    focus: "name",
    name: "",
    number: "",
  });

  const handleInputFocus = (e: any) => {
    setCardValues({
      ...cardValues,
      [focus]: e.target.value,
    });
  };

  const handleInputChange = (e: any) => {
    setCardValues({
      ...cardValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div id="PaymentForm">
      <Cards
        cvc={cardValues.cvc}
        expiry={cardValues.expiry}
        focused={cardValues.focus}
        name={cardValues.name}
        number={cardValues.number}
      />
      <form action="">
        <input
          type="number"
          name="cvc"
          placeholder="CVC"
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="expiry"
          placeholder="Expire Date"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
