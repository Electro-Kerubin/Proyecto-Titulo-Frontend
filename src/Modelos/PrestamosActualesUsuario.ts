import LibroModelo from "./LibroModelo";

class PrestamosActualesUsuario {
    idPrestamo: number;
    libro: LibroModelo;
    estado: string;
    correoUsuario: string;
    diasAlquilerRestantes: number;

    constructor (idPrestamo:number, libro: LibroModelo, estado: string, correoUsuario: string, diasAlquilerRestantes: number) {
        this.idPrestamo = idPrestamo;
        this.libro = libro;
        this.estado = estado;
        this.correoUsuario = correoUsuario;
        this.diasAlquilerRestantes = diasAlquilerRestantes;
    }
}

export default PrestamosActualesUsuario;