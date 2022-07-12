import React from "react";
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import Link from 'next/link'
const Header = ({showNavigation , setShowNavigation}) => {
  return (
    <div className="bg-light_white shadow-md sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="flex-1">
           <AiOutlineMenuUnfold onClick={()=> setShowNavigation(!showNavigation)} className="text-blue_dark text-2xl mr-6 cursor-pointer"  />  
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 "
            fill="#C90D9B"
            viewBox="0 0 24 24"
            stroke="#fff"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
          <a className="  text-xl text-blue_dark font-extrabold">Task Manager</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
              <li>
              <Link href="/signup">
                    <a>Sign Up</a>
              </Link>
              </li>
              <li>     
              <Link href="/login">
                    <a>Login</a>
              </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
