import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { BuscarLibrosPagina } from './DiseñoPagina/BuscarLibrosPagina/BuscarLibrosPagina';
import { InicioPagina } from './DiseñoPagina/InicioPagina/InicioPagina';
import { Footer } from './DiseñoPagina/Navbar&Footer/Footer';
import { Navbar } from './DiseñoPagina/Navbar&Footer/Navbar';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <InicioPagina />
        </Route>
        <Route path='/buscar'>
          <BuscarLibrosPagina />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
