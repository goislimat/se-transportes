import React, { Component } from 'react';

import StudentSearchBar from '../containers/students-search-bar';

class Home extends Component {
  //renderizar o componente de busca de um aluno
  //renderizar as informações de interesse
  render () {
    return (
      <div className="col-sm-5">
        <StudentSearchBar/>
      </div>
    );
  }
}

export default Home;