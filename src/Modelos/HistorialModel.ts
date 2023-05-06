class HistorialModel {
    id: number;
    usuarioEmail: string;
    fechaAlquiler: string;
    fechaRetorno: string;
    titulo: string;
    autor: string;
    descripcion: string;
    img: string;

    constructor(id: number,
        usuarioEmail: string,
        fechaAlquiler: string,
        fechaRetorno: string,
        titulo: string,
        autor: string,
        descripcion: string,
        img: string) {
        this.id = id;
        this.usuarioEmail = usuarioEmail;
        this.fechaAlquiler = fechaAlquiler;
        this.fechaRetorno = fechaRetorno;
        this.titulo = titulo;
        this.autor = autor;
        this.descripcion = descripcion;
        this.img = img;
    }
}

export default HistorialModel;