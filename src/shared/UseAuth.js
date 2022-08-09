import { useContext, useState } from "react";
import { createContext } from "react"
import { useNavigate } from "react-router-dom";
import localStorageHelper from "./LocalStorageHelper";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState();
    const {onSetItemLocalStorage, onClearItemLocalStorage} = localStorageHelper('userCred', '')

    const onLogin = (userCred) => {
        //window.localStorage.setItem('userCred', userCred);
        onSetItemLocalStorage(userCred)
        setUser(userCred);
        navigate('/home', {replace: true})
    }

    const onLogout = () => {
        //window.localStorage.clear();
        onClearItemLocalStorage()
        setUser(null)
        navigate('/', {replace: true})
    }

    return (
        <AuthContext.Provider value={{user, onLogin, onLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}