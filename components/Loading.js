import React,{useState  } from 'react';
import BarLoader from 'react-bar-loader'


const Loading = () => {
   
        return (
                <div className="absolute z-50 w-full left-0 top-[67px]">
                      <BarLoader color="#5CC672" height="3" />
                </div>
        );
}

export default Loading;
