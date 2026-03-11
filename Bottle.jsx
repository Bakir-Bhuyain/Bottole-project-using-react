import React from 'react';
import './bottle.css'
const Bottle = ({ bottle, handleBottle }) => {
      const {img, name, price, stock}= bottle
      return (
            <div className='card bottle'>
                  <img src={img} alt="" />
                  <h3>{name}</h3>
                  <h4>{price}</h4>
                  <p>{stock} available</p>
                  <button onClick={()=>handleBottle(bottle)}>Buy Now</button>
            </div>
      );
};

export default Bottle;