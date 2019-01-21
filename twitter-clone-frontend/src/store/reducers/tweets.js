import { TOGGLE_MODAL, POST_TWEET } from "../actions/actionTypes";

const initialState = {
  modalOpened: false,
  tweet: []
};

const reducer = (state = initialState, action) => {
  console.log("action.type: ", action.type);
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modalOpened: !state.modalOpened
      };
    case `${POST_TWEET}_FULFILLED`:
      return { ...state, tweet: action.payload };
    default:
      return state;
  }
};

export default reducer;
