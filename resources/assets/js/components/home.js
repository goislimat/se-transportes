import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import StudentSearchBar from '../containers/students-search-bar';

class Home extends Component {
  //renderizar o componente de busca de um aluno
  //renderizar as informações de interesse
  render () {
    return (
      <div className="row">
        <div className="col-sm-offset-1 col-sm-5">
          <StudentSearchBar/>
        </div>
        <div className="col-md-offset-1 col-sm-5">
          <Link to="alunos/novo" className="btn btn-primary">Novo Aluno</Link>
        </div>
      </div>
    );
  }
}

export default Home;