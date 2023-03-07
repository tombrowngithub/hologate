'use client';
import {createContext, useState} from "react";

export const UserState = createContext(null);

function Context({children}) {
    const [loginModal, setLoginModal] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    const [startTime, setStartTime] = useState(null);
    const [account, setAccount] = useState(false)
    const [TimeRead, setTimeRead] = useState(false)
    const [myId, setId] = useState(null)
    const [elapsedTime, setElapsedTime] = useState({
        seconds: "", minutes: "", hours: ""
    })


    return (
        <UserState.Provider value={{
            loginModal, setLoginModal,
            isAuth, setIsAuth, startTime, setStartTime, account,
            setAccount, myId, setId, elapsedTime, setElapsedTime,
            TimeRead, setTimeRead
        }}>


            {children}
        </UserState.Provider>
    );
}

export default Context