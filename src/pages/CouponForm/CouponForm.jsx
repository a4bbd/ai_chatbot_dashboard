import React from 'react';
import "./CouponForm.css"
const CouponForm = () => {
    return (
       <>
        <div className='ml-7'><h1 className='text-xl font-bold' >Coupon Form</h1>
       <p className='text-base tracking-wide opacity-75'>Create a Coupon Form</p></div>
        <div className='mt-5 pl-8 pr-8'>
        <div className='grid w-full grid-cols-2 gap-7'>
          <div className=''>
            <label className='block'>Store *</label>
            <input className='mt-2 w-full focus:border-orange-400 pt-3 pl-3 outline-none rounded pb-3  border border-slate-300' type='text'/>
            </div>
            <div>
            <label className='block'>Product</label>
            <input className='mt-2 pt-3 pl-3 w-full focus:border-orange-400 outline-none rounded pb-3 border border-slate-300' type='text'/>
            </div>
          </div>  
          <div className='flex  justify-between mt-5'>

          <div class="form-group">
                  <label className='block' for="stock_display"> Coupon type *</label>
                  
                   <label className="relative mt-3 inline-flex items-center cursor-pointer">
                   <input name='display_stock' type="checkbox"  class="sr-only peer" />
                   <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                   <span className="ms-3 text-sm font-medium">Percent</span>
                 </label>

                </div>
          <div class="form-group">
                  <label className='block' for="stock_display">. </label>
                  
                   <label className="relative mt-3 inline-flex items-center cursor-pointer">
                   <input name='display_stock' type="checkbox"  class="sr-only peer" />
                   <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                   <span className="ms-3 text-sm font-medium">Fixed Price</span>
                 </label>

                </div>
          <div class="form-group">
                  <label className='block' for="stock_display">.</label>
                  
                   <label className="relative mt-3 inline-flex items-center cursor-pointer">
                   <input name='display_stock' type="checkbox"  class="sr-only peer" />
                   <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                   <span className="ms-3 text-sm font-medium">Fixed Product</span>
                 </label>

                </div>
          <div class="form-group">
                  {/* <label className='block' for="stock_display"> Display stock *</label>
                  
                   <label className="relative mt-3 inline-flex items-center cursor-pointer">
                   <input name='display_stock' type="checkbox"  class="sr-only peer" />
                   <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                   <span className="ms-3 text-sm font-medium">Yes</span>
                 </label> */}

                </div>
            </div>
            <div className='grid w-full grid-cols-2 mt-5 gap-7'>
          <div className=''>
            <label className='block'>Coupon code *</label>
            <input className='mt-2 w-full focus:border-orange-400 pt-3 pl-3 outline-none rounded pb-3  border border-slate-300' type='text'/>
            </div>
            <div>
            <label className='block'>Coupon amount *</label>
            <input className='mt-2 pt-3 pl-3 w-full focus:border-orange-400 outline-none rounded pb-3 border border-slate-300' type='text'/>
            </div>
          </div> 
            <div className='grid w-full grid-cols-2 mt-5 gap-7'>
          <div className=''>
            <label className='block'>Expiry date *</label>
            <input className='mt-2 w-full focus:border-orange-400 pt-3 pl-3 outline-none rounded pb-3  border border-slate-300' type='text'/>
            </div>
            <div>
            <label className='block'>Max usage limit</label>
            <input className='mt-2 pt-3 pl-3 w-full focus:border-orange-400 outline-none rounded pb-3 border border-slate-300' type='number'/>
            </div>
          </div> 
          
            
                <div className='flex justify-between mt-5'>
                      
                <div class="form-group">
                  <label className='block' for="stock_display"> Status *</label>
                  
                   <label className="relative mt-3 inline-flex items-center cursor-pointer">
                   <input name='display_stock' type="checkbox"  class="sr-only peer" />
                   <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                   <span className="ms-3 text-sm font-medium">Yes</span>
                 </label>

                </div>
                <div class="form-group">
                  <label className='block' for="stock_display"> Free shipping?</label>
                  
                   <label className="relative mt-3 inline-flex items-center cursor-pointer">
                   <input name='display_stock' type="checkbox"  class="sr-only peer" />
                   <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                   <span className="ms-3 text-sm font-medium">Yes</span>
                 </label>

                </div>
                <div class="form-group">
                  {/* <label className='block' for="stock_display"> Display stock *</label>
                  
                   <label className="relative mt-3 inline-flex items-center cursor-pointer">
                   <input name='display_stock' type="checkbox"  class="sr-only peer" />
                   <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                   <span className="ms-3 text-sm font-medium">Yes</span>
                 </label> */}

                </div>



                </div>



          
        </div>
        <div className="ml-7 gap-4 mt-10">
									<button href="#" type="submit" className="bg-orange-500 hover:bg-orange-600 text-white rounded pt-3 pb-3 w-28 inline-block text-center me-2">Submit</button>
									<a href="#" className="text-white hover:bg-slate-800  bg-slate-700 pt-3 pb-3 rounded w-28 inline-block text-center">Cancel</a>
		 </div>
        </>
    );
};

export default CouponForm;