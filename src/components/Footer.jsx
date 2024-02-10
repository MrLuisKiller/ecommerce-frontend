import './Footer.css'

const Footer = () => {
    return (
        <footer className='container-fluid border-top dark d-flex align-items-center justify-content-between'>
            <div className='copyright'>Creado por Luis Valenzuela (2024) &#169;</div>
            <div className='text-center'>
                <h3>¿Alguna duda?</h3>
                <p className='p-0 m-0'>Pongase en contacto con nosotros</p>
                <p className='p-0 m-0'>Correo: <a href="mailto:mrluiskiller@gmail.com">mrluiskiller@gmail.com</a></p>
                <p className='p-0 m-0'>Telefono: (+52) 64FLDSMDFR</p>
            </div>
            <div className="social-net d-flex flex-wrap">
                <a href="#" target='_blank' rel='noopener noreferrer'><i className='bi bi-twitter-x'></i></a>
                <a href="https://github.com/mrluiskiller" target='_blank' rel='noopener noreferrer'><i className='bi bi-github'></i></a>
                <a href="#" target='_blank' rel='noopener noreferrer'><i className='bi bi-instagram'></i></a>
                <a href="#" target='_blank' rel='noopener noreferrer'><i className='bi bi-facebook'></i></a>
            </div>
        </footer>
    )
}

export default Footer
