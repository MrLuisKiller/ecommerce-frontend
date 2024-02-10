import { NavLink } from 'react-router-dom'
import './Header.css'
import { useAuth } from './context/AuthContext'

const Header = () => {
    const { isLogged, user, fnLogout } = useAuth()

    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
            <div className="container-fluid">
                <div className="container">
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbar-toggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-toggler">
                        <div className='d-flex justify-content-center align-items-center'>
                            <NavLink to="/" className='navbar-brand'>
                                <img src='./assets/FLDSMDFR.png' alt="Logo" className='logo-image' />
                            </NavLink>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <h1 className='Potta-One'>FLDSMDFR Restaurante</h1>
                        </div>
                        <ul className="navbar-nav d-flex justify-content-center align-items-center">
                            <li className="nav-item">
                                <NavLink to="/products" className='nav-link'>Productos</NavLink>
                            </li>
                            {
                                isLogged ? (
                                    <>
                                        <li className="nav-item">
                                            <NavLink to="/checkout" className='nav-link'>Pagar</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/profile" className="nav-link">{`${user.name} ${user.lastName}`}</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <button onClick={fnLogout} className="nav-link">Log out</button>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-item">
                                            <NavLink to="/login" className="nav-link">Iniciar Sesion</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/signup" className="nav-link">Registrarse</NavLink>
                                        </li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
