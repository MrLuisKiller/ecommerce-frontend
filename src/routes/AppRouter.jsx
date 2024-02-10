import { Routes, Route, Navigate } from 'react-router-dom'
import NotFound from '../components/pages/NotFound'
import Home from '../components/pages/Home'
import Checkout from '../components/pages/Checkout'
import SignUp from '../components/pages/SignUp'
import Login from '../components/pages/Login'
import Profile from '../components/pages/Profile'
import ListProducts from '../components/pages/ListProducts'
import Product from '../components/pages/Product'
import { useAuth } from '../components/context/AuthContext'

const AppRouter = () => {
    const { isLogged } = useAuth()

    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to='/home' />} />
                <Route path='*' element={<Navigate to='/404' />} />

                <Route path='404' element={<NotFound />} />
                <Route path='home' element={<Home />} />
                {
                    isLogged ? (
                        <>
                            <Route path='profile' element={<Profile />} />
                            <Route path='checkout' element={<Checkout />} />
                        </>
                    ) : (
                        <>
                            <Route path='login' element={<Login />} />
                            <Route path='signup' element={<SignUp />} />
                        </>
                    )
                }
                <Route path='products' element={<ListProducts />} />
                <Route path='product/:id' element={<Product />} />
            </Routes>
        </>
    )
}

export default AppRouter
