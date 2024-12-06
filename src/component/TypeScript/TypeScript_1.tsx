import React, { FC, ReactNode } from 'react'


type user = {
    
        name:string;
         age:number;
         isStudent:boolean
        
}

// interface user  {
    
//         name:string;
//          age:number;
//          isStudent:boolean
        
// }

// interface user {
//     children: ReactNode
// }

// const TypeScript_1  = ({children} : user) => {
// old way of doing it 
const TypeScript_1 : FC<user>  = ({name,age,isStudent} ) => {
  return (
    <div>
        <h1>Typescript</h1>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{isStudent}</h1>
        
    </div>
  )
}

export default TypeScript_1