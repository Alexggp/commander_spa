import * as React from 'react';
import Button from '@mui/material/Button';

import classes from './MenuItemForm.module.css';

const itemImage= 'https://photo620x400.mnstatic.com/eb8333300f024c5afa9707b376ab4ab4/kubo-king.jpg'


const MenuItemForm = (props)=>{

  const emptyForm={
    title:'',
    description:'',
    price:''
  }
  const [formData, setFormData] = React.useState(emptyForm);


  const onChangeHandler = (e,field) =>{
    const modifiedForm = {...formData};
    modifiedForm[field] = e.target.value;
    setFormData(modifiedForm);
  }

  const saveHandler = ()=>{
    props.save(props.section, formData);
    props.cancel();
  }

  return (
    <div className={classes.MenuItemForm}>
      <div className={classes.ItemImage}>
        <img alt="item" src={itemImage}/>
      </div>
      <form className={classes.ItemForm}>
        <label htmlFor="itemTitleInput">Nombre</label>
        <input id="itemTitleInput" type="text" placeholder="Nombre" onChange={(e)=>onChangeHandler(e, 'name')}/>

        <label htmlFor="itemDescriptionInput">Descripción</label>
        <textarea id="itemDescriptionInput" placeholder="Descripción" onChange={(e)=>onChangeHandler(e, 'description')}/>

        <label htmlFor="itemPriceInput">Precio en {props.currency}</label>
        <input id="itemPriceInput" type="number" onChange={(e)=>onChangeHandler(e, 'price')}/>
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

export default MenuItemForm;