import { Link } from "react-router-dom";
import LibroModelo from "../../Modelos/LibroModelo";

export const PrestamoyReseña: React.FC<{ libro: LibroModelo | undefined, movil: boolean }> = (props) => {
    return (
        <div className={props.movil ? 'card d-flex mt-5' : 'card col-3 container d-flex mb-5'}>
            <div className="card-body container">
                <div className="mt-3">
                    <p>
                        <b>0/5 </b>
                        Libros disponibles
                    </p>
                    <hr />
                    {props.libro && props.libro.copiasDisponibles && props.libro.copiasDisponibles > 0 ?
                        <h4 className="text-success">Disponible</h4>
                        :
                        <h4 className="text-danger">
                            Lista de espera
                        </h4>
                    }
                    <div className="row">
                        <p className="col-6 lead">
                            <b>{props.libro?.copias} </b>
                            Copias 
                        </p>
                        <p className="col-6 lead">
                            <b>{props.libro?.copiasDisponibles} </b>
                            Disponible
                        </p>
                    </div>
                </div>
                <Link to="/#" className="btn btn-success btn-lg">Iniciar Sesión</Link>
                <hr />
                <p className="mt-3">
                    Vivamus tincidunt mauris vitae ante maximus pellentesque. Etiam dictum sollicitudin velit, eu elementum tellus molestie et.
                </p>
                <p>
                    Inicia sesión para poder dejar una reseña.
                </p>
            </div>
        </div>
    );
}