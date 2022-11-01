import React,{createContext,useState} from "react";

export const WalletContext = createContext(null)

export const WalletContextProvider = ({children})=>{
    const [userInfo,setUserInfo] = useState('');


    const connectXWallet =()=>{

    }

   const value = {
        userInfo,
        connectXWallet,
        setUserInfo
    }

    return(
        <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
    )

}