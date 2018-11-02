import React from 'react';

import './PersonCard.scss';

const PersonCard = (props) => (
  <div className="person-card">
    <h3 className="person-name">{props.name}</h3>
    <h3 className="person-age">{props.age}</h3>
    <button className="btn bn-white person-btn-delete"
      onClick={()=>props.deletePerson(props.id)}>X</button>
  </div>
)

export default PersonCard;