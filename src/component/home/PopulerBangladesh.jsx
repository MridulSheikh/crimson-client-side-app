import React from 'react';
import { BangladeshPopular } from '../../constant/MOCK_HOME_SETVICE';
import PopularCard from './PopularCard';

const PopulerBangladesh = () => {
    return (
        <div className='hover:cursor-pointer'>
        <h1 className='text-center text-2xl md:text-5xl font-mono text-gray-800 pt-20 pb-20 '>Most popluler place in Bangladesh</h1>
            <div className='hidden md:grid md:grid-cols-3 gap-20 md:px-10'>
               {
                   BangladeshPopular.map(place => 
                    <PopularCard 
                     key={place.name}
                     name={place.name}
                     country={place.country}
                     img={place.img}
                    />
                    )
               }
            </div>
        </div>
    );
};

export default PopulerBangladesh;