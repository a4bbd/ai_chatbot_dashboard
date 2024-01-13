import React from 'react';

const Deliverypointsform = () => {
    return (
        <div>
            <h1 style={{ color: "#212B36" }} className="font-bold text-lg">This is Delivery Points Form</h1>
            <div className='bg-white mt-3 p-2 rounded'>

            <div className=' w-full mt-5 '>
          <div className=''>
            <label className='block'>Point name * </label>
            <input className='mt-2 w-full focus:border-orange-400 pt-3 pl-3 outline-none rounded pb-3  border border-slate-300' type='text'/>
            </div>
            <div class="w-full mt-5">
            <div className="form-group w-full">
              <label>Point Details *</label>
              <textarea name="description" 
                 className="block mt-2 h-24 focus:border-orange-500 rounded p-3  w-full border outline-none  form-control"></textarea>
            </div>
          </div>
          <div className="form-group mt-2">
                  <label className="relative mt-3 inline-flex items-center cursor-pointer">
                   <input 
                name='taxable' type="checkbox" class="sr-only peer" />
                   <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                   <span class="ms-3 text-sm font-medium ">Active</span>
                 </label>
                </div>
          </div> 
          <div className="mt-10">
									<button href="#" type="submit" className="bg-orange-500 hover:bg-orange-600 text-white rounded pt-3 pb-3 w-28 inline-block text-center me-2">Submit</button>
									<a href="#" className="text-white hover:bg-slate-800  bg-slate-700 pt-3 pb-3 rounded w-28 inline-block text-center">Cancel</a>
		 </div>

            </div>
        </div>
    );
};

export default Deliverypointsform;