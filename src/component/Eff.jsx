import React from 'react'
import { useState, useEffect } from "react";

const Eff = () => {

   

  
      const [time, setTime] = useState(new Date().toLocaleTimeString());
    
      useEffect(() => {
        const timer = setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000); 
    
        return () => clearInterval(timer); 
      }, []); 
    
      return <div>Current time: {time}</div>;
    };
    
  
export default Eff