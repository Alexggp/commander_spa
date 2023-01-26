import React from 'react';

import classes from './Backdrop.module.css';




const backdrop = (props) =>{

  const clickHandler= (e) =>{
    e.stopPropagation(); 
  }

  return (
    props.show ? 
      <div 
        style={{position: props.fullWindow ? 'fixed' : 'absolute'}}
        className={classes.Backdrop} 
        onClick={props.clicked}>
          <div  className={classes.Container}  onClick={clickHandler}>
            {props.children}
          </div>
          
      </div> 
    : null
  );
}
export default backdrop;