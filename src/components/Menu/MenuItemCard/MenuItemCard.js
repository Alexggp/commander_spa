import * as React from 'react';

import classes from './MenuItemCard.module.css';

const itemImage= 'https://photo620x400.mnstatic.com/eb8333300f024c5afa9707b376ab4ab4/kubo-king.jpg'


const MenuItemCard = (props)=>{
  return (
    <div className={classes.MenuItemCard}>
      <div className={classes.ItemImage}>
        <img alt="item" src={itemImage}/>
      </div>
      <div className={classes.ItemData}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <h3>{props.price}{props.currency}</h3>
      </div>  
    </div>
  );
}

export default MenuItemCard;