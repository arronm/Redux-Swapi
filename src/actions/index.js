import axios from 'axios';

const FETCHING = 'FETCHING';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAIL = 'FETCH_FAIL';

export const starWarsFetch = () => dispatch => {
  console.log('fetching');
  dispatch({
    type: FETCHING,
  });

  axios.get('https://swapi.co/api/people')
    .then(({data}) => {
      console.log('fetched data:', data);
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
