import cfg from '../app.cfg';
import * as actionType from '../actions';
//eslint-disable-next-line
import { logGroup } from '../../utils';

export const headerReducer = (state = cfg.header, action) => {
  //log action comming into reducer
  // logGroup({
  //   title:"headerReducer",
  //   state: state,
  //   action: action
  // });

  //define state actions
  switch (action.type) {
    case actionType.SET_PAGE_TITLE:
      return {
        ...state,
        pageTitle: action.payload,
      };
    case actionType.SET_APP_TITLE:
      return {
        ...state,
        appTitle: action.payload,
      };
    case actionType.SET_APP_LOGO:
      return {
        ...state,
        logo: action.payload,
      };
    //always return state
    //to continue 'event' chain
    default:
      return state;
  }
};

export default headerReducer;
