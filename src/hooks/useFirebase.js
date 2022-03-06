import React, { useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged} from "firebase/auth";
import firebaseInitialize from '../firebase/firebase.init';
import axios from 'axios';
firebaseInitialize()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState();
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
     const handleRegistration = (email, password, displayName) =>{
         setIsLoading(true)
         createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential)=>{
             const users = userCredential.user;
             setUser(users)
             savedUser(email, displayName,)
         })
         .catch((error)=>{
             const errorCode = error.code;
             console.log(errorCode)
             const errorMessage= error.message;
              setError(error)
         })
        .finally(()=>setIsLoading(false))
     }
     //handle login
     const handlelogin = (email, password) =>{
         setError("")
         if(email.length === 0){
             setError('Please give your email address')
             return;
         }
         if(password.length === 0){
             setError('Please give your password')
             return;
         }
         setIsLoading(true)
         return signInWithEmailAndPassword(auth, email, password)
        .finally(()=>setIsLoading(false))
     }
     //singout
     const Logout = ()=>{
        setIsLoading(true)
            signOut(auth)
            .then(()=>{
                setUser({})
            })
            .finally(()=> setIsLoading(false))
        }
        //with google
        const handlegooglesingin = () =>{
           setIsLoading(true)
           return signInWithPopup(auth, provider)
           .finally(() => setIsLoading(false));
        }
        useEffect(()=>{
            onAuthStateChanged(auth, user =>{
                if (user) {
                    setUser(user)
                  } 
                  setIsLoading(false)
            })
        },[])
        //set admin data 
      useEffect(()=>{
      axios.get(`https://arcane-refuge-73765.herokuapp.com/user/${user.email}`)
      .then(res => {
          const data = res.data;
          setAdmin(data.role)
      })
    },[user.email])
       // save user
       const savedUser = (email, displayName) =>{
           const data = {
               email,
               displayName,
               admin : false
           }
        axios.post('https://arcane-refuge-73765.herokuapp.com/user', data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
       }
       const saveUser = (email, displayName) =>{
        const user = {email, displayName}
        fetch('https://arcane-refuge-73765.herokuapp.com/user',{
          method: "PUT", 
          headers: {
            'content-type' : 'application/json'
          },
          body : JSON.stringify(user)
        })
        .then()
     }
     
     console.log(admin)
    return {
        handleRegistration,
        user,
        isLoading,
        error,
        setError,
        handlelogin,
        handlegooglesingin,
        Logout,
        saveUser,
        setUser,
        admin
    } ;
};

export default useFirebase;