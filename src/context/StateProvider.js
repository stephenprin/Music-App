
import { createContext, useContext, useReducer } from "react";  




const stateContext = createContext();

export const StateProvider = ({ children, initialState, reducer }) => { 
    return (
        <stateContext.Provider value={useReducer(reducer, initialState) }>
            {children}
        </stateContext.Provider>
    )
}


export const useStateGlobal = () => useContext(stateContext);