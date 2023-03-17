import { useState, useEffect } from "react";
import LibroModelo from "../../Modelos/LibroModelo";
import { CarouselCards } from "../InicioPagina/Componentes/CarouselCards";
import { SpinnerLoading } from "../Utilidad/SpinnerLoading";
import { RetornaLibro } from "./components/RetornaLibro";

export const BuscarLibrosPagina = () => {

    const [libros, setLibros] = useState<LibroModelo[]>([]);
    const [cargandoCarousel, setCargandoCarousel] = useState(true);
    const [httpError, setHttpError] = useState(null);

    // buscar libros
    useEffect(() => {
        const fetchLibros = async () => {
            const apiUrl: string = "http://localhost:8080/api/libroes";

            const finalUrl: string = `${apiUrl}?page=0&size=5`;

            const response = await fetch(finalUrl);

            if (!response.ok) {
                throw new Error('Error en useEffect "Cargando libros de la api"');
            }

            const responseJson = await response.json();

            const responseData = responseJson._embedded.libroes;

            const librosCargados: LibroModelo[] = [];

            for (const key in responseData) {
                librosCargados.push({
                    id: responseData[key].id,
                    titulo: responseData[key].titulo,
                    autor: responseData[key].autor,
                    descripcion: responseData[key].descripcion,
                    copias: responseData[key].copias,
                    copiasDisponibles: responseData[key].copiasDisponibles,
                    categoria: responseData[key].categoria,
                    img: responseData[key].img,
                });
            }

            setLibros(librosCargados);
            setCargandoCarousel(false);
        };

        fetchLibros().catch((error: any) => {
            setCargandoCarousel(false);
            setHttpError(error.message);
        })

    }, []);

    if (cargandoCarousel) {
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
            <div className="container">
                <div>
                    <div className="row mt-5">
                        <div className="col-6">
                            <div className="d-flex">
                                <input className="form-control m-2" type="search"
                                    placeholder="Buscar Libro" aria-labelledby="Search" />
                                <button className="btn btn-outline-success">
                                    Buscar
                                </button>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                    id="dropdownCategoriaBoton" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categoria
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownCategoriaBoton">
                                    <li>
                                        <a className="dropdown-item" href="#">Categoria</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Historia</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Psicologia</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Ciencia Ficción</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Programación</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h5>Numero de resultados: 24</h5>
                    </div>
                    {libros.map(libro => (
                        <RetornaLibro libro={libro} key={libro.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}