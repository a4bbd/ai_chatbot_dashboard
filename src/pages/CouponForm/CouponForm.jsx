import React from 'react';
import "./CouponForm.css"
const CouponForm = () => {
    return (
        <div className='mt-5'>
        <div className='grid w-full grid-cols-2 gap-2'>
          <div className=''>
            <label className='block'>Store</label>
            <input className='mt-2 w-full focus:border-orange-400 pt-3 pl-3 outline-none rounded pb-3  border border-slate-300' type='text'/>
            </div>
            <div>
            <label className='block'>Product</label>
            <input className='mt-2 pt-3 pl-3 w-full focus:border-orange-400 outline-none rounded pb-3 border border-slate-300' type='text'/>
            </div>
            
           
          </div>  
        </div>
    );
};

export default CouponForm;