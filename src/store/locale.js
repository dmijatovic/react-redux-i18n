/**
 * Localization functions
 *
 */

import { Config as cfg } from '../store/app.cfg';
import * as actionType from './actions';

/**
 * Get user language from localStorage
 * or default from store/app.cfg.js
 */
export const getLanguage = () => {
  //debugger
  let l = localStorage.getItem('dv4all.app.lang');
  if (l){
    return l;
  }else{
    return cfg.i18n.defaultLang;
  }
}

/**
 * Set language key into localStorage
 * @param {string} lang 2-letter language key stored in definitions
 */
export const setLanguage = lang => {
  if (localStorage){
    localStorage.setItem('dv4all.app.lang', lang);
  }else{
    console.error("localStorage...MISSING");
  }
}

/**
 * Load translations from json files based on the language key.
 *
 */
export const getTranslations = ({lang, dispatch}) => {
  //debugger
  //get language file from configuration file based on locale key
  let lng = cfg.i18n.lang.filter(item => item.key===lang);
  //load data
  if(lng.length===1){
    let url = lng[0].data;
    fetch(url)
      .then(resp => {
        //debugger
        return resp.json();
      })
      .then(data => {
        //debugger
        dispatch({
          type: actionType.SET_LANGUAGE,
          payload:{
            key: lang,
            data
          }
        });
      })
      .catch(e => {
        dispatch({
          type: actionType.API_DATA_ERR,
          payload:{
            key: lang,
            error: e
          }
        });
      })
  } else {
    console.error("language not defined");
  }
}