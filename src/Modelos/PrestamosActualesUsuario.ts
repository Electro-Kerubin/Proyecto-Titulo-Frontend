import LibroModelo from "./LibroModelo";

class PrestamosActualesUsuario {
    libro: LibroModelo;
    diasAlquilerRestantes: number;

    constructor (libro: LibroModelo, diasAlquilerRestantes: number) {
        this.libro = libro;
        this.diasAlquilerRestantes = diasAlquilerRestantes;
    }
}

export default PrestamosActualesUsuario;