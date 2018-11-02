//polyfills
import '@babel/polyfill';
//REACT
import React from 'react';
import ReactDOM from 'react-dom';

//REDUX
import { Provider } from 'react-redux';
import appStore from './store';

//INITIAL LOCALE LOAD
import { getLanguage, getTranslations } from './store/locale';

let ln = getLanguage();

getTranslations({
  lang: ln,
  dispatch: appStore.dispatch
})


//LOCAL - STYLES
import './styles/index.scss';
//start page
//import Home from './page/Home';
import Page from './layout/Page';

ReactDOM.render(
  <Provider store={appStore}>
    <Page/>
  </Provider>,
  document.getElementById('react-root')
)