import React, { useEffect, useState } from 'react'

const MineTest = () => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)


  const add = (item)=>{
    setCart((prevCart)=>{
    const itemExists = prevCart.find((cartItem)=>cartItem.id === item.id)

    if(itemExists){
        return prevCart.map((cartItem)=>
        cartItem.id === item.id ?  {...cartItem, quantity: cartItem.quantity + 1} : cartItem

        )
    }else{
        return [...prevCart,{...item,quantity:1}]

    }

    }
    
    )
    }

    const removeItem = (id)=>{
        setCart((prevCart)=>prevCart.filter((cartItem)=>cartItem.id !== id))
    }

    const updateCart = (id,newQuantity)=>{
setCart((prevCart)=>prevCart.map((cartItem)=>cartItem.id===id ? {...cartItem,quantity:newQuantity}:cartItem))
    }

    useEffect(()=>{
        const total = cart.reduce(
            (sum,item)=> sum + item.price * item.quantity,0 
    );
    setTotalPrice(total)

    },[cart]);
 
    return (
    <div>
        <ul>
            {cart.map((item)=>(
                <li key={item.id}>{item.test} - ${item.price} x{item.quantity}
                <button onClick={()=>updateCart( 
                    item.id,item.quantity+  1
                )}>+</button>
                <button onClick={()=>updateCart( 
                    item.id,Math.max( item.quantity -  1,0)
                )}>-</button>
                <button onClick={()=>removeItem( 
                    item.id
                )}>remove</button>
                
                </li>
                
            ))}
        </ul>
        <h2>Total: ${totalPrice}</h2>
        <button onClick={()=>add({id:1,test:"Test",price:20})}>Add</button>
    </div>
  )
}

export default MineTest