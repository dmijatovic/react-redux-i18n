/**
 * Custom middleware function that simply logs when called,
 * it should return next(action) function
 * and call it to continue action 'chain' and reach the reducer
 * note! if next(action) is not called the chain will break and action
 * will never reach the reducer
 * @param param.getState: fn, received from redux
 * @param param.dispatch: fn, received from redux
 */
export const actionLogger = ({ getState, dispatch }) => {
  // logGroup({
  //   title:"redux.middleware",
  //   method:"actionLogger",
  //   status:"enter"
  // })
  return next => action => {
    // logGroup({
    //   title:"redux.middleware",
    //   method:"actionLogger",
    //   status:"next",
    //   action: action
    // })
    //call next to continue the chain
    return next(action);
  };
};

export default actionLogger;
