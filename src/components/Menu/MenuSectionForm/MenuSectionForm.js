import * as React from 'react';
import Button from '@mui/material/Button';

import classes from './MenuSectionForm.module.css';



const MenuSectionForm = (props)=>{

  const emptyForm={
    name:''
  }
  const [formData, setFormData] = React.useState(emptyForm);


  const onChangeHandler = (e) =>{
    const modifiedForm = {...formData};
    modifiedForm.name = e.target.value;
    setFormData(modifiedForm);
  }

  const saveHandler = ()=>{
    props.save(formData);
    props.cancel();
  }

  return (
    <div className={classes.MenuSectionForm}>

      <form className={classes.SectionForm}>
        <label htmlFor="sectionTitleInput">Nombre</label>
        <input id="sectionTitleInput" type="text" placeholder="Nombre" onChange={(e)=>onChangeHandler(e)}/>     
      </form>  
      <div className={classes.Buttons}>
        <Button variant="contained" onClick={props.cancel}>
          Cancelar
        </Button>
        <Button variant="outlined" onClick={saveHandler}>
          Guardar
        </Button>
      </div>

    </div>

  );
}

export default MenuSectionForm;