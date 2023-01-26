import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';

import MenuItem from './MenuItem/MenuItem';
import EditableControl from './EditableControl/EditableControl';
import classes from './Menu.module.css';
import Backdrop from '../../hoc/Backdrop/Backdrop';
import MenuItemCard from './MenuItemCard/MenuItemCard';
import MenuItemForm from './MenuItemForm/MenuItemForm';
import MenuSectionForm from './MenuSectionForm/MenuSectionForm';



const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const Menu = (props)=>{
  const [expanded, setExpanded] = React.useState('section0');
  
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };



  const [itemCardData, setItemCard] = React.useState({});
  const itemCard = itemCardData.name ? (
      <Backdrop 
        fullWindow={true}
        show={true} 
        clicked={()=>setItemCard({})}>
          <MenuItemCard {...itemCardData} currency={props.currency}/>
      </Backdrop>
    ): '';

  const [showItemForm, setShowItemForm] = React.useState(false);
  const itemForm = showItemForm ? (
      <Backdrop 
        fullWindow={true}
        show={true} 
        clicked={()=>setShowItemForm(false)}>
          <MenuItemForm 
            currency={props.currency} 
            section = {showItemForm.section}
            save = {props.addItem}
            cancel={()=>setShowItemForm(false)}/>
      </Backdrop>
    ): '';  

  const [showSectionForm, setShowSectionForm] = React.useState(false);
  const sectionForm = showSectionForm ? (
      <Backdrop 
        fullWindow={true}
        show={true} 
        clicked={()=>setShowSectionForm(false)}>
          <MenuSectionForm 
            currency={props.currency} 
            save = {props.addSection}
            cancel={()=>setShowSectionForm(false)}/>
      </Backdrop>
    ): '';  

  const accordions = props.menu.map((section, index)=>{
    const items = section.items.map((item)=>(
      <MenuItem
        key={item._id}
        name={item.name}
        description={item.description}
        price={item.price}
        currency={props.currency}
        click= {()=>setItemCard(item)}
        edit={()=>console.log("editable")}
        delete={()=>props.deleteItem(index, item._id)}
      />
    ))
    return (
      <Accordion key={`section${index}`} expanded={expanded === `section${index}`} onChange={handleChange(`section${index}`)}>
        <AccordionSummary aria-controls={`section${index}-content`} id={`section${index}-header`}>
          <Typography>{section.name}</Typography>
          <EditableControl edit={()=>"edit"} delete={()=>props.deleteSection(index)}/>
        </AccordionSummary>
        <AccordionDetails>        
          {items}     
          <div className={classes.AddItem} onClick={()=>setShowItemForm({section:index})}>
            <AddCircleOutlineIcon/>
          </div>
          
        </AccordionDetails>
      </Accordion>
    )
  })

  return (
    <div className={classes.Menu}>
      {accordions}
      <div className={classes.AddSection}>
        <Button variant="outlined" onClick={()=>setShowSectionForm(true)}>
          <AddCircleOutlineIcon/> Añadir nueva sección
        </Button>
      </div>
      {itemCard}
      {itemForm}
      {sectionForm}
    </div>
  );
}

export default Menu; 