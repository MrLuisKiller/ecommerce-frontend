const Home = () => {
    return (
        <section className='container'>
            <div className="card mb-3 border-0">
                <div className="row g-0">
                    <div className="col-md-3 col-sm-12 d-flex justify-content-center">
                        <img src='./assets/Restaurante.webp' className='img-fluid rounded shadow-lg' alt="FLDSMDFR Restaurante" />
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <div className="card-body">
                            <h2 className="card-title text-center Potta-One mb-4">¿Quieres un Tornado de Espageti?</h2>
                            <p className="card-text mb-2">En algun lugar del estado de Sonora en México, se esconde un peqeño local, que te brinda unas extrañas comidas, pero deliciosas.
                                Se dice que todo esto es creado por una extraña maquina, llamada FLDSMDFR.</p>
                            <p className="card-text mb-2"><b>FLDSMDFR:</b> Flint Loco Diatónica Super Mutante Duplicadora de Comida</p>
                            <p className="card-text mb-5">Todo lo que quieras, aqui lo puedes conseguir.</p>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-6 row text-center'>
                                    <div className="col-lg-5 border-top border-2">
                                        <h4>Nacimiento</h4>
                                        <p><b>2009</b></p>
                                    </div>
                                    <div className="col-1"></div>
                                    <div className="col-lg-5 border-top border-2">
                                        <h4>Ubicación</h4>
                                        <p><b>Sonora, México</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="d-flex justify-content-center">
                            <h2 className="Potta-One">Ahora con servicio a domicilio</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
