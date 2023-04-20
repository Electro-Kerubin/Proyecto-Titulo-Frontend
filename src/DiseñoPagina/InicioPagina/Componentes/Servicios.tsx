import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";


export const Servicios = () => {

    const { authState } = useOktaAuth();

    return (
        <div className="container my-5">
            <div className="row p-4 align-items-center border shadow-lg">
                <div className="col-lg-7 p-3">
                    <h1 className="display-5 fw-bold">Servicios.</h1>
                    <p className="">
                        Sed non urna venenatis, posuere arcu ut, faucibus est. Duis molestie nunc nisl  dapibus dui quis magna viverra gravida.
                    </p>
                    <div className="d-grid gap-2 justify-content-md-start mb-4 mb-lg-3">
                        {authState?.isAuthenticated ?
                            <Link to='#' className="btn main-color text-white btn-lg" >Preguntas al Admin</Link>
                            :
                            <Link className="btn main-color text-white btn-lg" to='/login'>Ingresar</Link>
                        }

                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 shadow-lg lost-image">
                        
                </div>
            </div>
        </div>
    );
}