import React from 'react';
import EditableControl from '../EditableControl/EditableControl';

import classes from './MenuItem.module.css';

const menuItem = (props) => {


  const controlers = props.edit && props.delete ? (
      <EditableControl edit={props.edit} delete={props.delete} />
    ): '';
    
  return (
    <div className={classes.MenuItem} onClick={props.click}>
      <p className={classes.Title}>{props.name}</p>
      <p className={classes.Description}>{props.description}</p>
      <p className={classes.price}>{props.price}{props.currency} </p>
      {controlers}
    </div>);
}
export default menuItem;