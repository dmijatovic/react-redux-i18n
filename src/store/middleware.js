/**
 * Redux middleware
 */

import * as actionType from './actions';
import { logGroup } from '../utils';

/**
 * Fetch data middleware, uses fetch API
 * @param param.getState: fn, received from redux
 * @param param.dispatch: fn, received from redux
 */
export const asyncFetch = ({getState, dispatch}) =>{
  //debugger
  return next => action => {
    // logGroup({
    //   title:"redux.middleware",
    //   method:"fetchData",
    //   status:"next",
    //   action: action
    // })
    //look for specific action type
    //debugger
    switch(action.type){
      case actionType.API_DATA_GET:
        //change action to show loader
        next ({
          type: actionType.SHOW_LOADER,
        })
        //fetch data
        fetchData(action)
        .then((d)=>{
          //debugger
          //pass data to reducer
          let payload = prepPayload(action.payload.id, d, null)
          next ({
            type: actionType.API_DATA_OK,
            payload
          });
          //debugger
          //return OK to hide loader
          return true;
        })
        .then(ok=>{
          //hide loader
          next ({
            type: actionType.HIDE_LOADER
          });
        })
        .catch( error => {
          //debugger
          //change action to API_DATA_ERR
          let payload = prepPayload(action.payload.id, null, error)
          next({
            type: actionType.API_DATA_ERR,
            payload
          });
          //hide loader
          next ({
            type: actionType.HIDE_LOADER
          });
        })
        break;
      default:
        //just pass action
        next (action);
    }
  }
}

/**
 * Format response to add actionId into
 * data object.
 * @param {*} action
 * @param {*} resp
 */
function prepPayload( id, data, error = null ){
  //create new object
  let payload={};
  //create key for original requestId
  //and add payload to it
  payload[id] = {
    id,
    data,
    error
  };
  return payload;
}



/**
 * Async function that fetchData from api using fetchAPI
 * info is pulled from definitions stored in config (app.cfg.js)
 */
function fetchData (action) {
  //get url and type of call
  let apiPoint = config.api[action.payload.id];
  let options = {
    method: apiPoint.method
  }
  //check posting data
  if (apiPoint.method==="POST"){
    //add data to body of post request
    options['body'] = action.payload.data
    options['headers'] = {
      'Content-Type': 'application/json'
    }
  }
  //return fetch request
  return fetch(apiPoint.url, options)
    .then(resp => {
      //debugger
      return resp.json();
    })
    .catch(err => {
      //debugger
      //log error
      let e = {
        message: `fetchData ${apiPoint.url} ...FAILED`,
        reason: err
      }
      //console.error(e.message, e.reason)
      //pass up
      throw e;
    })
}


/**
 * Custom middleware function that simply logs when called,
 * it should return next(action) function
 * and call it to continue action 'chain' and reach the reducer
 * note! if next(action) is not called the chain will break and action
 * will never reach the reducer which is the function of middleware
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
  }
}

