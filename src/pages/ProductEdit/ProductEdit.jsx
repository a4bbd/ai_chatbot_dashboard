import React from 'react';
import upload from "../../assets/upload.svg";
import {
    Dropdown,
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Dropdown, Ripple });


const ProductEdit = () => {
      
    return (
        <div>
            <div class="page-title">
							<h4 className='font-bold text-lg'>Product Edit</h4>
							<h6 style={{color:"555"}} className='text-sm	font-normal	tracking-wide'>Update your product</h6>
			</div>
            <form >
        <div className='mt-5'>
        
          <div className='grid  grid-cols-4 gap-3'>
          <div>
            <label className='block'>Product  Name</label>
            <input type="text" placeholder='Apple'
                 name='productName' className='mt-2 focus:border-orange-400 pt-3 pl-3 outline-none rounded pb-3 w-72 border border-slate-300' type='text'/>
            </div>
            <div>
            <label className='block'>Orginal Price</label>
            <input type="text" placeholder="$" name='orginalPrice' className='mt-2 pt-3 pl-3 focus:border-orange-400 outline-none rounded pb-3 w-72 border border-slate-300' />
            </div>
            <div>
            <label className='block'>Sell Price</label>
            <input type="number" name='sellPrice' placeholder="$" className='mt-2 pt-3 pl-3 focus:border-orange-400 outline-none rounded pb-3 w-72 border border-slate-300' />
            </div>
            <div>
                <label className='block'>Attributes</label>
                <input type="text"  name='attributes' className='mt-2 pt-3 pl-3 focus:border-orange-400 outline-none rounded pb-3 w-72 border border-slate-300'  />
            </div>
          </div>
          <div className='mt-5 grid w-full grid-cols-4'>
{/* DropDown Button */}





          <div>
                <label className='block'>Category</label>
                <div  class="relative" data-te-dropdown-ref>
  <button style={{marginTop: "8px",paddingTop : "14px",paddingBottom : "14px" }}
    className="flex items-center whitespace-nowrap rounded w-72 bg-primary px-6 pb-2  pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
    type="button"
    id="dropdownMenuButton1"
    data-te-dropdown-toggle-ref
    aria-expanded="false"
    data-te-ripple-init
    data-te-ripple-color="light">
    Category
    <span className="ml-40  w-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
  </button>
  <ul
    class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
    aria-labelledby="dropdownMenuButton1"
    data-te-dropdown-menu-ref>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
        href="#"
        data-te-dropdown-item-ref
        >Action</a
      >
    </li>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
        href="#"
        data-te-dropdown-item-ref
        >Another action</a
      >
    </li>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
        href="#"
        data-te-dropdown-item-ref
        >Something else here</a
      >
    </li>
  </ul>
</div>            </div>
            <div className='col-start-2 col-end-4'>
                <label className='block'>Product Video</label>
                <input name='productVideo' className=' w-full mt-2 pt-3 pl-3 focus:border-orange-400 outline-none rounded pb-3  border border-slate-300' placeholder='Please enter your youtube video link' />
            </div>
            
          </div>

          <div class="w-full mt-5">
            <div className="form-group w-full">
              <label>Description</label>
              <textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'  type="text" name='description' className="block mt-2 h-24 focus:border-orange-500 rounded p-3  w-full border outline-none border-slate-300 form-control"></textarea>
            </div>
          </div>
          <div class="w-full mt-5">
            <div className="form-group w-full">
              <label>Purchase Note</label>
              <textarea type="text" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'  name='purchaseNote' className="block mt-2 h-24 focus:border-orange-500 rounded p-3  w-full border outline-none border-slate-300  form-control"></textarea>
            </div>
          </div>

          <div className='flex mt-5 gap-3'>
                <div className='w-full'>
                    <label className='block'>Thmbnail</label>
                    <div className="border-orange-400 border border-dashed  hover:bg-slate-100 mt-2 h-24  rounded ">
              <label className="cursor-pointer" for="files" class="btn">

                <div className="image-uploads h-full w-full max-auto ">
                  <img  className="text-center mt-2 ml-[290px]" src={upload} alt="img" />
                  <h4 className="ml-[14rem] max-auto">Drag and drop a file to upload</h4>
                </div>

              </label>
              <input  type="file" name="thmbnail" id="files" className="" style={{ visibility: "hidden" }}  />
            </div>

                </div>
                <div className='w-full'>
                    <label className='block'>Featured Images</label>
                    <div className="border border-orange-400 border-dashed  hover:bg-slate-100 mt-2 h-24 rounded ">
              <label className="cursor-pointer" for="files" class="btn">

                <div className="image-uploads h-full w-full max-auto ">
                  <img className="text-center mt-2 ml-[290px]" src={upload} alt="img" />
                  <h4 className="ml-[14rem] max-auto">Drag and drop a file to upload</h4>
                </div>

              </label>
              <input  type="file" name='featuredImages' id="files" className="" style={{ visibility: "hidden" }}  />
            </div>

                </div>
          </div>

             
             

             <div class="flex mt-7 justify-between gap-2 w-full">             
              <div className="">
                <div className="form-group ">
                                    <label className='block' for="status"> Item in stock *</label>
                                    <input className='mt-2 focus:border-orange-400 pt-3 border-slate-300 pl-3 outline-none rounded pb-3 w-72 border' type='number'/>

                </div>
              </div>
              <div class="col-6 col-md-4">
                <div class="form-group">
                  <label className='block' for="stock_display"> Display stock *</label>
                  
                   <label className="relative mt-3 inline-flex items-center cursor-pointer">
                   <input name='display_stock' type="checkbox"  class="sr-only peer" />
                   <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                   <span className="ms-3 text-sm font-medium">Yes</span>
                 </label>

                </div>
              </div>
              <div class="form-group">
                  <label className='block' for="status"> Status *</label>
                  <label className="relative mt-3 inline-flex items-center cursor-pointer">
                   <input  name='status' type="checkbox"  class="sr-only peer" />
                   <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                   <span className="ms-3 text-sm font-medium">Online</span>
                 </label>
                </div>
                <div class="form-group">
                  <label className='block' for="taxable"> Taxable *</label>
                  <label className="relative mt-3 inline-flex items-center cursor-pointer">
                   <input  name='taxable' type="checkbox" class="sr-only peer" />
                   <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                   <span class="ms-3 text-sm font-medium ">Yes</span>
                 </label>
                </div>
              <div class="col-6 col-md-4">
                <div class="form-group">
                  <label className='block' for="stock_prevent_purchase"> Prevent purchase if out of stock *</label>

                  <label className="relative mt-3 inline-flex items-center cursor-pointer">
                   <input  name='prevent_purchase' type="checkbox"  class="sr-only peer" />
                   <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                   <span className="ms-3 text-sm font-medium">Yes</span>
                 </label>
                </div>
              </div>
              

            </div>

            <div className="mt-10 gap-2">
									<button type='submit' href="#" className="bg-orange-500 hover:bg-orange-600 text-white rounded pt-3 pb-3 w-28 inline-block text-center me-2">Submit</button>
									<button type='button' href="#" className="text-white hover:bg-slate-800  bg-slate-700 pt-3 pb-3 rounded w-28 inline-block text-center">Cancel</button>
		 </div>

            

        </div>
        </form>
        </div>
    );
};

export default ProductEdit;