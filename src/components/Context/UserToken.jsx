import { createContext, useEffect, useState } from "react";

 
 export let UserToken = createContext(null);

 export default function UserTokenProvider({children}){

    const [isLogin,setLogin] = useState(null);

    useEffect(()=>{
        if(localStorage.getItem("token")){
            setLogin(localStorage.getItem("token"))
        }
    },[])

    return  <UserToken.Provider value={{isLogin,setLogin}}>
            {children}
        </UserToken.Provider>
    
    
 }