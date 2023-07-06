export const ConfirmarPrestamos: React.FC<{ }> = () => {

    // Confirmar el prestamo cambiando el estado del prestamo de "En espera" a "Confirmardo"
    async function confirmarPrestamo() {
        //const apiUrl = `http://localhost:8080/api/admin/confidencial/confirmar/prestamo?prestamoId=${}`;
    }

    return (
        <div className="card mt-3 shadow p-3 mb-3 bg-body rounded">
            <div className="row g-0">
                <div className="col-md-2">
                    {/* Escritorio */}
                    <div className="d-none d-lg-block">
                        <img src={require("./../../../ImagenesWeb/Libros/rubius.jpg")} width='123' height='196' alt='libro' />
                    </div>
                </div>
            </div>
        </div>
    );

}
