import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStore
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div className='p-5'> 
        <div className='flex   items-center gap-4'>
        <div className='flex items-center'>
        <FontAwesomeIcon className='text-3xl' icon={faStore} style={{color: "#3295d2",}} />
         <h1 className='text-3xl'>Ecommerce Store</h1>
        </div>
         <button className='bg-blue-500 text-white px-5 py-2  rounded'>Create Store</button>
        </div>
        {/* <div className='w-full h-11 mt-5 rounded bg-slate-500'>
               
        </div> */}
        </div>
    );
};

export default Header;