import { useState } from "react";

//Update the cart object items of id 1 to show a  quanity 2 with  a button click
const Cart = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Bacon", quantity: 1 },
      { id: 2, title: "Cheese", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  };

  return (
    <>
      <h2>Cart</h2>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.title} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Update Cart</button>
    </>
  );
};

export default Cart;
