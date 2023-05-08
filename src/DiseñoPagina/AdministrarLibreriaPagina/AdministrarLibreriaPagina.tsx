import { useOktaAuth } from "@okta/okta-react";
import { useState } from "react";

export const AdministrarLibreriaPagina = () => {

    const { authState } = useOktaAuth();

    const [cambiarCantidadDeLibroClick, setCambiarCantidadDeLibroClick] = useState(false);

    const [mensajesClick, setMensajesClick] = useState(false);

    return (
        <div className="container">
            <div className="mt-3">
                <h3>Administrar Libreria</h3>
                <nav>
                    <div className="nav nav-tab">
                        <button>
                            Añadir Nuevo Libro
                        </button>
                        <button>
                            Actualizar cantidad de libros
                        </button>
                        <button>
                            Mensajes
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
}