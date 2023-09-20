import React from 'react'
export const userContext = React.createContext();

const UserProvider = (props) => {
    const [user, setUser] = React.useState(null); //valor inicial state

    return <userContext.Provider value={{user, setUser}} >{props.children}</userContext.Provider>
}

export default UserProvider;