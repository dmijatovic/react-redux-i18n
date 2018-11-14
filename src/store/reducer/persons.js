//import cfg from '../app.cfg';
import * as actionType from '../actions';
//eslint-disable-next-line
import { logGroup } from '../../utils';

export const personsReducer = (state = [], action) => {
  //log action comming into reducer
  // logGroup({
  //   title:"personsReducer",
  //   state: state,
  //   action: action
  // });
  switch (action.type) {
    case actionType.ADD_PERSON:
      //use concat with arrays
      //to return new object (immutable)
      return state.concat({
        ...action.payload,
        id: Math.random() * 1000000,
      });

    case actionType.DELETE_PERSON:
      //use filter to return new object (immutable)
      return state.filter(item => item.id != action.payload);
    //always return state
    //to continue 'event' chain
    default:
      return state;
  }
};

export default personsReducer;
