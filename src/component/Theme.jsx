import React from 'react'
import  { useState, useEffect } from "react";


const Theme = () => {

  
    
      const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
      });
    
      useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.className = theme; 
      }, [theme]);
    
      return (
        <button onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}>
          Toggle to {theme === "light" ? "dark" : "light"} mode
        </button>
      );
    };
    
 


export default Theme