import LibroModelo from "./LibroModelo";

class PrestamosActualesUsuario {
    libro: LibroModelo;
    estado: string;
    diasAlquilerRestantes: number;

    constructor (libro: LibroModelo, estado: string,diasAlquilerRestantes: number) {
        this.libro = libro;
        this.estado = estado;
        this.diasAlquilerRestantes = diasAlquilerRestantes;
    }
}

export default PrestamosActualesUsuario;