import React from 'react';

import classes from './SummaryHeader.module.css';

const data = {
  frontPageImage: 'https://s03.s3c.es/imag/_v0/770x420/f/8/f/600x400_kentucky-fried-chicken-pollo.jpg',
  avatarImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0pZFzzqYafV7q1xRVegvbjdM_lDSStug_Q&usqp=CAU',
  name: 'Kubo King'  
}

const summaryHeader = (props) => {
  return (
    <div className={classes.SummaryHeader}>
      <div className={classes.FrontPage}>
        <img alt="front page" src={data.frontPageImage}/>
      </div>
      <div className={classes.Summary}>
        <div className={classes.Avatar}>
          <img alt="avatar" src={data.avatarImage}/>
        </div>
        <div className={classes.Title}>{data.name}</div>
      </div>
    </div>
  );
}

export default summaryHeader;