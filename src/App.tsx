import React from 'react';
import './App.css';
import { BuscarLibrosPagina } from './DiseñoPagina/BuscarLibrosPagina/BuscarLibrosPagina';
import { InicioPagina } from './DiseñoPagina/InicioPagina/InicioPagina';
import { Footer } from './DiseñoPagina/Navbar&Footer/Footer';
import { Navbar } from './DiseñoPagina/Navbar&Footer/Navbar';

export const App = () => {
  return (
    <div>
      <Navbar />
      {/* <InicioPagina /> */}
      <BuscarLibrosPagina />
      <Footer />
    </div>
  );
}
