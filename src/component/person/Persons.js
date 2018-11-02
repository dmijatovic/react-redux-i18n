//REACT
import React from 'react';

//THIRD PARTY
import {connect} from 'react-redux';

//LOCAL
import * as actionType from '../../store/actions';
import './Persons.scss';
import AddPerson from './AddPerson';
import PersonCard from'./PersonCard';

export class Persons extends React.Component{
  render(){
    return(
      <div className="persons">
        <AddPerson addPerson={this.props.onAddPerson}/>
        <div className="persons-list">
          {
            //list persons here
            this.props.persons.map((p)=>{
              //debugger
              return (
                <PersonCard
                {...p}
                deletePerson={this.props.onDeletePerson}
                key={p.id}/>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  //debugger
  return {
    persons: state.persons
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    onAddPerson: (person) => {
      //debugger
      return dispatch({type: actionType.ADD_PERSON, payload: person})
    },
    onDeletePerson: (id) => {
      //debugger
      return dispatch({type: actionType.DELETE_PERSON, payload: id})
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);