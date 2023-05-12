import { useOktaAuth } from "@okta/okta-react";
import { useState, useEffect } from "react";
import MensajesModelo from "../../../Modelos/MensajesModelo";
import { SpinnerLoading } from "../../Utilidad/SpinnerLoading";
import MensajesAdminRequestModelo from "../../../Modelos/MensajesAdminRequestModelo";

export const MensajesAdmin = () => {

    const { authState } = useOktaAuth();

    const [mensajes, setMensajes] = useState<MensajesModelo[]>([]);
    const [mensajesPorPagina, setMensajesPorPagina] = useState(5);
    const [mensajesCargados, setMensajesCargados] = useState(true);

    const [httpError, setHttpError] = useState(null);

    const [paginaActual, setPaginaActual] = useState(1);
    const [paginasTotal, setPaginasTotal] = useState(0);

    const [formWarning, setFormWarning] = useState(false);
    const [formResponse, setFormResponse] = useState('');

    const [respuestaEnviada, setRespuestaEnviada] = useState(false);



    //
    useEffect(() => {

        const fetchRetornaMensajes = async () => {
            if (authState && authState.isAuthenticated) {
                const apiUrl = `http://localhost:8080/api/mensajeses/search/findByCerrado/?cerrado=false&page=${paginaActual - 1}$size=${mensajesPorPagina}`;
                const peticion = {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${authState.accessToken?.accessToken}`,
                        'Content-Type': 'application/json'
                    }
                };

                const fetchRetornaMensajesResponse = await fetch(apiUrl, peticion);
                if (!fetchRetornaMensajesResponse.ok) {
                    throw new Error('Problemas en fetchRetornaMensajesResponse');
                }

                const fetchRetornaMensajesResponseJson = await fetchRetornaMensajesResponse.json();

                setMensajes(fetchRetornaMensajesResponseJson._embedded.mensajeses);
                setPaginasTotal(fetchRetornaMensajesResponseJson.page.totalPages);
            }

            setMensajesCargados(false);
        }
        fetchRetornaMensajes().catch((error: any) => {
            setMensajesCargados(false);
            setHttpError(error.message);
        })

        window.scrollTo(0, 0);

    }, [authState, paginaActual, respuestaEnviada])

    if (mensajesCargados) {
        return (
            <SpinnerLoading />
        );
    }

    if (httpError) {
        return (
            <div className="container">
                <p>{httpError}</p>
            </div>
        );
    }

    async function responderPregunta(id: number, respuesta: string) {
        const apiUrl = `http://localhost:3000/api/mensajeses/confidencial/admin/mensaje`;
        if (authState && authState?.isAuthenticated && id !== null && respuesta !== '') {

            const mensajesAdminRequestModel: MensajesAdminRequestModelo = new MensajesAdminRequestModelo(id, respuesta);
            const peticion = {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${authState?.accessToken?.accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mensajesAdminRequestModel)
            };

            const mensajesAdminRequestModelResponse = await fetch(apiUrl, peticion);
            if (!mensajesAdminRequestModelResponse.ok) {
                throw new Error('Error en mensajesAdminRequestModelResponse');
            }
            setRespuestaEnviada(!respuestaEnviada);
        }
    }

    function respuestaEnviadaButton(id: any, respuesta: any) {
        if (id !== null && respuesta !== '') {
            responderPregunta(id, respuesta);
            setFormWarning(false);
        } else {
            setFormWarning(true);
        }
    }

    const paginador = (numPag: number) => setPaginaActual(numPag);

    return (
        <div className="mt-3">
            {mensajes.length > 0 ?
                <>
                    <h5>Preguntas:</h5>
                    {mensajes.map(mensaje => (
                        <div className="card mt-2 shadow p-3 bg-body rounded">
                            <h5>Preguta #{mensaje.id}</h5>
                            <h6>{mensaje.usuarioEmail}</h6>
                            <p>{mensaje.pregunta}</p>
                            <hr />
                            <div>
                                <h5>Respuesta:</h5>
                                <form action="PUT">
                                    {formWarning &&
                                        <div className="alert alert-danger" role="alert">
                                            Todos los campos deben estar completos.
                                        </div>
                                    }
                                    <div className="col-md-12 mb-3">
                                        <label className="form-label">Descripcion</label>
                                        <textarea className="form-control" id="responderMensajesFormId" rows={3}
                                            onChange={e => setFormResponse(e.target.value)} value={formResponse}></textarea>
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-primary mt-3" onClick={() => respuestaEnviadaButton(mensaje.id, mensaje.respuesta)}> Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    ))}


                </>
                :
                <h5>No hay preguntas pendientes.</h5>
            }
        </div>
    );
}