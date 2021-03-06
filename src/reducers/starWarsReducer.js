import { FETCHING, FETCH_SUCCESS, FETCH_FAIL } from "../actions";

const initialState = {
  characters: [],
  error: null,
  fetching: false,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        error: '',
        fetching: true,
      }
    case FETCH_SUCCESS:
      return {
        characters: action.payload.results,
        error: '',
        fetching: false,
      }
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        fetching: false,
      }
    default:
      return state;
  }
};
