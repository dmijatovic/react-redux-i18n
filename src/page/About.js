//REACT
import React, { Component } from 'react';
//REDUX
import { connect } from 'react-redux';
import * as actionType from '../store/actions';

import { Loader } from '../component';
import { logGroup } from '../utils';
import './About.scss';

/*
const About = props => {
  // logGroup({
  //   title:"About",
  //   method:"render",
  //   props: props
  // })
  const getContent = props => {
    //debugger
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
  //set title
  // props.dispatch({
  //   type: actionType.SET_PAGE_TITLE,
  //   payload:"About page"
  // })
  //set translated title
  return (
    <React.Fragment>
      <div className="page-body-header">
        <h2>{props.pageTitle}</h2>
      </div>
      { getContent(props) }
    </React.Fragment>
  );
};*/

class About extends Component {
  getContent = () =>{
    if (this.props.loader.show){
      return (
        <Loader type={this.props.loader.type}/>
      )
    }else{
      return(
        <section className="about-page">
          <p>This is content of about page!</p>
        </section>
      )
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="page-body-header">
          <h2>{this.props.pageTitle}</h2>
        </div>
        { this.getContent() }
      </React.Fragment>
    );
  }
  componentDidMount(){
    logGroup({
      title:"About",
      method:"componentDidMount",
      props: this.props
    })
    // temp loader demo
    setTimeout(()=>{
      //remove loader
      this.props.dispatch({
        type:actionType.HIDE_LOADER
      })
    },2000);
  }
  componentDidUpdate(){
    logGroup({
      title:"About",
      method:"componentDidUpdate",
      props: this.props
    })
    //update page title in app header component
    if (this.props.pageTitle){
      //debugger
      this.props.dispatch({
        type: actionType.SET_PAGE_TITLE,
        payload: this.props.pageTitle
      })
    }
  }
}


//-------------- REDUX CONNECTION ---------------------
/**
 * Map redux store states to local component properties
 * @param state: object, redux store object
 */
const mapStateToProps = state => {
  //get translations from i18n reducer
  let { data } = state.i18n.lang;
  if (data){
    //debugger
    return {
      pageTitle: data['About.pageTitle'],
      loader: state.loader
    }
  }else{
    return {
      //pageTitle: null,
      loader: state.loader
    }
  }
}

/**
 * Connected functional component
 * If second function mapDispatchToProps is not passed
 * dispatch function is added to props
 */
export default connect(
  mapStateToProps
)(About);

