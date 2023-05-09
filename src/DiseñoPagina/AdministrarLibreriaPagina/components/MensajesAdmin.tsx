import { useOktaAuth } from "@okta/okta-react";
import { useState, useEffect } from "react";
import MensajesModelo from "../../../Modelos/MensajesModelo";
import { SpinnerLoading } from "../../Utilidad/SpinnerLoading";

export const MensajesAdmin = () => {

    const { authState } = useOktaAuth();

    const [mensajes, setMensajes] = useState<MensajesModelo[]>([]);
    const [mensajesCargados, setMensajesCargados] = useState(true);
    
    const [httpError, setHttpError] = useState(null);

    const [paginaActual, setPaginaActual] = useState(1);
    const [paginasTotal, setPaginasTotal] = useState(0);

    //
    useEffect(() => {

        const fetchRetornaMensajes = async () => {
            if (authState && authState.isAuthenticated) {
                const apiUrl = `http://localhost:8080/api/mensajeses/search/`;
            }
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
        <div></div>
    );
}