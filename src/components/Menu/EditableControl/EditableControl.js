import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import classes from './EditableControl.module.css';

const editableControl = (props) => {

  const editHandler= (e) =>{
    e.stopPropagation(); 
    props.edit();
  }
  const deleteHandler= (e) =>{
    e.stopPropagation(); 
    props.delete();
  }

  return (
    <div className={classes.EditableControl}>
      <div className={classes.ControlIcon} onClick={editHandler}><EditIcon/></div>
      <div className={classes.ControlIcon} onClick={deleteHandler}><DeleteIcon/></div>
    </div>
      
  )
}
export default editableControl;