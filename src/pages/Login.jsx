import React, { useState } from 'react'
import { LoginHeading } from '../components/LoginHeading'
import { InputFields } from '../components/InputFields'
import { useFormAction, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { UserCredentials } from '../utils/UserCredentials';

export const Login = () => {
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();
    const onHandleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.id]: e.target.value
        })
    }
    console.log("userdata-->",userData);
    const onHandleClick = () => {
        if (userData.username == UserCredentials.username && userData.password == UserCredentials.password){
            navigate("/dashboard");
        }
        else{
            // userData.username = " ";
            alert("Enter correct input");
        }
    }
  return (
    <div className='w-full h-screen md:h-screen flex items-center justify-center bg-slate-400 p-5'>

        <div className='w-full h-96 mx-auto md:max-w-sm md:h-96 bg-slate-300  rounded-md shadow-black shadow-lg'>
             <div>
                <LoginHeading/>
             </div>
             <div className='mx-auto'>
                 <InputFields
                 label="Username"
                 id="username"
                 type="username"
                //  required= {true} 
                 placeholder="Enter Username"
                 onchange={onHandleChange}
                 />
                 <InputFields
                 label="Password"
                 id="password"
                 type="password"
                 placeholder="Enter Password"
                //  required={true}
                 onchange={onHandleChange}
                 />
             </div>
             <div>
                <Button 
                label="Submit"
                onclick={onHandleClick}
                />
             </div>
        </div>

    </div>
  )
}
