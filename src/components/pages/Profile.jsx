import { useState, useEffect } from 'react'
import { updateProfileService } from '../../services/Auth.service'
import { useAuth } from '../context/AuthContext'
import Swal from 'sweetalert2'

const Profile = () => {
    const { fnLogin, user } = useAuth()

    const [formulario, setFormulario] = useState({
        email: '',
        password: '',
        name: '',
        lastName: '',
        active: true
    })

    useEffect(() => {
        setFormulario(user)
    }, [])

    const handleInputChange = e => setFormulario({ ...formulario, [e.target.name]: e.target.value })

    const enviarDatos = e => {
        e.preventDefault()
        updateProfileService(formulario).then(res => {
            fnLogin(res.data.token)
            Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true
            }).fire({
                icon: 'success',
                title: 'Perfil Actualizado'
            })
            location.href = '/'
        }).catch(err => {
            console.error(err)
            Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true
            }).fire({
                icon: 'error',
                title: 'No se pudo actualizar'
            })
        })
    }

    return (
        <div className="container page">
            <h1 className="text-center mb-5">Perfil</h1>
            <form onSubmit={enviarDatos}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">email</label>
                    <input type="email" name="email" id="email" className="form-control" onChange={handleInputChange} value={formulario.email} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" id="name" className="form-control" onChange={handleInputChange} value={formulario.name} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last name</label>
                    <input type="text" name="lastName" id="lastName" className="form-control" onChange={handleInputChange} value={formulario.lastName} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" id="password" className="form-control" onChange={handleInputChange} value={formulario.password} />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-outline-primary">save</button>
                </div>
            </form>
        </div>
    )
}

export default Profile
