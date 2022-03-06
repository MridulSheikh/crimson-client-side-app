import React from 'react';
import Rating from 'react-rating'
const ShowingRattingCard = ({name, email, ratting, about}) => {
    const rate =  parseInt(ratting);
    return (
        <div className='shadow-md border rounded-md p-5 mx-5 bg-slate-100'>
            <p className='text-xl  font-semibold '>{name}</p>
            <p className='text-sm text-gray-700 mt-3'>{email}</p>
            <div className='my-3'>
            <Rating
            readonly
            initialRating={rate}
            emptySymbol={<img src="/image/empty-star.png" width={20} />}
            fullSymbol={<img src="/image/star.png" width={20}/>}
            />
            <span className='text-xs mx-3'>({ratting})</span>
            </div>
            <p className='text-sm text-gray-600'>{about}</p>
        </div>
    );
};

export default ShowingRattingCard;