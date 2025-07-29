// import React from 'react'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios' ;

// import { Link } from 'react-router-dom';
// import { useForm } from 'react-hook-form'
// import TextField from './TextField'; // ✅ Use correct path based on your folder structure
// import toast from 'react-hot-toast';
// import api from '../api/api';

// const RegisterPage = () => {
//     const navigate = useNavigate();
//     const[loader,setLoader]=useState(false);
//     const{
//         register,
//         handleSubmit,
//          reset,
//         formState: { errors }
       
//     } = useForm({
//         defaultValues: {
//             username:"",
//             email: "",  
//             password: "",
//         },
//         mode:"onTouched",

//     });
//     const registerHandler=async (data) => {
//         setLoader(true);
//         try{
//             // const{data: response}= api.post(
//             //     "/api/auth/public/register",
//             //     data
//             // );
//             const { data: response } = await axios.post("/api/auth/public/register", data);

//             reset();
//             navigate("/login");
//             toast.success("Registration successful! Please login.");

//         }   
//         catch(error){
//             console.error("Registration failed:", error);
//             toast.error("Registration failed. Please try again.");
//         }    
//         finally{
//             setLoader(false);
//         }  

//     };
//   return (
//     <div 
//     className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
//         <form onSubmit={handleSubmit(registerHandler)}
//         className='sm:w-[450px] w-[360px] py-8 sm:px-8 px-4 rounded-md-bg-black shadow-md flex flex-col gap-4'
//         >
//             <h1 className="text-center text-blue-900 font-semibold text-xl border border-blue-900 rounded-md px-8 py-3 shadow-md w-fit mx-auto">
//   Register Here
// </h1>
// <hr className='mt-2 mb-10 text-white'/>
// <div className='flex flex-col gap-3'>
//     <TextField
//         label="Username"
//         required
//         id="username"
//         type="text"
//         message="*Username is required"
//         placeholder="Type your username"
//         register={register}
//         errors={errors}
//         />
//         <TextField
//         label="Email"
//         required
//         id="email"
//         type="email"
//         message="*Email is required"
//         placeholder="Type your email"
//         register={register}
//         errors={errors}
//         />
//         <TextField
//         label="Password"
//         required
//         id="password"
//         type="password"
//         message="*Password is required"
//         placeholder="Type your password"
//         register={register}
//         errors={errors}
//         />
        

//         </div>
//         <button 
//         disabled={loader}
//         type="submit"
//         className='bg-blue-900 text-white font-semibold text-md px-4 py-2 rounded-md hover:bg-blue-800 transition-all duration-300 mt-4'
//         >
//            {loader ? "Loading..." : "Register"}
//         </button>
//         <p className='text-center text-sm text-slate-700 mt-6'>
//             Already have an account?
//             <Link className='text-blue-900 font-semibold hover:underline' to="/login">
//             <span>
//                 Login
//             </span>
//             </Link>
//         </p>
//        </form>
//        </div>
//   )
// }

import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import TextField from './TextField'; // ✅ Use correct path based on your folder structure
import toast from 'react-hot-toast';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        mode: "onTouched",
    });

    const registerHandler = async (data) => {
        setLoader(true);
        try {
            const { data: response } = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/auth/public/register`,
                data
            );

            reset();
            navigate("/login");
            toast.success("Registration successful! Please login.");
        } catch (error) {
            console.error("Registration failed:", error);
            toast.error("Registration failed. Please try again.");
        } finally {
            setLoader(false);
        }
    };

    return (
        <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
            <form onSubmit={handleSubmit(registerHandler)}
                className='sm:w-[450px] w-[360px] py-8 sm:px-8 px-4 rounded-md-bg-black shadow-md flex flex-col gap-4'
            >
                <h1 className="text-center text-blue-900 font-semibold text-xl border border-blue-900 rounded-md px-8 py-3 shadow-md w-fit mx-auto">
                    Register Here
                </h1>
                <hr className='mt-2 mb-10 text-white' />
                <div className='flex flex-col gap-3'>
                    <TextField
                        label="Username"
                        required
                        id="username"
                        type="text"
                        message="*Username is required"
                        placeholder="Type your username"
                        register={register}
                        errors={errors}
                    />
                    <TextField
                        label="Email"
                        required
                        id="email"
                        type="email"
                        message="*Email is required"
                        placeholder="Type your email"
                        register={register}
                        errors={errors}
                    />
                    <TextField
                        label="Password"
                        required
                        id="password"
                        type="password"
                        message="*Password is required"
                        placeholder="Type your password"
                        register={register}
                        errors={errors}
                    />
                </div>
                <button
                    disabled={loader}
                    type="submit"
                    className='bg-blue-900 text-white font-semibold text-md px-4 py-2 rounded-md hover:bg-blue-800 transition-all duration-300 mt-4'
                >
                    {loader ? "Loading..." : "Register"}
                </button>
                <p className='text-center text-sm text-slate-700 mt-6'>
                    Already have an account?
                    <Link className='text-blue-900 font-semibold hover:underline' to="/login">
                        <span> Login</span>
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default RegisterPage;
