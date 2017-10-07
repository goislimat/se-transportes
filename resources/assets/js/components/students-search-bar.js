import React, { Component } from 'react';
//import { Typeahead } from 'react-typeahead';
import { Typeahead } from 'react-bootstrap-typeahead';

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
    const options = [ 'John', 'Miles', 'Charles', 'Herbie', ];

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
            placeholder="Choose a student..."
            onInputChange={ this._handleChange }
            submitFormOnEnter={ submitFormOnEnter }
          />

          <span className="input-group-btn">
            <button className="btn btn-primary">Search</button>
          </span>
        </form>
      </div>
    );
  }
}

export default StudentSearchBar;