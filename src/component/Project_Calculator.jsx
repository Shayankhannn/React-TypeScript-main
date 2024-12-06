import React, { useState } from "react";

const Project_Calculator = () => {
  const [input, setInput] = useState("");

  const clear = () => {
    setInput("");
  };

const display = (value)=> setInput(input + value)

const calculate = ()=> setInput(eval(input))

  return (
    <div>
      <form style={{display:"flex", gap:"30px", fontSize:"22px"}}>
        <input type="text" value={input} />

        <h3 onClick={() => clear()}>clear</h3>

        <h3 onClick={()=>display('1')}>1</h3>
        
        <h3 onClick={()=>display('2')}>2</h3>
        <h3 onClick={()=>display('3')}>3</h3>
        <h3 onClick={()=>display('4')}>4</h3>
        <h3 onClick={()=>display('5')}>5</h3>
        <h3 onClick={()=>display('6')}>6</h3>
        <h3 onClick={()=>display('7')}>7</h3>
        <h3 onClick={()=>display('8')}>8</h3>
        <h3 onClick={()=>display('9')}>9</h3>
        <h3 onClick={()=>display('0')}>0</h3>
        <h3 onClick={()=>display('00')}>00</h3>

        <h3 onClick={()=>display('/')}>/</h3>
        <h3 onClick={()=>display('*')}>*</h3>
        <h3 onClick={()=>display('-')}>-</h3>
        <h3 onClick={()=>display('+')}>+</h3>
        <h3 onClick={()=>calculate()}>=</h3>
      </form>
    </div>
  );
};

export default Project_Calculator;
