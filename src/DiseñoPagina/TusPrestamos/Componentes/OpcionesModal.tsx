import PrestamosActualesUsuario from "../../../Modelos/PrestamosActualesUsuario";


export const OpcionesModal: React.FC<{ prestamosActualesUsuario: PrestamosActualesUsuario, mobile: boolean }> = (props) => {

    return (
        <div className="modal fade" id={props.mobile ? `mobilemodal${props.prestamosActualesUsuario.libro.id}` :
            `modal${props.prestamosActualesUsuario.libro.id}}`} data-bs-backrop='static' data-bs-keyboard='false'
            aria-labelledby="idModal" aria-hidden='true' key={props.prestamosActualesUsuario.libro.id}>

            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="idModal"></h5>
                        <button type="button" className="btn" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    {/* contenido */}
                    <div className="modal-body">
                        <div className="container">
                            <div className="mt-3">
                                <div className="row">
                                    <div className="col-2">
                                        {props.prestamosActualesUsuario.libro?.img ?
                                            <img src={props.prestamosActualesUsuario.libro.img} width='56' height='87' alt="libro" />
                                            :
                                            <img src={require('./../../../ImagenesWeb/Libros/rubius.jpg')} width='56' height='87' alt="libro" />
                                        }
                                    </div>
                                    <div className="col-10">
                                        <h6>{props.prestamosActualesUsuario.libro.titulo}</h6>
                                        <h4>{props.prestamosActualesUsuario.libro.descripcion}</h4>
                                    </div>
                                </div>
                                <hr />
                                {props.prestamosActualesUsuario.diasAlquilerRestantes > 0 &&
                                    <p>
                                        El alquiler del libro expira en {props.prestamosActualesUsuario.diasAlquilerRestantes} dias.
                                    </p>
                                }

                                {props.prestamosActualesUsuario.diasAlquilerRestantes === 0 &&
                                    <p>
                                        El alquiler del libro expira hoy!
                                    </p>
                                }

                                {props.prestamosActualesUsuario.diasAlquilerRestantes < 0 &&
                                    <p>
                                        Tienes un retraso de {props.prestamosActualesUsuario.diasAlquilerRestantes} dias.
                                    </p>
                                }
                                <div className="list-group mt-3">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}