import { SET_USER } from "../actions/actionTypes";

const initialState = {
  user: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
