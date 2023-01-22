import React from 'react';
import { BallTriangle } from  'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const RegisterLoading = () => {
    return (
        <div className='bg-[#0000008c] z-50  w-full h-[100vh] flex-col flex justify-center fixed  top-0 left-0 items-center'>
               <BallTriangle

                  height="150"
                  width="150"
                  color='#FF5733'
                  ariaLabel='loading'
                />
                <h2 className="text-2xl text-[#fff] font-bold  mt-5">Loading. ....</h2>
        </div>
    );
}

export default RegisterLoading;
