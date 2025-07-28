import React from 'react'
import { useForm } from 'react-hook-form'

const RegisterPage = () => {
    const{
        register,
        handleSubmit,
         reset,
        formState: { errors }
       
    } = useForm({
        defaultValues: {
            username:"",
            email: "",  
            password: "",
        },
        mode:"onTouched",

    });
    const registerHandler=async (data) => {
    };
  return (
    <div 
    className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
        <form onSubmit={handleSubmit(registerHandler)}
        className='sm:w-[450px] w-[360px] py-8 sm:px-8 px-4 rounded-md-bg-black shadow-md flex flex-col gap-4'
        >
            <h1 className="text-center text-blue-600 font-semibold text-xl border border-blue-600 rounded-md px-6 py-3 shadow-md w-fit mx-auto">
  Register Here
</h1>

        </form>
        
        </div>
  )
}

export default RegisterPage