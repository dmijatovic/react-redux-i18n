//REACT
import React from 'react';
//REDUX
import { connect } from 'react-redux';
import * as actionType from '../store/actions';

import { Loader } from '../component';
import { logGroup } from '../utils';
import './About.scss';

const getContent = props => {
  //debugger
  //set title
  props.dispatch({
    type:actionType.SET_PAGE_TITLE,
    payload:"About page"
  })
  if (props.loader.show){
    setTimeout(()=>{
      //remove loader
      props.dispatch({
        type:actionType.HIDE_LOADER
      })
    },2000);
    return (
      <Loader type={props.loader.type}/>
    )
  }else{
    return(
      <section className="about-page">
        <p>This is content of about page!</p>
      </section>
    )
  }
}

const About = props => {
  logGroup({
    title:"About",
    method:"render",
    props: props
  })
  return (
    <React.Fragment>
      <div className="page-body-header">
        <h2>{props.pageTitle}</h2>
      </div>
      { getContent(props) }
    </React.Fragment>
  );
};

//-------------- REDUX CONNECTION ---------------------
/**
 * Map redux store states to local component properties
 * @param state: object, redux store object
 */
const mapStateToProps = state => {
  //debugger
  return {
    pageTitle: state.header.pageTitle,
    loader: state.loader
  }
}

/**
 * Connected functional component
 * If second function is not passed
 * dispatch function is added to props
 */
export default connect(
  mapStateToProps
)(About);

