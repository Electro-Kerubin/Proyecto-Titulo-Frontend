import LibroModelo from "../../Modelos/LibroModelo";
import { useEffect, useState } from "react";
import { SpinnerLoading } from "../Utilidad/SpinnerLoading";
import { ReseñaStar } from "../Utilidad/ReseñaStar";


export const SeccionLibro = () => {

    const [libro, setLibro] = useState<LibroModelo>();
    const [libroCargando, setLibroCargando] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const idLibro = (window.location.pathname).split('/')[2];
    
    useEffect(() => {
        const fetchLibros = async () => {
            const apiUrl: string = `http://localhost:8080/api/libroes/${idLibro}`;

            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Error en useEffect "Cargando libros de la api"');
            }

            const responseJson = await response.json();

            const libroCargado: LibroModelo = {
                id: responseJson.id,
                titulo: responseJson.titulo,
                autor: responseJson.autor,
                descripcion: responseJson.descripcion,
                copias: responseJson.copias,
                copiasDisponibles: responseJson.copiasDisponibles,
                categoria: responseJson.categoria,
                img: responseJson.img,
            };


            setLibro(libroCargado);
            setLibroCargando(false);
        };

        fetchLibros().catch((error: any) => {
            setLibroCargando(false);
            setHttpError(error.message);
        })

    }, []);

    if (libroCargando) {
        return (
            <SpinnerLoading />
        );
    }

    if (httpError) {
        return (
            <div className="container m-5">
                <p>{httpError}</p>
            </div>
        );
    }

    return (
        <div>
            <div className="container d-none d-lg-block">
                <div className="row mt-5">
                    <div className="col-sm-2 col-md-2">
                        {libro?.img ?
                            <img src={libro?.img} width="226" height="349" alt="libro" />
                            :
                            <img src={require("./../../ImagenesWeb/Libros/rubius.jpg")} width="226" height="349" alt="libro" />
                        }
                    </div>
                    <div className="col-4 col-md-4 container">
                        <div className="ml-2">
                            <h2>{libro?.titulo}</h2>
                            <h5 className="text-primary">{libro?.autor}</h5>
                            <p className="lead">{libro?.descripcion}</p>
                            <ReseñaStar puntuacion={4.5} tamaño={32}/>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container d-lg-none mt-5">
                <div className="d-flex justify-content-center align-items-center">
                    {libro?.img ?
                        <img src={libro?.img} width="226" height="349" alt="libro" />
                        :
                        <img src={require("./../../ImagenesWeb/Libros/rubius.jpg")} width="226" height="349" alt="libro" />
                    }
                </div>
                <div className="mt-4">
                    <div className="ml-2">
                        <h2>{libro?.titulo}</h2>
                        <h5 className="text-primary">{libro?.autor}</h5>
                        <p className="lead">{libro?.descripcion}</p>
                        <ReseñaStar puntuacion={4.5} tamaño={32}/>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
}