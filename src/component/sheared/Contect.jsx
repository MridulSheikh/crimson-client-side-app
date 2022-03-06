import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Contect = () => {
    const [subject, setSubject] = useState('');
    const [massage, setMassage] = useState('');
    const [alert, setAlert] = useState('');
    const {user} = useAuth();
    const post_Massage = e =>{
        setAlert('')
        e.preventDefault();
        setAlert('sending......')
        axios.post('https://arcane-refuge-73765.herokuapp.com/contect',{
           subject,
           massage,
           email : user.email
        })
        .then(function (response) {
            if(response.data.acknowledged){
                setAlert("sending successfully ! we are send response on your email address. Thank you for your vaulable massage 😀")
            }
          })
          .catch(function (error) {
            setAlert(error.massage);
          })
    }
    return (
        <div className='px-5 md:px-52 my-10'>
            <form onSubmit={post_Massage}>
            <input onBlur={e => setSubject(e.target.value)} type="text" placeholder='subject' className='w-full px-3 py-2 outline-none rounded-full border-2' /> <br />
            <textarea  onBlur={e => setMassage(e.target.value)} placeholder='massage' rows="10" className='w-full px-3 py-2 mt-5 outline-none rounded-md border-2' required />
            <p className='my-5 text-red-600'>{alert}</p>
            <button className='mt-5 text-center bg-blue-500 rounded-full text-white py-2 px-5'>send your massage</button>
            </form>
        </div>
    );
};

export default Contect;