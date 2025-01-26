import React from 'react';
import './Watch.css';

const Watch = ({watch}) => {
  const {brand, model, price} = watch;
  return (
    <div>
      <h3>Watch Name:{brand}</h3>
      <h4>Model:{model}</h4>
      <p>Price: {price} </p>    
    </div>
  );
};

export default Watch;