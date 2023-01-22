import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import authAction from "../store/action/auth";
import { useDispatch, useSelector } from "react-redux";
import { authLoading, authSuccess, authError } from "../store/type/type";
import Loading from "../components/Loading";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import RegisterLoading from "../components/RegisterLoading";
import useSound from "use-sound";

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const [play] = useSound("/noti.mp3");

  const router = useRouter();
  const dispatch = useDispatch();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState({});
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const { email, password } = data;

    await axios
      .post("http://localhost:3000/api/user/login", { email, password })
      .then((res) => {
        // console.log(res.data.message)
        var date = new Date();
        date.setTime(date.getTime() + 60 * 10000);
        if (res.data?.token) {
          cookie.set("userId", res.data?.user?._id, { expires: date });
          cookie.set("AuthToken", res.data?.token, { expires: date });
          router.push("/");
          setShowSuccessAlert(false);
          setAlertMessage({});
        }
        // console.log(res)
        setAlertMessage(res.data);
        setShowSuccessAlert(true);
        setLoading(false);
        play();
      })
      .catch((error) => {
        setAlertMessage(error);
        setShowSuccessAlert(true);
        setLoading(false);
      });
    // reset()
  };

  return (
    <>
      <Header />
      {loading ? <RegisterLoading /> : null}
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
              Login
            </button>
          </form>

          {showSuccessAlert ? (
            <div
              className={
                alertMessage?.newUser
                  ? "alert alert-success shadow-lg mb-4"
                  : "alert alert-error  shadow-lg mb-4"
              }
            >
              <div>
                <span
                  className="cursor-pointer"
                  onClick={() => setShowSuccessAlert(false)}
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current flex-shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span>{alertMessage?.message}</span>
              </div>
            </div>
          ) : null}
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
