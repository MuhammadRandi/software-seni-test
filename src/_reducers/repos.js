import { GET_REPOS } from "../config/constant";

const initialStates = {
    data: [],
    isLoading: false,
    error: false
  };

  export const repos = (state = initialStates, action) => {
    switch (action.type) {
      case `${GET_REPOS}_PENDING`:
        return {
          ...state,
          isLoading: true
        };
      case `${GET_REPOS}_REJECTED`:
        return {
          ...state,
          error: true,
          isLoading: false
        };
      case `${GET_REPOS}_FULFILLED`:
        return {
          ...state,
          data: action.payload.data,
          isLoading: false
        };
  
      default:
        return state;
    }
  };