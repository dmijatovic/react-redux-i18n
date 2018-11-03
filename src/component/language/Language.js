import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../store/actions';

const Language = props => {
  return (
    <select onChange={props.onLangChange}>
      { props.languages.map(item =>{
        return (
          <option
            key={item.key}
            value={JSON.stringify(item)}>
            { item.label }
          </option>
        )
      })}
    </select>
  );
};

/**
 * Redux connection to pass dispatch action into Language
 * @param {*} dispatch
 */
const mapDispatchToProps = dispatch => {
  return {
    /**
     * On language change we pass selected i18n.options item (stringified)
     */
    onLangChange: e => {
      //parse JSON string back to object
      let ln = JSON.parse(e.target.value);
      dispatch({
        type: actionType.GET_LANGUAGE,
        payload: ln
      })
    }
  }
}

/**
 * Redux connection to pass state to component
 * as properties
 * @param {*} state
 */
const mapStateToProps = state => {
  //debugger
  let {key} = state.i18n.lang;

  if (key){
    //language is loaded
    let selected = state.i18n.options.filter(item=>item.key===key);
    return{
      languages: state.i18n.options,
      selected: JSON.stringify(selected)
    }
  }else{
    return{
      languages: state.i18n.options,
      selected: null
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Language);