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
      submitFormOnEnter: true,
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.getStudents();
  }

  _handleChange(textTyped) {
    this.setState({
      term: textTyped
    });
  }

  _handleSubmit(e) {
    e.preventDefault();

    alert(this.state.term);
  }

  render () {
    const options = this.props.students;

    const { submitFormOnEnter } = this.state;

    return (
      <div>
        <form
          onSubmit={ this._handleSubmit }
          className="input-group">

          <Typeahead
            labelKey="name"
            value={ this.state.term }
            options={ options }
            placeholder="Entre com o nome do aluno..."
            onInputChange={ this._handleChange }
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

function mapStateToProps(state) {

  let result = [];

  result = _.concat(result, _.map(state.students, student => {
    return student.name;
  }));

  return {
    students: result,
  }
}

export default connect(mapStateToProps, { getStudents })(StudentSearchBar);