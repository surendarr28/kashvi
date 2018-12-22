import React from 'react';
import './title.component.css';

const Title= (props)=>{
  return (
    <div className="title-cont" id="title" >
      {
        props.title
      }
      <div className="slogan">{props.slogan}</div>
    </div>
  );
}

export default Title;
