import React,{useState} from 'react';
import Header from '../components/Header';
import Link from 'next/link'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios'
import {useDispatch , useSelector} from 'react-redux'
import {loadingStart , loadingEnd} from '../store/type/type'
import Loading from '../components/Loading';
const schema = yup.object({
        name: yup.string().required(),
        lastName: yup.string().required(),
        mobile: yup.number().positive().integer().required(),
        email: yup.string().required(),
        password: yup.string().required()
      }).required()


const Signup = () => {
        const [showSuccessAlert , setShowSuccessAlert] = useState(false)
        const [alertMessage , setAlertMessage] = useState("")
        const dispatch = useDispatch()
        const loadingState = useSelector((current)=> current.loadingReducer)
        const { register, handleSubmit, reset , formState:{ errors } } = useForm({
                resolver: yupResolver(schema),       
              });

const onSubmit = async(data) => {
        dispatch({type : loadingStart})
        const {name , lastName , email , mobile , password} = data
        const pendingUser = {
                email,
                name,
                lastName,
                mobile,
                password
        }
        const res =   await axios.post('http://localhost:3000/api/user/signin',pendingUser)       
        setAlertMessage(res?.data)
        // reset()  
        dispatch({type : loadingEnd})
        setShowSuccessAlert(true)
};

        return (
                <>
                <Header />
                        {
                                loadingState.loading ?  <Loading /> : null
                        }
                        <div>
                           <div className="bg-light_white shadow-md md:w-[50%] w-[90%] mx-auto mt-16 p-8 rounded-md text-center">
                           <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center">
                                <h2 className="font-bold mb-3 text-xl">Sign Up</h2>
                                <input  {...register("name")} type="text" placeholder="Fast Name" className="input input-bordered w-full " />
                                <p className="text-[#ED2672] my-2 text-left">{errors.name?.message}</p>
                                <input {...register("lastName")} type="text" placeholder="Last Name" className="input input-bordered w-full " />
                                <p className="text-[#ED2672] my-2 text-left">{errors.lastName?.message}</p>
                                <input {...register("mobile")} type="number" placeholder="Mobile" className="input input-bordered w-full " />
                                <p className="text-[#ED2672] my-2 text-left">{errors.mobile?.message}</p>
                                <input {...register("email")} type="email" placeholder="User Email" className="input input-bordered w-full " />
                                <p className="text-[#ED2672] my-2 text-left">{errors.email?.message}</p>
                                <input {...register("password")} type="password" placeholder="User Password" className="input input-bordered w-full " />
                                <p className="text-[#ED2672] my-2 text-left">{errors.password?.message}</p>
                                {
                                        showSuccessAlert
                                         ? 
                                        <div className={ alertMessage?.newUser ? "alert alert-success shadow-lg mb-4" : "alert alert-error  shadow-lg mb-4"}>
                                                <div >
                                                       <span className="cursor-pointer" onClick={()=> setShowSuccessAlert(false) }> <svg  xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span>
                                                        <span>{alertMessage?.message}</span>
                                                </div>
                                        </div>
                                        :
                                        null
                                }
                                <button  className={ loadingState.loading ? 'btn bg-[#AAAAAA] text-[#797979]  border-none w-full mb-4 pointer-events-none' : 'btn bg-dark_purple border-none w-full mb-4 '}>Next</button>
                            </form>
                            <span className="block font-bold text-xl">
                            <Link href="/login">Login</Link>
                            </span>
                            <span className="text-blue">Forget Password</span>
                           </div>
                        </div>
                </>
        );
}

export default Signup;
