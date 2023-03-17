export const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
            <div className='container-fluid'>
                <a className='navbar-brand' href="#">Juegos de Mesa Nerfilin</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                    data-bs-target='#navbarNavDespliege'
                    aria-controls='navbarNavDespliege' aria-expended='false' aria-label='Toggle Navigation' >

                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavDespliege'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Inicio</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Buscar Libros</a>
                        </li>
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item m-1'>
                            <a type='button' className='btn btn-outline-light' href='#'>Ingresar</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}