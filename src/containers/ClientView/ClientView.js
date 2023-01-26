import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router';

import SummaryHeader from '../../components/SummaryHeader/SummaryHeader';
import Menu from '../../components/Menu/Menu';
import axios from '../../axios-service';


const ClientView = () => {

  const [data, setData] = useState({});
  const { businessId } = useParams();
  
  useEffect(()=>{
    if (!Object.keys(data).length){
      axios.get(`business/${businessId}`)
      .then(resp =>{
        setData(resp.data)
      })
      .catch((error)=>{
        setData({error: true})
      });
    }
  })

  
  
 
  const content = data._id ? (
    <div>
      <SummaryHeader 
        frontPageImage = {data.frontPageImage}
        avatarImage = {data.avatarImage}
        name = {data.name}
      />
      <Menu
        menu = {data.menu}
        currency = {data.currency}
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
export default ClientView; 