import {createContext, useState} from "react";

export const UserContext = createContext(); // For the use of consuming components

const UserContextWrapper = ({children}) => {

    /*
        We include the state and the setState function into the Context value,
        so that this Context allows consuming components to display the state
        as well as update the state.
    */
    const [username, setUsername] = useState("Stanley");
    return (
        <UserContext.Provider value={{username, setUsername}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextWrapper;