import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const starWarsFetch = () => dispatch => {
  dispatch({
    type: FETCHING,
  });

  axios.get('https://swapi.co/api/people')
    .then(({data}) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: data,
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_FAIL,
        payload: error,
      });
    });
}
