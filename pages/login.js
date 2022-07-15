import React,{useEffect} from "react";
import Header from "../components/Header";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import authAction from '../store/action/auth'
import { useDispatch, useSelector } from "react-redux";
import { authLoading, authSuccess, authError } from "../store/type/type";
import Loading from "../components/Loading";
import {useRouter} from 'next/router'
const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
   const router = useRouter()
   const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });





  const onSubmit = async (data) => {
    const { email, password } = data;

    await axios
      .post("http://localhost:3000/api/user/login", { email, password })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('TU', JSON.stringify({token : res?.data?.token , userId : res?.data?.user._id }))
        router.push("/")
      })
      .catch((error) => {
        console.log(error)
      });
    // reset()
  };

  return (
    <>
      <Header />
      <div>
        <div className="bg-light_white shadow-md md:w-[50%] w-[90%] mx-auto mt-16 p-8 rounded-md text-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center"
          >
            <h2 className="font-bold mb-3 text-xl">Sign in</h2>
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full mb-3"
            />
            <p className="text-[#ED2672] my-2 text-left">
              {errors.email?.message}
            </p>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="input input-bordered w-full mb-3"
            />
            <p className="text-[#ED2672] my-2 text-left">
              {errors.password?.message}
            </p>
            <button className="btn bg-dark_purple border-none w-full mb-4 ">
              Next
            </button>
          </form>
          <span className="block font-bold text-xl">
            <Link href="/signup">Sign Up</Link>
          </span>
          <span className="">Forget Password</span>
        </div>
      </div>
    </>
  );
};

export default Login;
