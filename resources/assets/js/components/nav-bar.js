import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/home" className="navbar-brand">S&E Transportes</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/home" className="nav-link">Página Inicial <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link to="/alunos" className="nav-link">Alunos</Link>
            </li>
            <li className="nav-item">
              <Link to="/rendimentos" className="nav-link">Rendimentos</Link>
            </li>
            <li className="nav-item">
              <Link to="/pagamentos" className="nav-link">Pagamentos</Link>
            </li>
          </ul>
          <span className="navbar-text pull-right">
            Conf. Conta
          </span>
        </div>
      </nav>
    );
  }
}

export default NavBar;