import React, { createContext } from "react";

export const MyContext = createContext();

function ApiProvider({children}) {
    return(
        <MyContext.Provider value={{limite: 10}}>
            {children}
        </MyContext.Provider>
    )
}

export default ApiProvider