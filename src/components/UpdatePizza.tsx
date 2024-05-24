import React, { useState } from "react";

//Here you want a button so when the user clicks the button it adds 'Cheese' to the toppoings
const UpdatePizza = () => {
  const [pizza, setPizza] = useState({
    name: "King Aurthor Supreme",
    toppings: ["Mushroom,", "Onions,"],
  });

  const handleClick = () => {
    //pizza.toppings.push('Cheese');

    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };
  return (
    <>
      <span>pizza toppings : {pizza.toppings}</span>
      <button onClick={handleClick}>Add Cheese</button>
    </>
  );
};

export default UpdatePizza;
