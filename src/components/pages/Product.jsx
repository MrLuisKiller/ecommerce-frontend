import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../services/Ecommerce.service'

const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProduct(id).then(res => setProduct(res.data.data)).catch(err => console.error(err))
    }, [id])

    return (
        <div className="contaienr page">
            <div className="col-12">
                <div className="card mb-4">
                    <div className="row card-body">
                        <div className="col-4">
                            <img src={`./assets/Menu/${product.image}`} className="card-img-top" />
                        </div>
                        <div className="col-6">
                            <h3>${product.price}</h3>
                            <h4 className="card-title">{product.name}</h4>
                            <p className="card-text">{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
