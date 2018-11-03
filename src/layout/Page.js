import React from 'react';
//redux
import { connect } from 'react-redux';
//router
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../router/AppRouter';
//local
import { Header, NavBar, Footer } from './index';
import { logGroup } from '../utils';
import './Page.scss';

/**
 * Page component
 * @param {String} props.title pass title tot header title prop
 * @param {*} props.children child elements to place into body of page
 */
const Page = props => {
  //debugger
  logGroup({
    title:"Page",
    method: "render",
    props: props
  })
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header
          key="header"
          appTitle={props.appTitle}
          pageTitle={props.pageTitle}
          languages={props.languages}/>
        <NavBar/>
        <article
          key="body"
          className="page-body">

          <AppRouter/>

        </article>
        <Footer
          key="footer"
          left={props.footerLeft}
          right={props.footerRight}
        />
      </React.Fragment>
    </BrowserRouter>
  );
};

/**
 * Redux connection to pass state to component
 * as properties
 * @param {*} state
 */
const mapStateToProps = state => {
  //debugger
  //get translations from i18n reducer
  let { data } = state.i18n.lang;
  if (data){
    //debugger
    return{
      //this prop is dynamically updated by pages
      pageTitle: state.header.pageTitle,
      appTitle: data['Header.appTitle'],
      footerLeft: data['Footer.left'],
      footerRight: data['Footer.right'],
      languages: state.i18n.options
    }
  }else{
    //debugger
    return{
      appTitle: state.header.appTitle,
      pageTitle: state.header.pageTitle,
      languages: state.i18n.options
    }
  }
}

export default connect(
  mapStateToProps
)(Page);