import React from 'react';
import Header from '../components/Header';
import Link from 'next/link'
const Signup = () => {
        return (
                <>
                <Header />
                        <div>
                           <div className="bg-light_white shadow-md md:w-[50%] w-[90%] mx-auto mt-16 p-8 rounded-md text-center">
                           <form className="flex flex-col items-center justify-center">
                                <h2 className="font-bold mb-3 text-xl">Sign Up</h2>
                                <input type="email" placeholder="User Email" class="input input-bordered w-full mb-3" />
                                <input type="text" placeholder="Fast Name" class="input input-bordered w-full mb-3" />
                                <input type="text" placeholder="Last Name" class="input input-bordered w-full mb-3" />
                                <input type="number" placeholder="Mobile" class="input input-bordered w-full mb-3" />
                                <input type="password" placeholder="User Password" class="input input-bordered w-full mb-3" />
                                <button className="btn bg-dark_purple border-none w-full mb-4 ">Next</button>
                            </form>
                            <span className="block font-bold text-xl">
                            <Link href="/login">Login</Link>
                            </span>
                            <span className="">Forget Password</span>
                           </div>
                        </div>
                </>
        );
}

export default Signup;
