import {
  SET_SCREAMS,
  LOADING_DATA,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  DELETE_SCREAM,
} from "../types";

const initialState = {
  screams: [],
  scream: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_SCREAMS:
      return {
        ...state,
        screams: action.payload,
        loading: false,
      };
    case LIKE_SCREAM:
    case UNLIKE_SCREAM:
      const unliked_scream_index = state.screams.findIndex(
        (scream) => scream.screamId === action.payload.screamId
      );
      state.screams[unliked_scream_index] = action.payload;
      return {
        ...state,
      };
    case DELETE_SCREAM:
      const deleted_scream_index = state.screams.findIndex(
        (scream) => scream.screamId === action.payload
      );
      state.screams.splice(deleted_scream_index, 1);
      return {
        ...state,
      };
    default:
      return state;
  }
}
