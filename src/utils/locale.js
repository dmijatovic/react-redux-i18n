/**
 * Localization functions
 * save and load language preference from localStorage
 *
 */

import cfg from '../store/app.cfg';
import * as actionType from '../store/actions';

/**
 * Get user language from localStorage
 * or default from store/app.cfg.js
 * @param {string} key localStorage key to use to retreive value
 */
export const getLanguage = key => {
  //debugger
  let l = localStorage.getItem(key);
  if (l){
    return l;
  }else{
    //TODO! check browser language settings

    //TODO! check if language available in cfg

    //only default available
    return cfg.i18n.defaultLang;
  }
}

/**
 * Set language key into localStorage
 * @param {string} lang 2-letter language key stored in definitions
 */
export const setLanguage = ({ key, val }) => {
  //debugger
  if (localStorage){
    localStorage.setItem(key, val);
  }else{
    //eslint-disable-next-line
    console.error("localStorage...MISSING");
  }
}

/**
 * Intial loading of language information
 */
export const initLocale = dispatch => {
  //debugger
  //get language key from localStorage or config
  let key = getLanguage(cfg.i18n.lsKey);
  //get info where translations are
  let ln = cfg.i18n.options.filter(item => item.key === key )
  if (ln.length === 1){
    dispatch({
      type: actionType.GET_LANGUAGE,
      payload:{
        ...ln[0]
      }
    })
  } else {
    //eslint-disable-next-line
    console.warn("locale.initLocale...could not extract locale");
  }
}