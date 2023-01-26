import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import classes from './Management.module.css';
import SummaryHeader from '../../components/SummaryHeader/SummaryHeader';
import Menu from '../../components/Menu/MenuEditable';
import axios from '../../axios-service';

const Management = () => {

  const [data, setData] = useState({});
  const { businessId } = useParams();

  useEffect(() => {
    if (!Object.keys(data).length) {
      axios.get(`business/${businessId}`)
        .then(resp => {
          setData(resp.data)
        })
        .catch((error) => {
          setData({ error: true })
        });
    }
  })

  const deleteMenuItem = (section, itemId) => {
    const modifiedMenu = [...data.menu];
    const filteredArray = modifiedMenu[section].items.filter(item => item._id !== itemId);
    modifiedMenu[section].items = filteredArray;
    data.menu = modifiedMenu;
    setData(data);
  }

  const addMenuItem = (section, { name, description, price }) => {
    const modifiedMenu = [...data.menu];
    modifiedMenu[section].items.push({
      id: Math.floor(Math.random() * (999999 - 0 + 1) + 0) + '',
      name,
      description,
      price
    })
    data.menu = modifiedMenu;
    setData(data);
  }

  const deleteMenuSection = (section) => {
    let modifiedMenu = [...data.menu];
    modifiedMenu.splice(section, 1);
    data.menu = modifiedMenu;
    setData(data);
  }

  const addMenuSection = ({ name }) => {
    const modifiedMenu = [...data.menu];
    const newSection = {
      name: name,
      items: []
    }
    modifiedMenu.push(newSection);
    data.menu = modifiedMenu;
    setData(data);
  }



  const content = data._id ? (
    <div className={classes.MenuContainer}>
      <SummaryHeader
        frontPageImage={data.frontPageImage}
        avatarImage={data.avatarImage}
        name={data.businessName}
      />
      <Menu
        menu={data.menu}
        currency={data.currency}
        deleteItem={deleteMenuItem}
        addItem={addMenuItem}
        deleteSection={deleteMenuSection}
        addSection={addMenuSection}
      />
    </div>
  ) :
    (<div>NO DATA</div>)

  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  )

}
export default Management;