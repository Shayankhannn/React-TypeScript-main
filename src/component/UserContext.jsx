import { useState,createContext } from "react";

const userContext = createContext();

const UserProvider = ({children})=>{
    const [user,setUser] = useState({name:"John Doe"})


const updateUser = (newUser) => {
    setUser({name:newUser})
};

return (
    <userContext.Provider value={{user,updateUser}}>
        {children}
    </userContext.Provider>
)

}

export {UserProvider,userContext};
