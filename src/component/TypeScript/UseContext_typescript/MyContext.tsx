import React, { createContext, FC, ReactNode, useState } from "react";


interface MyContext {
count:number;
increment: () => void;
decrement:()=>void;
}

export const MyContext = createContext<MyContext>({
    count:0,
    increment: () => {},
    decrement: () => {}
}) 

interface MyProvider {
    children: ReactNode;
}

const MyProvider : FC<MyProvider> = ({children})=>{
    const [count, setCount] = useState(0);
    
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);


    return (
         <MyContext.Provider 
         value={{count, increment, decrement}}>

{children}

    </MyContext.Provider>
    );

}

export default MyProvider;