import React from 'react'
import { useState } from 'react'
const Cart = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
 
    // Add item to the cart
    const addItemToCart = (item) => {
       setCart((prevCart) => {
          const itemExists = prevCart.find((cartItem) => cartItem.id === item.id);
          if (itemExists) {
             return prevCart.map((cartItem) =>
                cartItem.id === item.id
                   ? { ...cartItem, quantity: cartItem.quantity + 1 }
                   : cartItem
             );
          } else {
             return [...prevCart, { ...item, quantity: 1 }];

          }
       });
    };
 
    // Remove item from the cart
    const removeItemFromCart = (id) => {
       setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
    };
 
    // Update quantity of an item
    const updateQuantity = (id, newQuantity) => {
       setCart((prevCart) =>
          prevCart.map((cartItem) =>
             cartItem.id === id ? { ...cartItem, quantity: newQuantity } : cartItem
          )
       );
    };
    
 
    // Calculate the total price
    React.useEffect(() => {
       const total = cart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
       );
       setTotalPrice(total);
    }, [cart]);
 
    return (
       <div>
          <h1>Shopping Cart</h1>
          <ul>
             {cart.map((item) => (
                <li key={item.id}>
                   {item.name} - ${item.price} x {item.quantity}
                   <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      +
                   </button>
                   <button
                      onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1,1))}
                   >
                      -
                   </button>
                   <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
                </li>
             ))}
          </ul>
          <h2>Total: ${totalPrice}</h2>
          <button onClick={() => addItemToCart({ id: 1, name: "Item A", price: 20 })}>
             Add Item A
          </button>
       </div>
    );
 }

export default Cart