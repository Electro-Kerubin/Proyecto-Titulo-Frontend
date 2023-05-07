class MensajesModelo {

    id?: number;
    usuarioEmail?: string;
    titulo: string;
    pregunta: string;
    adminEmail?: string;
    respuesta?: string;
    cerrado?: boolean;

    constructor(
        id: number,
        usuarioEmail: string,
        titulo: string,
        pregunta: string,
        adminEmail: string,
        respuesta: string,
        cerrado: boolean) {

        this.id = id;
        this.usuarioEmail = usuarioEmail;
        this.titulo = titulo;
        this.pregunta = pregunta;
        this.adminEmail = adminEmail;
        this.respuesta = respuesta;
        this.cerrado = cerrado;
    }
}

export default MensajesModelo;