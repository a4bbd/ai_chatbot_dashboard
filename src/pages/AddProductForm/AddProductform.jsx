import React from 'react';
import upload from "../../assets/upload.svg";
import { useFormik } from 'formik';

const initialValues ={
prevent_purchase:"",
taxable:"",
status:"",
display_stock:"",
featuredImages:"",
thmbnail:"",
purchaseNote:"",
description:"",
productVideo:"",
attributes:"",
sellPrice:"",
orginalPrice:"",
productName:"",


}

const AddProductform = () => {
  const {values,errors,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues : initialValues,
    onSubmit : (values)=>{
        console.log(values)
    }
  });   


    return (
      <form onSubmit={handleSubmit}>
        <div className='mt-5'>
        
          <div className='grid  grid-cols-4 gap-3'>
          <div>
            <label className='block'>Product  Name</label>
            <input type="text" value={values.productName}
                onChange={handleChange}
                onBlur={handleBlur} name='productName' className='mt-2 focus:border-orange-400 pt-3 pl-3 outline-none rounded pb-3 w-72 border border-slate-300' type='text'/>
            </div>
            <div>
            <label className='block'>Orginal Price</label>
            <input type="text" value={values.orginalPrice}
                onChange={handleChange}
                onBlur={handleBlur} name='orginalPrice' className='mt-2 pt-3 pl-3 focus:border-orange-400 outline-none rounded pb-3 w-72 border border-slate-300' type='text'/>
            </div>
            <div>
            <label className='block'>Sell Price</label>
            <input type="number" value={values.sellPrice}
                onChange={handleChange}
                onBlur={handleBlur} name='sellPrice' className='mt-2 pt-3 pl-3 focus:border-orange-400 outline-none rounded pb-3 w-72 border border-slate-300' type='text'/>
            </div>
            <div>
                <label className='block'>Attributes</label>
                <input type="text" value={values.attributes}
                onChange={handleChange}
                onBlur={handleBlur} name='attributes' className='mt-2 pt-3 pl-3 focus:border-orange-400 outline-none rounded pb-3 w-72 border border-slate-300' type='text' />
            </div>
          </div>
          <div className='mt-5 grid w-full grid-cols-4'>
          <div>
                <label className='block'>Category</label>
                <input  className='mt-2 pt-3 pl-3 focus:border-orange-400 outline-none rounded pb-3 w-72 border border-slate-300' />
            </div>
            <div className='col-start-2 col-end-4'>
                <label className='block'>Product Video</label>
                <input value={values.productVideo}
                onChange={handleChange}
                onBlur={handleBlur} name='productVideo' className=' w-full mt-2 pt-3 pl-3 focus:border-orange-400 outline-none rounded pb-3  border border-slate-300' placeholder='Please enter your youtube video link' />
            </div>
            
          </div>

          <div class="w-full mt-5">
            <div className="form-group w-full">
              <label>Description</label>
              <textarea value={values.description}
                onChange={handleChange}
                onBlur={handleBlur} type="text" name='description' className="block mt-2 h-24 focus:border-orange-500 rounded p-3  w-full border outline-none border-slate-300 form-control"></textarea>
            </div>
          </div>
          <div class="w-full mt-5">
            <div className="form-group w-full">
              <label>Purchase Note</label>
              <textarea type="text" value={values.purchaseNote}
                onChange={handleChange}
                onBlur={handleBlur} name='purchaseNote' className="block mt-2 h-24 focus:border-orange-500 rounded p-3  w-full border outline-none border-slate-300  form-control"></textarea>
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
              <input value={values.thmbnail}
                onChange={handleChange}
                onBlur={handleBlur} type="file" name="thmbnail" id="files" className="" style={{ visibility: "hidden" }} type="file" />
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
              <input value={values.featuredImages}
                onChange={handleChange}
                onBlur={handleBlur} type="file" name='featuredImages' id="files" className="" style={{ visibility: "hidden" }} type="file" />
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
                   <input value={values.display_stock}
                onChange={handleChange}
                onBlur={handleBlur} name='display_stock' type="checkbox"  class="sr-only peer" />
                   <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                   <span className="ms-3 text-sm font-medium">Yes</span>
                 </label>

                </div>
              </div>
              <div class="form-group">
                  <label className='block' for="status"> Status *</label>
                  <label className="relative mt-3 inline-flex items-center cursor-pointer">
                   <input value={values.status}
                onChange={handleChange}
                onBlur={handleBlur} name='status' type="checkbox"  class="sr-only peer" />
                   <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                   <span className="ms-3 text-sm font-medium">Online</span>
                 </label>
                </div>
                <div class="form-group">
                  <label className='block' for="taxable"> Taxable *</label>
                  <label className="relative mt-3 inline-flex items-center cursor-pointer">
                   <input value={values.taxable}
                onChange={handleChange}
                onBlur={handleBlur} name='taxable' type="checkbox" class="sr-only peer" />
                   <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                   <span class="ms-3 text-sm font-medium ">Yes</span>
                 </label>
                </div>
              <div class="col-6 col-md-4">
                <div class="form-group">
                  <label className='block' for="stock_prevent_purchase"> Prevent purchase if out of stock *</label>

                  <label className="relative mt-3 inline-flex items-center cursor-pointer">
                   <input value={values.prevent_purchase}
                onChange={handleChange}
                onBlur={handleBlur} name='prevent_purchase' type="checkbox"  class="sr-only peer" />
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
    );
};

export default AddProductform;