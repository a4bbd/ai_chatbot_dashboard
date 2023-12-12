import React from "react";
import upload from "../../assets/upload.svg";
const Categoriesform = () => {
  return (
    <div>
      <div class="page-header">
        <div class="page-title">
          <h4 className="font-bold text-lg">Product Add Category</h4>
          <h6 style={{ color: "#555" }} className="text-sm font-normal">
            Create new product Category
          </h6>
        </div>
      </div>

      <div className="bg-white rounded mt-4 border">
        <div className="p-6 w-full">
          <div className="flex gap-6 w-full">
            <div className="w-full">
              <label>Category Name</label>
              <input
                className=" mt-2 appearance-none focus:border-orange-500 h-11   border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none "
                type="text"
                placeholder="Category Name"
              />
            </div>

            <div className="w-full">
              <label>Category Code</label>
              <input
                class="  mt-2 appearance-none focus:border-orange-500 h-11   border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none "
                type="text"
                placeholder="Category Code"
              />
            </div>
          </div>

          <div class="w-full mt-5">
            <div className="form-group w-full">
              <label>Description</label>
              <textarea className="block mt-2 h-24 focus:border-orange-500 rounded p-3  w-full border outline-none  form-control"></textarea>
            </div>
          </div>
          <div className="w-full mt-5">
            
            {/* <div className=" relative image-upload">
                                          
											<input  type="file"  className=' border w-full h-24 p-5 rounded' />
											<div className="image-uploads absolute w-full max-auto top-3 left-[514px] ">
												<img src={upload} alt="img" />
												<h4>Drag and drop a file to upload</h4>
											</div>
				</div> */}
                <label>Product Image</label>
            <div className="border  hover:bg-slate-100 mt-2 h-24 rounded ">
              <label className="cursor-pointer" for="files" class="btn">

                <div className="image-uploads h-full w-full max-auto ">
                  <img className="text-center mt-2 ml-[550px]" src={upload} alt="img" />
                  <h4 className="ml-[30rem] max-auto">Drag and drop a file to upload</h4>
                </div>

              </label>
              <input id="files" className="" style={{ visibility: "hidden" }} type="file" />
            </div>

          </div>
         
          <div className="mt-10">
									<a href="#" className="bg-orange-500 hover:bg-orange-600 text-white rounded pt-3 pb-3 w-28 inline-block text-center me-2">Submit</a>
									<a href="#" className="text-white hover:bg-slate-800  bg-slate-700 pt-3 pb-3 rounded w-28 inline-block text-center">Cancel</a>
		 </div>
          
        </div>
      </div>
    </div>
  );
};

export default Categoriesform;
