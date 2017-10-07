import _ from 'lodash';
import React, { Component } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { connect } from 'react-redux';

import { getStudents } from "../actions/actions-students";

class StudentSearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',
      student: {},
      submitFormOnEnter: true,
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.getStudents();
  }

  _handleChange(selectedItem) {
    this.setState({
      student: selectedItem
    });
  }

  _handleSubmit(e) {
    e.preventDefault();

    //mandar esse objeto para ser construído depois da busca
    console.log(_.get(this.state.student, 0));
  }

  render () {
    const { submitFormOnEnter } = this.state;

    return (
      <div>
        <form
          onSubmit={ this._handleSubmit }
          className="input-group">

          <Typeahead
            labelKey="name"
            value={ this.state.term }
            options={ this.props.students }
            onChange={ this._handleChange }
            placeholder="Entre com o nome do aluno..."
            submitFormOnEnter={ submitFormOnEnter }
          />

          <span className="input-group-btn">
            <button className="btn btn-primary">Buscar</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ students }) {

  const studentsList = _.concat([], _.map(students, student => {
    return student;
  }));

  return {
    students: studentsList
  };
}

export default connect(mapStateToProps, { getStudents })(StudentSearchBar);