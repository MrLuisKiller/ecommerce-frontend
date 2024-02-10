import React from 'react'

const MenuItem = ({ Menu }) => {
    const { imagen, comida, descripcion, precio } = Menu


    return (
        <div className="card mb-3 col-lg-6 col-md-12 border-0" style={{ maxWidth: 540 }}>
            <div className="row g-2">
                <div className="col-md-4">
                    <img src={`./assets/Menu/${imagen}`} className='img-fluid rounded shadow-lg' alt="Imagen de la comida" />
                </div>
                <div className="col-md-8">
                    <h5 className="card-title pt-2">{comida}</h5>
                    <p className="card-text">{descripcion}</p>
                    <p className="card-text">
                        <small className="text-body-secondary">Precio: ${precio}</small>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MenuItem