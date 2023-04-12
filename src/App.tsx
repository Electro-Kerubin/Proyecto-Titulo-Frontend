import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { BuscarLibrosPagina } from './DiseñoPagina/BuscarLibrosPagina/BuscarLibrosPagina';
import { InicioPagina } from './DiseñoPagina/InicioPagina/InicioPagina';
import { Footer } from './DiseñoPagina/Navbar&Footer/Footer';
import { Navbar } from './DiseñoPagina/Navbar&Footer/Navbar';
import { SeccionLibro } from './DiseñoPagina/SeccionLibro/SeccionLibro';

export const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <div className='flex-grow-1'>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home' exact>
            <InicioPagina />
          </Route>
          <Route path='/buscar'>
            <BuscarLibrosPagina />
          </Route>
          <Route path='/info/:id'>
            <SeccionLibro/>
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
