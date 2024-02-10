import { createContext, useContext, useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false)
    const [user, setuser] = useState({
        id: '',
        fullName: '',
        email: '',
        dob: '',
        admin: false
    })

    const fnLogin = token => {
        const tokenDecode = jwtDecode(token)
        if (tokenDecode) {
            setIsLogged(true)
            setuser(tokenDecode)
            localStorage.setItem(import.meta.env.VITE_TKN, token)
        }
    }

    const fnLogout = () => {
        setIsLogged(false)
        setuser({
            id: '',
            name: '',
            lastName: '',
            email: '',
            dob: '',
            admin: false
        })
        localStorage.removeItem(import.meta.env.VITE_TKN)
    }

    useEffect(() => {
        const JWT = localStorage.getItem(import.meta.env.VITE_TKN)
        if (JWT)
            fnLogin(JWT)
    }, [])

    return (
        <AuthContext.Provider value={{user, setuser, isLogged, fnLogin, fnLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context)
        throw new Error('useAuth debe ser utilizado dentro de un AuthProvider')
    return context
}

export { AuthProvider, useAuth }