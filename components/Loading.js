import React,{useState  } from 'react';
import BarLoader from 'react-bar-loader'


const Loading = () => {
   
        return (
                <div className="absolute z-50 w-full left-0 top-[65px]">
                      <BarLoader color="#1D8BF1" height="2" />
                </div>
        );
}

export default Loading;
