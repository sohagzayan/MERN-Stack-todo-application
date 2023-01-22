import React, { useEffect } from "react";
import Login from "../pages/login";
import { NextResponse, NextRequest } from "next/server";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import authReducer from "./../store/reducer/authReducer";
import loginAction from "../store/action/loginAction";

const WithAuth = (Component) => {
  const Auth = (props) => {
    const isAuth = localStorage.getItem("user");
    // console.log(isAuth, "isAuth");
    const isLoggedIn = false;
    const authState = useSelector((current) => current.isLogInReducer);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loginAction());
    }, [authState.isLogIn]);

    console.log(authState);

    if (!isLoggedIn) {
      return <Login />;
    }

    return <Component {...props} />;
  };

  return Auth;
};

export async function getServerSideProps() {
  return {
    props: {
      sohag: "0198078548574857",
    },
  };
}

export default WithAuth;
