import React from 'react'
import axios from 'axios'
import {AppRoutes} from '@/constants/AppRoutes'

export const RegisterValidation = async (registerDetails,setError,setLoading) => {
   console.log(registerDetails);
   
   
    const { fullname, email, password, confirmPassword } = registerDetails;
    
    if (password !== confirmPassword) {
       setError('Passwords do not match');
       return;
     }
 
    try {
         
       setLoading(true);
       const response = await axios.post(AppRoutes.register, registerDetails, {
         headers: { 'Content-Type': 'application/json' },
       });
         console.log(response);
         setError('')
     } catch (error) {
       if (error.response) {
         setError(error.response.data.mess); // Get the error message from the response
       }
       setError(error.message);
     } finally {
       setLoading(false);
     }
}

export const LoginValidation = () => {

}
