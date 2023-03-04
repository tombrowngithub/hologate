'use client';
import { createContext, useState } from "react";

export const UserState = createContext(null);

function Context({ children }) {
    const [loginModal, setLoginModal] = useState(false)
    const [isAuth, setIsAuth] = useState(false)

    return (
        <UserState.Provider value={{ loginModal, setLoginModal,isAuth,setIsAuth }}>
            {children}
        </UserState.Provider>
    );
}

export default Context