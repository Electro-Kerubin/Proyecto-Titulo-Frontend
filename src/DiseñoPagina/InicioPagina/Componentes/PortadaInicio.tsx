import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";

export const PortadaInicio = () => {

    const { authState } = useOktaAuth();


    return (
        <div>
            <div className="d-none d-lg-block">
                <div className="row g-0 mt-5">
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-left"></div>
                    </div>
                    {/** col-4 col-md-4 container d-flex justify-content-center align-items-center */}
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>¿Que has estado leyendo?</h1>
                            <p className="lead">
                                Nos encantaria saber que has estado leyendo. <br />
                                Ya sea una novela o enciclopedia, te proveeremos de los mejores libros.
                            </p>
                            {authState?.isAuthenticated ?
                                <Link type="button" className="btn main-color text-white btn-lg" to='/buscar'>Encuentra mas libros</Link>
                                :
                                <Link className="btn main-color text-white btn-lg" to='/login'>Ingresar</Link>
                            }

                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-2 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>En nuestra colección podras encontrar</h1>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis pharetra libero, et varius ipsum. Vestibulum auctor nisi et nisi auctor, convallis porta tortor placerat. Etiam commodo est vitae leo porta mattis.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-right"></div>
                    </div>
                </div>
            </div>

            {/**Mobile*/}
            <div className="d-lg-none">
                <div className="container">
                    <div className="m-2">
                        <div className="col-image-left"></div>
                        <div className="mt-2">
                            <h1>¿Que has estado leyendo?</h1>
                            <p className="lead">
                                Nos encantaria saber que has estado leyendo. <br />
                                Ya sea una novela o enciclopedia, te proveeremos de los mejores libros.
                            </p>
                            {authState?.isAuthenticated ?
                                <Link to='/buscar' className="btn main-color text-white btn-lg">Encuentra mas libros</Link>
                                :
                                <Link className="btn main-color text-white btn-lg" to='/login'>Ingresar</Link>
                            }
                        </div>
                    </div>
                    <div className="m-2">
                        <div className="col-image-right"></div>
                        <div className="mt-2">
                            <h1>En nuestra colección podras encontrar</h1>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis pharetra libero, et varius ipsum. Vestibulum auctor nisi et nisi auctor, convallis porta tortor placerat. Etiam commodo est vitae leo porta mattis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}