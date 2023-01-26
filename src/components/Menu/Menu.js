import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import MenuItem from './MenuItem/MenuItem';

import classes from './Menu.module.css';
import Backdrop from '../../hoc/Backdrop/Backdrop';
import MenuItemCard from './MenuItemCard/MenuItemCard';

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
  const [itemCardData, setItemCard] = React.useState({});


  const itemCard = itemCardData.name ? (
      <Backdrop 
        fullWindow={true}
        show={true} 
        clicked={()=>setItemCard({})}>
          <MenuItemCard {...itemCardData} currency={props.currency}/>
      </Backdrop>
    ): '';

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  const accordions = props.menu.map((section, index)=>{
    const items = section.items.map((item, itemIndex)=>(
      <MenuItem
        key={`item${index}-${itemIndex}`}
        name={item.name}
        description={item.description}
        price={item.price}
        currency={props.currency}
      />
    ))
    return (
      <Accordion key={`section${index}`} expanded={expanded === `section${index}`} onChange={handleChange(`section${index}`)}>
        <AccordionSummary aria-controls={`section${index}-content`} id={`section${index}-header`}>
          <Typography>{section.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>        
          {items}        
        </AccordionDetails>
      </Accordion>
    )
  })

  return (
    <div className={classes.Menu}>
      {accordions}
      {itemCard}
    </div>
  );
}

export default Menu; 