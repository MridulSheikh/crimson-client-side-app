import React, { useState } from 'react';

const useCalculation = () => {
    const [final_price, setFinal_price] = useState()
    const calculation = (price, quantaty) =>{
          setFinal_price(price*quantaty)  
    }
    return {
      final_price,
      calculation
    };
};

export default useCalculation;