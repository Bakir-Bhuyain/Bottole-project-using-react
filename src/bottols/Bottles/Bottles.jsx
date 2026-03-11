import React, { use, useState } from 'react';
import Bottle from '../../../Bottle';
import './bootles.css'
const Bottles = ({ bottlePromise }) => {
      const bottles = use(bottlePromise)

      const [cart, setCart]= useState([]);
      function handleBottle(bottle) {
            console.log('bottle clicked', bottle);
      }
      // console.log(bottles);
      return (
            <div>
                  <h3>Bottle Length : {bottles.length}</h3>
                  <div className='all-bottles'>
                        {
                              bottles.map(bottle => <Bottle  
                                    handleBottle={handleBottle}
                                    key={bottle.id} bottle={bottle}></Bottle>)

                        }
                  </div>
            </div>
      );
};

export default Bottles;