import React from 'react'
import LibroModelo from '../../../Modelos/LibroModelo';

export const CarouselCards: React.FC<{ libro: LibroModelo }> = (props) => {
    return (
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="text-center">
                {props.libro.img ?
                    <img src={props.libro.img} alt="libro"
                        width='151'
                        height='233'
                    />
                    :
                    <img src={require('./../../../ImagenesWeb/Libros/book-luv2code-1000.png')} alt="libro"
                        width='151'
                        height='233'
                    />
                }
                <h6 className="mt-2">{props.libro.titulo}</h6>
                <p>{props.libro.autor}</p>
                <a className="btn main-color text-white" href="#">Reservar</a>
            </div>
        </div>
    );
}