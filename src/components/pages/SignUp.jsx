import { useState } from 'react'
import { signUpService } from '../../services/Auth.service'
import Swal from 'sweetalert2'

const SignUp = () => {
    const [formulario, setFormulario] = useState({
        email: '',
        password: '',
        name: '',
        lastName: '',
        active: true,
        admin: false,
        dob: ''
    })

    const handleInputChange = e => setFormulario({ ...formulario, [e.target.name]: e.target.value })
    
    const enviarDatos = e => {
        e.preventDefault()
        signUpService(formulario).then(res => {
            Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true
            }).fire({
                icon: 'success',
                title: res.data.message
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
                title: 'No se pudo registrar la cuenta'
            })
        })
    }

    return (
        <div className="container page">
            <h1 className="text-center mb-5">SignUp</h1>
            <form onSubmit={enviarDatos}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={handleInputChange} value={formulario.email} />
                </div>
                {/* Input name */}
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={handleInputChange} value={formulario.name} />
                </div>
                {/* Input last name */}
                <div className="mb-3">
                    <label className="form-label">Last name</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" onChange={handleInputChange} value={formulario.lastName} />
                </div>
                {/* Input dob */}
                <div className="mb-3">
                    <label className="form-label">Birthday</label>
                    <input type="date" className="form-control" id="dob" name="dob" onChange={handleInputChange} value={formulario.dob} />
                </div>
                {/* Input password */}
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={handleInputChange} value={formulario.password} />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Signup</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
