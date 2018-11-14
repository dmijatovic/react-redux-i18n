import cfg from '../app.cfg';
import * as actionType from '../actions';
//eslint-disable-next-line
import { logGroup } from '../../utils';

/**
 * Manage the loader states using redux store
 * @param state: object, current redux store state of loader store
 * @param action: object, dispatched redux action
 */
export const loaderReducer = (state = cfg.loader, action) => {
  //just for fun use lowercased action types
  switch (action.type) {
    case actionType.SHOW_LOADER:
      return {
        ...state,
        show: true,
      };
    case actionType.HIDE_LOADER:
      return {
        ...state,
        show: false,
      };
    case actionType.SET_LOADER_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    //always return state
    //to continue 'event' chain
    default:
      return state;
  }
};

export default loaderReducer;
