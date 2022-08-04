import React, { createContext, useContext } from "react";
import network from '../components/images/network.jpg'

const AppContext = createContext();

const AppProvider = ({children}) => {
    return <AppContext.Provider value={{projectName:"SEXTANT", imgNetwork:network}}>{children}</AppContext.Provider>
};


const useGlobalContext = () => {
    return useContext(AppContext);
}


export {AppContext, AppProvider, useGlobalContext};