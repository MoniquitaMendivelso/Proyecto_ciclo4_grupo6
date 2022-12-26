import React from "react";

// test para el funcionamiento  de context:
const context = React.createContext({})

export default function context({children}){
    return(
        <context.Provider>
            {children}
        </context.Provider>
    )
}