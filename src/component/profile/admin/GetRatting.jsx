import axios from 'axios';
import React, {useState, useEffect} from 'react';
import AdminRattingCard from './AdminRattingCard';

const GetRatting = () => {
    const [ratting, setRatting] = useState([]);
    const [loading, setLoading] = useState(false);

    const reset =()=>{
        setLoading(true)
        axios.get('http://localhost:5000/ratting')
        .then(res => {
            setRatting(res.data)
        })
        .finally(()=>setLoading(false))
    }
    
    useEffect(()=>{
        setLoading(true)
        axios.get('http://localhost:5000/ratting')
        .then(res => {
            setRatting(res.data)
        })
        .finally(()=>setLoading(false))
    },[])
    return ( 
        <div>
           <div className='grid md:grid-cols-5 bg-primary-color text-white shadow-md px-7 py-5 sticky top-0 gap-5 text-center'>
            <p className='text-left'>Name</p>
            <p>Email</p>
            <p>Ratting</p>
            <p>status</p>
            <button onClick={reset} className="text-yellow-500">Reset</button>
           </div>
           {
            loading ?  
            <div className='m-auto text-primary text-xl h-48'><p className='text-center mt-52'>Loading......</p>
            </div>
            :
            <div className='pb-10'>
            {
                ratting.map(rating => <AdminRattingCard
                    key={rating._id}
                    _id={rating._id}
                    name={rating.name}
                    email={rating.email}
                    ratting={rating.ratting}
                    about={rating.about}
                    show = {rating.show}
                    reset= {reset}
                    />)
            }
            </div>
            }
        </div>
    );
};

export default GetRatting;