import { useState, useEffect } from 'react'
import { getProducts } from '../../services/Ecommerce.service'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Swal from 'sweetalert2'

const ListProducts = () => {
    const [productos, setProductos] = useState([])
    const { isLogged } = useAuth()

    useEffect(() => {
        getProducts().then(res => setProductos(res.data.data)).catch(err => console.error(err))
    }, [])

    const addProductCart = product => {
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        let existProduct = cart.find(item => item._id == product._id)
        if (existProduct)
            existProduct.quantity += 1
        else
            cart.push({ ...product, quantity: 1 })
        localStorage.setItem('cart', JSON.stringify(cart))
        Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
        }).fire({
            icon: 'success',
            title: `${product.name} agregado al carrito`
        })
    }

    return (
        <div className="container">
            <h1>Menu</h1>
            <div className="row gap-4">
                {productos.map(product => {
                    return (
                        <div className="card mb-3 col-lg-6 col-md-12 border-0" style={{ maxWidth: 540 }}>
                            <div className="card-body row g-2" style={{ height: '16.5rem', overflow: 'hidden' }}>
                                <div className="col-md-4">
                                    <img src={`./assets/Menu/${product.image}`} className="img-fluid rounded shadow-lg" />
                                </div>
                                <div className="col-md-8">
                                    <h5 className="card-title pt-2">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">
                                        <small className="text-body-secondary">Precio: ${product.price}</small>
                                    </p>
                                    <div className="d-grid gap-2">
                                        {isLogged ? (
                                            <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => addProductCart(product)}>Agregar al carrito</button>
                                        ) : (
                                            <button type="button" className="btn btn-outline-primary btn-sm" disabled onClick={() => addProductCart(product)}>Agregar al carrito</button>
                                        )}
                                        <Link to={`/product/${product._id}`} className="btn btn-outline-info btn-sm">Mas Informacion</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })

                }
            </div>
        </div>
    )
}

export default ListProducts
