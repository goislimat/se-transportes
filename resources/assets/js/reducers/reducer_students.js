import _ from 'lodash';

import { GET_STUDENTS } from "../actions/actions-students";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
};