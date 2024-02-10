import React from 'react'
import './Loading.css'

const Loading = () => {
    return (
        <div className="row">
            <div className="col text-center">
                <div className="d-flex justify-content-center">
                    <div className="lds-hourglass"></div>
                </div>
                <h3>Cargando...</h3>
            </div>
        </div>
    )
}

export default Loading