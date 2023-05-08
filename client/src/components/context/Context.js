import React, {useState} from 'react'

export const ApiContext = React.createContext();

function ChemContext({children}) {
    
    const [apis, setApis] = useState([]) 

    return (
        <ApiContext.Provider value={{apis, setApis}}>
            {children}
        </ApiContext.Provider>
  )
}

export default ChemContext;
