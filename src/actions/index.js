import axios from 'axios';
// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator


const FETCHING = 'FETCHING';
const starWarsFetch = () => dispatch => {
  console.log('fetching');
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

const FETCH_SUCCESS = 'FETCH_SUCCESS';
const starWarsFetchSuccess = () => dispatch => {
  console.log('fetch success')
  // set state here
}


const FETCH_FAIL = 'FETCH_FAIL';
const starWarsFetchFail = () => dispatch => {
  console.log('fetch fail');
  // error handle here
}
