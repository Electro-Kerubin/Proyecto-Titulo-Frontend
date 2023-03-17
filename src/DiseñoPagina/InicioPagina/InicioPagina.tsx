import { Carousel } from "./Componentes/Carousel";
import { Header } from "./Componentes/Header";
import { PortadaInicio } from "./Componentes/PortadaInicio";
import { Servicios } from "./Componentes/Servicios";

export const InicioPagina = () => {
    return (
        <>
            <Header />
            <Carousel />
            <PortadaInicio />
            <Servicios />
        </>
    );
}