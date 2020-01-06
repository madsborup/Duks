import { AuthData, Action, ActionTypes } from "../actions";

const INITIAL_STATE: AuthData = {
  isLogginIn: false,
  isVerifying: false,
  isAuthenticated: false,
  user: {} as firebase.User
};

const auth = (state: AuthData = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        isLogginIn: true
      };
    case ActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLogginIn: false,
        isAuthenticated: true,
        user: action.user
      };
    case ActionTypes.VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true
      };
    case ActionTypes.VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false
      };
    case ActionTypes.SIGN_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default auth;
