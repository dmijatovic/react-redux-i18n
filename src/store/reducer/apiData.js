import * as actionType from '../actions';

export const apiDataReducer = (state = {}, action) => {
  /*logGroup({
    title:'apiDataReducer',
    action: action,
    state: state
  });*/
  switch (action.type) {
    case actionType.API_DATA_GET:
      //debugger
      //do nothing
      return state;
    case actionType.API_DATA_OK:
      return {
        ...state,
        ...action.payload,
      };
    case actionType.API_DATA_ERR:
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

export default apiDataReducer;
