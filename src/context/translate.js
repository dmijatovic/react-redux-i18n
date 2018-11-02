//
import { Config as cfg } from '../store/app.cfg';

/**
 * Translations module
 */
export class trans {
  constructor(){
    console.log("trans...started");
  }
  /**
   * Get user language from localStorage
   * or default from store/app.cfg.js
   */
  getLanguage = () => {
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
  setLanguage = lang => {
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
  getTranslations = lang => {
    debugger
    //get language file from configuration file based on locale key
    let lng = cfg.i18n.lang.filter(item => item.key===lang);
    //load data
    return new Promise((res,rej)=>{
      if(lng){
        let url = lng.data;
        fetch(url)
          .then(resp => {
            debugger
            return resp.json()
          })
          .then(data => {
            res({
              lang,
              data
            });
          })
          .catch(e => {
            rej({
              error: e
            })
          })
      }else{
        rej({
          error:"Failed to load language from configuration file."
        })
      }
    })
  }
}