import React, { useState, useEffect } from "react";
import SideNavigation from "./SideNavigation";
import classes from "../styles/Layout.module.css";
import Header from "./Header";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import RingLoader from "react-spinners/RingLoader";
import { useRouter } from "next/router";
import authAction from "../store/action/auth";
import WithAuth from "../HOC/withAuth";
import accessToken from "../HOC/accessToken";

const Layout = ({ children }) => {
  // const [token , setToken] = UseToken()
  const authState = useSelector((current) => current.authReducer);
  const router = useRouter();
  const [globalLoading, setGlobalLoading] = useState(true);
  const dispatch = useDispatch();
  const loadingConfig = useSelector((current) => current.getTaskReducer);
  const [showNavigation, setShowNavigation] = useState(true);
  useEffect(() => {
    setGlobalLoading(false);
  }, []);

  return (
    <>
      <Header
        setShowNavigation={setShowNavigation}
        showNavigation={showNavigation}
      />
      {loadingConfig.loading ? <Loading /> : null}

      <div>
        <div className={classes.layout}>
          <div className="">
            {/* {window.innerWidth <= 976 && ( */}
            <div
              onClick={() => setShowNavigation(false)}
              className={
                showNavigation ? classes.backdropActive : classes.backdrop
              }
            ></div>

            <div
              className={
                showNavigation
                  ? `${classes.sideNavigationWrapper} ${classes.active}`
                  : classes.sideNavigationWrapper
              }
            >
              <SideNavigation
                setShowNavigation={setShowNavigation}
                showNavigation={showNavigation}
              />
            </div>
          </div>
          <div className={classes.contentArea}>
            <div className={classes.navigationIcon}>
              <span
                onClick={() => setShowNavigation(true)}
                className={classes.SideNavigationIcon}
              >
                <i className="ri-menu-fold-line"></i>
              </span>
            </div>
            {children}
          </div>
        </div>
        {globalLoading ? (
          <div className="absolute z-50 bg-light_white w-full h-full flex justify-center items-center  top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
            <RingLoader color="#11BDE0" loading={true} size={150} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Layout;
