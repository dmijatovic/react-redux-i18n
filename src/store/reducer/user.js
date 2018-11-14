//import cfg from '../app.cfg';
import * as actionType from '../actions';
//eslint-disable-next-line
import { logGroup } from '../../utils';

const initUser = {
  userName: '',
  email: '',
  auth: {
    jwt: '',
  },
  error: null,
};

/**
 * Language reducer containing lang info and translations
 * @param {object} state previous state object
 * @param {object} action redux action with type and payload
 * @param {string} action.type redux action type, string constant
 * @param {object} action.payload redux action type, string constant
 */
export const userReducer = (state = initUser, action) => {
  /*logGroup({
    title:'filterReducer',
    action: action,
    state: state
  });*/
  //debugger;
  switch (action.type) {
    case actionType.USER_AUTH_OK:
      debugger;
      return {
        ...state,
        auth: {
          ...action.payload,
        },
      };
    case actionType.USER_AUTH_ERR:
      debugger;
      return {
        ...state,
        auth: {
          jwt: null,
        },
        error: {
          ...action.payload,
        },
      };
    case actionType.USER_CRED:
    case actionType.USER_EMAIL:
      //debugger
      return {
        ...state,
        ...action.payload,
      };
    //always return state
    //to continue 'event' chain
    default:
      return state;
  }
};

export default userReducer;
