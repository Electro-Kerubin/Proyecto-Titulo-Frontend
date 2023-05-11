import { useOktaAuth } from "@okta/okta-react";
import { useState, useEffect } from "react";
import MensajesModelo from "../../../Modelos/MensajesModelo";
import { SpinnerLoading } from "../../Utilidad/SpinnerLoading";

export const MensajesAdmin = () => {

    const { authState } = useOktaAuth();

    const [mensajes, setMensajes] = useState<MensajesModelo[]>([]);
    const [mensajesPorPagina, setMensajesPorPagina] = useState(5);
    const [mensajesCargados, setMensajesCargados] = useState(true);
    
    const [httpError, setHttpError] = useState(null);

    const [paginaActual, setPaginaActual] = useState(1);
    const [paginasTotal, setPaginasTotal] = useState(0);

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

        window.scrollTo(0,0);

    }, [authState, paginaActual])

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

    const paginador = (numPag: number) => setPaginaActual(numPag);

    return (
        <div className="mt-3">
            {mensajes.length > 0 ?
                <>
                    <h5>Preguntas:</h5>
                    {mensajes.map(mensaje => (
                        <p>asd</p>
                    ))}

                    
                </>
                :
                <h5>No hay preguntas pendientes.</h5>
            }
        </div>
    );
}