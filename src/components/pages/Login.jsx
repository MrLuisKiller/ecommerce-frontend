import { useState } from 'react'
import { loginService } from '../../services/Auth.service'
import { useAuth } from '../context/AuthContext'

const Login = () => {
    const { fnLogin } = useAuth()
    
    const [formulario, setFormulario] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = e => setFormulario({ ...formulario, [e.target.name]: e.target.value })

    const enviarDatos = e => {
        e.preventDefault()
        loginService(formulario).then(res => {
            const token = res.data.token
            fnLogin(token)
            location.href = '/'
        }).catch(err => {
            console.error(err)
        })
    }

    return (
        <div className="container page">
            <h1 className="text-center mb-5">Login</h1>
            <form onSubmit={enviarDatos}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                    <input type="email" className="form-control" name="email" onChange={handleInputChange} value={formulario.email} autoComplete="false" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" onChange={handleInputChange} value={formulario.password} />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login
