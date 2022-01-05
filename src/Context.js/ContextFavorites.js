import React, { useState } from 'react'

const ContextFavorites = React.createContext();

const ProovedorFavorites = ({children}) => {
    
    const [favorites, setFavorites] = useState([]);

    
    return (
        <ContextFavorites.Provider value={{favorites, setFavorites}}>
            {children}
        </ContextFavorites.Provider>
    )
}
 
export  {ProovedorFavorites, ContextFavorites};