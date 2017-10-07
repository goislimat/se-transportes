import axios from 'axios';

import { ROOT_URL } from '../global-constants';

export const GET_STUDENTS = 'GET_STUDENTS';
const RESOURCE = 'alunos';

export const getStudents= () => {
  const url = `${ROOT_URL}${RESOURCE}`;

  const request = axios.get(url);

  return {
    type: GET_STUDENTS,
    payload: request,
  }
};