import { combineReducers } from 'redux';

import getStudents from './reducer_students';

const rootReducer = combineReducers({
  students: getStudents,
});

export default rootReducer;