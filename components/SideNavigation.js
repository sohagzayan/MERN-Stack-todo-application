import React from "react";
import { CgMenuGridO, CgMenuMotion } from "react-icons/cg";
import { MdCreate, MdCancelPresentation } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { BsPatchCheck } from "react-icons/bs";
import classes from "../styles/SideNavigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const SideNavigation = ({ showNavigation, setShowNavigation }) => {
  const router = useRouter();
  const closeNavigationPerClick = () => {
    setShowNavigation(false);
  };
  return (
    <div className="  bg-red-300">
      <div className="p-2">
        <div className={classes.navigation}>
          {/* <li className={classes.iconWrapper}>
            <span
              onClick={closeNavigationPerClick}
              className={classes.SideNavigationIcon}
            >
              <i className="ri-close-line"></i>
            </span>
          </li> */}
          <Link href="/">
            <li
              onClick={closeNavigationPerClick}
              className={
                router.pathname == "/"
                  ? "cursor-pointer bg-[#d1d1d165] hover:bg-[#d1d1d165] px-4 py-2 rounded-xl font-bold mb-4 block"
                  : "cursor-pointer hover:bg-[#d1d1d165] px-4 py-2 rounded-xl font-bold mb-4 block"
              }
            >
              <div className="flex items-center  ">
                <CgMenuGridO className="pr-3 text-3xl" />
                <h5>Dashboard</h5>
              </div>
            </li>
          </Link>
          <Link href="/createNew">
            <li
              onClick={closeNavigationPerClick}
              className={
                router.pathname == "/createNew"
                  ? "cursor-pointer bg-[#d1d1d165] hover:bg-[#d1d1d165] px-4 py-2 rounded-xl font-bold mb-4 block"
                  : "cursor-pointer hover:bg-[#d1d1d165] px-4 py-2 rounded-xl font-bold mb-4 block"
              }
            >
              <div className="flex items-center  ">
                <MdCreate className="pr-3 text-3xl " />
                <h5>Create New</h5>
              </div>
            </li>
          </Link>

          <Link href="/newTask">
            <li
              onClick={closeNavigationPerClick}
              className={
                router.pathname == "/newTask"
                  ? "cursor-pointer bg-[#d1d1d165] hover:bg-[#d1d1d165] px-4 py-2 rounded-xl font-bold mb-4 block"
                  : "cursor-pointer hover:bg-[#d1d1d165] px-4 py-2 rounded-xl font-bold mb-4 block"
              }
            >
              <div className="flex items-center  ">
                <CgMenuMotion className="pr-3 text-3xl" />
                <h5>New Task</h5>
              </div>
            </li>
          </Link>

          <Link href="/inProgress">
            <li
              onClick={closeNavigationPerClick}
              className={
                router.pathname == "/inProgress"
                  ? "cursor-pointer bg-[#d1d1d165] hover:bg-[#d1d1d165] px-4 py-2 rounded-xl font-bold mb-4 block"
                  : "cursor-pointer hover:bg-[#d1d1d165] px-4 py-2 rounded-xl font-bold mb-4 block"
              }
            >
              <div className="flex items-center ">
                <GrInProgress className="pr-3 text-3xl" />
                <h5>In Progress</h5>
              </div>
            </li>
          </Link>
          <Link href="/complete">
            <li
              onClick={closeNavigationPerClick}
              className={
                router.pathname == "/complete"
                  ? "cursor-pointer bg-[#d1d1d165] hover:bg-[#d1d1d165] px-4 py-2 rounded-xl font-bold mb-4 block"
                  : "cursor-pointer hover:bg-[#d1d1d165] px-4 py-2 rounded-xl font-bold mb-4 block"
              }
            >
              <div className="flex items-center  ">
                <BsPatchCheck className="pr-3 text-3xl" />
                <h5>Complete</h5>
              </div>
            </li>
          </Link>

          <Link href="/canceled">
            <li
              onClick={closeNavigationPerClick}
              className={
                router.pathname == "/canceled"
                  ? "cursor-pointer bg-[#d1d1d165] hover:bg-[#d1d1d165] px-4 py-2 rounded-xl font-bold mb-4 block"
                  : "cursor-pointer hover:bg-[#d1d1d165] px-4 py-2 rounded-xl font-bold mb-4 block"
              }
            >
              <div className="flex items-center  ">
                <MdCancelPresentation className="pr-3 text-3xl" />
                <h5>Canceled</h5>
              </div>
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
