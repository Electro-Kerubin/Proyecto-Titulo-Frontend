import LibroModelo from "../../Modelos/LibroModelo";
import { useEffect, useState } from "react";
import { SpinnerLoading } from "../Utilidad/SpinnerLoading";
import { ReseñaStar } from "../Utilidad/ReseñaStar";
import { PrestamoyReseña } from "./PrestamoyReseñas";
import ResenaModel from "../../Modelos/ResenaModel";
import { UltimasResenas } from "./UltimasResenas";


export const SeccionLibro = () => {

    // Libro state
    const [libro, setLibro] = useState<LibroModelo>();
    const [libroCargando, setLibroCargando] = useState(true);
    const [httpError, setHttpError] = useState(null);

    // Reseña state
    const [resenas, setResenas] = useState<ResenaModel[]>([]);
    const [stars, setStars] = useState(0);
    const [resenasCargadas, setReseñasCargadas] = useState(true);

    const idLibro = (window.location.pathname).split('/')[2];
    
    useEffect(() => {
        const buscarLibros = async () => {
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

        buscarLibros().catch((error: any) => {
            setLibroCargando(false);
            setHttpError(error.message);
        })

    }, []);

    useEffect(() => {
        const buscarResenas = async () => {
            const resenaUrl: string = `http://localhost:8080/api/resenas/search/findByLibroId?libroId=${idLibro}`;

            const responseResena = await fetch(resenaUrl);

            if (!responseResena.ok) {
                throw new Error('Problemas en fetch buscarResenas');
            }

            const responseJsonResena = await responseResena.json();

            const responseData = responseJsonResena._embedded.resenas;

            let resenas: ResenaModel[] = [];

            let promedioStars: number = 0;

            for (const resenaProps in responseData) {
                resenas.push({
                    id: responseData[resenaProps].id,
                    usuarioEmail: responseData[resenaProps].usuarioEmail,
                    fecha: responseData[resenaProps].fecha,
                    puntaje: responseData[resenaProps].puntaje,
                    libroId: responseData[resenaProps].libroId,
                    resenaDescripcion: responseData[resenaProps].resenaDescripcion
                });
                promedioStars += responseData[resenaProps].puntaje;
            }

            if (resenas) {
                const round = (Math.round((promedioStars / resenas.length) * 2) / 2).toFixed(1);
                setStars(Number(round));
            }

            setResenas(resenas);
            setReseñasCargadas(false);
        };

        buscarResenas().catch((error: any) => {
            setReseñasCargadas(false);
            setHttpError(error.message);
        });
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
                            <ReseñaStar puntuacion={stars} tamaño={32}/>
                        </div>
                    </div>
                    <PrestamoyReseña libro={libro} movil={false} />
                </div>
                <hr />
                <UltimasResenas resenas={resenas} libroId={libro?.id} movil={false} />
            </div>
            <div className="container d-lg-none mt-5">
                <div className="d-flex justify-content-center align-items-center">
                    {libro?.img ?
                        <img src={libro?.img} width="226" height="349" alt="libro" />
                        :
                        <img src={require("./../../ImagenesWeb/Libros/rubius.jpg")} width="226" height="349" alt="libro" />
                    }
                </div>
                {/* Movil */}
                <div className="mt-4">
                    <div className="ml-2">
                        <h2>{libro?.titulo}</h2>
                        <h5 className="text-primary">{libro?.autor}</h5>
                        <p className="lead">{libro?.descripcion}</p>
                        <ReseñaStar puntuacion={stars} tamaño={32}/>
                    </div>
                </div>
                <PrestamoyReseña libro={libro} movil={true} />
                <hr />
                <UltimasResenas resenas={resenas} libroId={libro?.id} movil={true} />
            </div>
        </div>
    );
}