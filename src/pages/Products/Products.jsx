import React, { useState } from 'react';
import "./products.css";
import search from "../../assets/search-white.svg";
import filter from "../../assets/filter.svg";
import category1 from "../../assets/category1.jpg";
import category2 from "../../assets/category2.jpg";
import category3 from "../../assets/category3.jpg";
import category4 from "../../assets/category4.jpg";
import category6 from "../../assets/category6.jpg";
import remove from "../../assets/remove.svg";
import edit from "../../assets/edit.svg";
import eye from "../../assets/eye.svg";
import category7 from "../../assets/category7.jpg";
import category8 from "../../assets/category8.jpg";
import category9 from "../../assets/category9.jpg";
import category11 from "../../assets/category11.jpg";
import category5 from "../../assets/category1.jpg";
import {  } from 'react-router-dom';
import AddProductform from '../AddProductForm/AddProductform';



const Products = () => {
	const [addproduct,setAddproduct] = useState(false);
    return (
        <div className='scrollbar'>
            <div className="page-title w-full">
							<h4 className='font-bold text-lg leading-relaxed'>Product List</h4>
							<h6 className='text-sm font-normal'>Manage your products</h6>
			</div>

            <div className='mt-4 border bg-white rounded p-4'>

              <div className='  '>
			  <div className="flex justify-between  mt-2" style={{transform: "translate(0px, 0px)"}}>

			 <div className='flex gap-6'> 
			 <div  data-node-key="categories" className=" ant-tabs-tab">
			  <div role="tab" aria-selected="false" className="text-indigo-500  cursor-pointer ant-tabs-tab-btn" tabindex="0" id="rc-tabs-0-tab-categories" aria-controls="rc-tabs-0-panel-categories">Items</div>
			           <div className='border-b-2 translate-y-3 border-indigo-500'></div>
			  </div>

			  <div  data-node-key="categories" className=" ant-tabs-tab">

			  <div onClick={()=>setAddproduct(!addproduct)} role="tab" aria-selected="false" className="hover:text-indigo-500 transition duration-400 cursor-pointer  ant-tabs-tab-btn" tabindex="0" id="rc-tabs-0-tab-categories" aria-controls="rc-tabs-0-panel-categories">Add Products</div>
			           <div className=''></div>
			  </div>


			  <div  data-node-key="categories" className=" ant-tabs-tab">
			  <div role="tab" aria-selected="false" className="hover:text-indigo-500 transition duration-400 cursor-pointer ant-tabs-tab-btn" tabindex="0" id="rc-tabs-0-tab-categories" aria-controls="rc-tabs-0-panel-categories">Add ons</div>
			           <div className=''></div>
			  </div>

			  <div  data-node-key="categories" className=" ant-tabs-tab">
			  <div role="tab" aria-selected="false" className="hover:text-indigo-500 transition duration-400 cursor-pointer ant-tabs-tab-btn" tabindex="0" id="rc-tabs-0-tab-categories" aria-controls="rc-tabs-0-panel-categories">Variations</div>
			           <div className=''></div>
			  </div>
			  </div>
			  {/* <div className="border " style={{left: "0px", width: "39px"}}></div> */}

			  <div className="flex gap-2">
									<div class="search-path">
										<a class="btn btn-filter" id="filter_search">
											<img style={{background:"#FF9F43"}} className='' src={filter} alt="img" />
											

											{/* <span><img src="assets/img/icons/closes.svg" alt="img" /></span> */}
										</a>
									</div>
									<div className="flex  relative">
										<a className="absolute mr-4 top-1 left-1 btn btn-searchset">
										<img src={search} alt="img" />
										
										</a>
									<div id="DataTables_Table_0_filter" className=""><label> 
									<input type="search" className="pl-6 border rounded outline-none" placeholder="Search..." aria-controls="DataTables_Table_0" />
									</label></div></div>
								</div>
			  </div>
			  <div className='mt-3 border-b'></div>

			    {/* <div className='pl-4 bg-slate-400 pr-4 mt-3 pt-2 pb-2'>
                       <div className='flex justify-between'>
					   <div className='flex gap-4' >
					   <div  flexflow="column" margin="0 1rem 0 0" class="sc-bqOBKd vOcus">
					   <div class="ant-typography sc-jIQHsi jVySKJ css-w3w8ue" level="3" font-weight="600">Items</div>
					   <div class=""></div><div class="ant-typography sc-bjEwCx gHuhcq css-w3w8ue">Your item cards</div></div>

					   <a href="#" className=" text-lg bg-blue-600 hover:bg-orange-600 text-white rounded pt-3 pb-3 w-28 inline-block text-center me-2">Create Item</a>

					   <button type="button" className="a"><span>Import items</span></button></div> 

					  


					   <span class=""><input placeholder="Search item" className="border ant-input ant-input-lg css-w3w8ue" type="text" value="" /><span class="ant-input-group-addon"><button type="button" class="ant-btn css-w3w8ue ant-btn-primary ant-btn-lg ant-input-search-button"><span class="ant-btn-icon"><span role="img" aria-label="search" class="anticon anticon-search"><svg viewBox="64 64 896 896" focusable="false" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg></span></span></button></span></span>
					   </div>
					   
				</div> */}
			  
			  </div>

			  {addproduct ? <AddProductform /> :


              
			  <> <table className="table ">
                <tr>
          <th className='check'>
            <input type="checkbox" />
          </th>
          <th> Product Name</th>
          <th>SKU</th>
          <th>Category</th>
          <th>Brand</th>
          <th>price</th>
          <th>Unit</th>
          <th>Qty</th>
		  <th>Created By</th>
		  <th>Action</th>
        </tr>
        <tbody>
          <tr className='transition duration-400'>
            <td>
              <input type="checkbox" />
            </td>
            <td className="flex gap-2">
												<a href="javascript:void(0);" class="">
													<img src={category1} alt="product" />
												</a>
												<a href="javascript:void(0);">Macbook pro</a>
											</td>
											<td>PT001</td>
											<td>Computers</td>
											<td>N/D</td>
											<td>1500.00</td>
											<td>pc</td>
											<td>100.00</td>
											<td>Admin</td>
											<td className='flex '>
												<a class="me-3" href="product-details.html">
													<img src={eye} alt="img" />
												</a>
												<a class="me-3" href="editproduct.html">
													<img src={edit} alt="img" />
												</a>
												<a class="confirm-text" href="javascript:void(0);">
													<img src={remove} alt="img" />
												</a>
											</td>
         </tr>
         <tr className='transition duration-400'>
            <td>
              <input type="checkbox" />
            </td>
            <td className="flex gap-2">
												<a href="javascript:void(0);" class="product-img">
													<img src={category2} alt="product" />
												</a>
												<a href="javascript:void(0);">Pineapple</a>
											</td>
											<td>PT003</td>
											<td>Fruits</td>
											<td>N/D</td>
											<td>10.00</td>
											<td>pc</td>
											<td>100.00</td>
											<td>Admin</td>
											<td className='flex '>
												<a class="me-3" href="product-details.html">
													<img src={eye} alt="img" />
												</a>
												<a class="me-3" href="editproduct.html">
													<img src={edit} alt="img" />
												</a>
												<a class="confirm-text" href="javascript:void(0);">
													<img src={remove} alt="img" />
												</a>
											</td>
          </tr>
          <tr className='transition duration-400'>
            <td>
              <input type="checkbox" />
            </td>
			<td className="flex gap-2">
												<a href="javascript:void(0);" class="product-img">
													<img src={category3} alt="product" />
												</a>
												<a href="javascript:void(0);">Orange</a>
											</td>
											<td>PT002</td>
											<td>Fruits</td>
											<td>N/D</td>
											<td>10.00</td>
											<td>pc</td>
											<td>100.00</td>
											<td>Admin</td>
											<td className='flex '>
												<a class="me-3" href="product-details.html">
													<img src={eye} alt="img" />
												</a>
												<a class="me-3" href="editproduct.html">
													<img src={edit} alt="img" />
												</a>
												<a class="confirm-text" href="javascript:void(0);">
													<img src={remove} alt="img" />
												</a>
											</td>
           </tr>
           <tr className='transition duration-400'>
            <td>
              <input type="checkbox" />
            </td>
			<td className="flex gap-2">
												<a href="javascript:void(0);" class="product-img">
													<img src={category4} alt="product" />
												</a>
												<a href="javascript:void(0);">Macbook Pro</a>
											</td>
											<td>PT006</td>
											<td>Shoes</td>
											<td>N/D</td>
											<td>10.00</td>
											<td>pc</td>
											<td>100.00</td>
											<td>Admin</td>
											<td className='flex '>
												<a class="me-3" href="product-details.html">
													<img src={eye} alt="img" />
												</a>
												<a class="me-3" href="editproduct.html">
													<img src={edit} alt="img" />
												</a>
												<a class="confirm-text" href="javascript:void(0);">
													<img src={remove} alt="img" />
												</a>
											</td>
            </tr>
            <tr className='transition duration-400'>
            <td>
              <input type="checkbox" />
            </td>
            <td className="flex gap-2">
												<a href="javascript:void(0);" class="product-img">
													<img src={category5} alt="product" />
												</a>
												<a href="javascript:void(0);">iPhone 11	</a>
											</td>
											<td>PT008</td>
											<td>Fruits</td>
											<td>N/D</td>
											<td>10.00</td>
											<td>pc</td>
											<td>100.00</td>
											<td>Admin</td>
											<td className='flex '>
												<a class="me-3" href="product-details.html">
													<img src={eye} alt="img" />
												</a>
												<a class="me-3" href="editproduct.html">
													<img src={edit} alt="img" />
												</a>
												<a class="confirm-text" href="javascript:void(0);">
													<img src={remove} alt="img" />
												</a>
											</td>
           </tr>
           <tr className='transition duration-400'>
            <td>
              <input type="checkbox" />
            </td>
			<td className="flex gap-2">
												<a href="javascript:void(0);" class="product-img">
													<img src={category6} alt="product" />
												</a>
												<a href="javascript:void(0);">samsung	</a>
											</td>
											<td>PT009</td>
											<td>Earphones</td>
											<td>N/D</td>
											<td>10.00</td>
											<td>pc</td>
											<td>100.00</td>
											<td>Admin</td>
											<td className='flex '>
												<a class="me-3" href="product-details.html">
													<img src={eye} alt="img" />
												</a>
												<a class="me-3" href="editproduct.html">
													<img src={edit} alt="img" />
												</a>
												<a class="confirm-text" href="javascript:void(0);">
													<img src={remove} alt="img" />
												</a>
											</td>
           </tr>
           <tr className='transition duration-400'>
            <td>
              <input type="checkbox" />
            </td>
            <td className="flex gap-2">
												<a  class="product-img">
													<img src={category7} alt="product" />
												</a>
												<a >Banana</a>
											</td>
											<td>PT0010</td>
											<td>Health Care	</td>
											<td>N/D</td>
											<td>10.00</td>
											<td>kg</td>
											<td>100.00</td>
											<td>Admin</td>
											<td className='flex '>
												<a class="me-3" href="product-details.html">
													<img src={eye} alt="img" />
												</a>
												<a class="me-3" href="editproduct.html">
													<img src={edit} alt="img" />
												</a>
												<a class="confirm-text" href="javascript:void(0);">
													<img src={remove} alt="img" />
												</a>
											</td>
        </tr> 
        <tr className='transition duration-400'>
            <td>
              <input type="checkbox" />
            </td>
            <td className="flex gap-2">
												<a href="javascript:void(0);" class="product-img">
													<img src={category8} alt="product" />
												</a>
												<a href="javascript:void(0);">Banana</a>
											</td>
											<td>PT0010</td>
											<td>Health Care	</td>
											<td>N/D</td>
											<td>10.00</td>
											<td>kg</td>
											<td>100.00</td>
											<td>Admin</td>
											<td className='flex '>
												<a class="me-3" href="product-details.html">
													<img src={eye} alt="img" />
												</a>
												<a class="me-3" href="editproduct.html">
													<img src={edit} alt="img" />
												</a>
												<a class="confirm-text" href="javascript:void(0);">
													<img src={remove} alt="img" />
												</a>
											</td>
           </tr>
           <tr className='transition duration-400'>
            <td>
              <input type="checkbox" />
            </td>
			<td className="flex gap-2">
												<a href="javascript:void(0);" class="product-img">
													<img src={category9} alt="product" />
												</a>
												<a href="javascript:void(0);">Banana</a>
											</td>
											<td>PT0010</td>
											<td>Health Care	</td>
											<td>N/D</td>
											<td>10.00</td>
											<td>kg</td>
											<td>100.00</td>
											<td>Admin</td>
											<td className='flex '>
												<a class="me-3" href="product-details.html">
													<img src={eye} alt="img" />
												</a>
												<a class="me-3" href="editproduct.html">
													<img src={edit} alt="img" />
												</a>
												<a class="confirm-text" href="javascript:void(0);">
													<img src={remove} alt="img" />
												</a>
											</td>
           </tr>
           <tr className='transition duration-400'>
            <td>
              <input type="checkbox" />
            </td>
            <td className="flex gap-2">
												<a href="javascript:void(0);" class="product-img">
													<img src={category11} alt="product" />
												</a>
												<a href="javascript:void(0);">Banana</a>
											</td>
											<td>PT0010</td>
											<td>Health Care	</td>
											<td>N/D</td>
											<td>10.00</td>
											<td>kg</td>
											<td>100.00</td>
											<td>Admin</td>
											<td className='flex '>
												<a class="me-3" href="product-details.html">
													<img src={eye} alt="img" />
												</a>
												<a class="me-3" href="editproduct.html">
													<img src={edit} alt="img" />
												</a>
												<a class="confirm-text" href="javascript:void(0);">
													<img src={remove} alt="img" />
												</a>
											</td>
           </tr>
        </tbody>
      </table>
	  <div className='mt-7 flex justify-between'>
	  <div className="flex dataTables_length" id="DataTables_Table_0_length">
	  <h1>Show per page :</h1>
	  <label className='border outline-none h-6  ml-2'><select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class="custom-select custom-select-sm form-control form-control-sm">
	  <option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label></div>
      
    <div className='flex gap-2'>
	  <div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">1 - 10 of 11 items </div>
	  <div className=" dataTables_paginate paging_numbers" id="DataTables_Table_0_paginate">
	  <ul className="flex gap-2 pagination">
	  <li style={{background: "#FF9F43"}} className=" rounded  paginate_button page-item active">
	  <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="0" tabindex="0" class="page-link">1</a></li>

	  <li  className="bg-slate-500 hover:bg-orange-400 rounded paginate_button page-item ">
	  <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="1" tabindex="0" class="page-link">2</a>
	  </li>
	  </ul>
	  </div>

	  </div>
	
	  </div>
	  <div className='mt-1 border-orange-400 border-2'></div></>}

              {/* <div class="table-responsive">
								<div id="DataTables_Table_0_wrapper" className="w-full dataTables_wrapper dt-bootstrap4 no-footer">
                                <table className="table w-full datanew dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
									<thead>
										<tr role="row">
										<th class="sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending" 
												style={{width:"49.0125px"}}>
												<label className="pr-8">
													<input type="checkbox" id="select-all" />
													<span class="checkmarks"></span>
												</label>
											</th>
											<th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Product Name: activate to sort column ascending" style={{width: "173.925px"}}>Product Name</th>
											<th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="SKU: activate to sort column ascending" style={{width: "52.475px"}}>SKU</th>
											<th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Category : activate to sort column ascending" style={{width: "52.475px"}}>Category</th>
											<th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Brand: activate to sort column ascending" style={{width: "62.675px"}}>Brand</th>
											<th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="price: activate to sort column ascending" style={{width: "56.2625px"}}>price</th>
											<th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Unit: activate to sort column ascending" style={{width: "47.3625px"}}>Unit</th>
											<th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Qty: activate to sort column ascending" style={{width: "45.2875px"}}>Qty</th>
											<th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Created By: activate to sort column ascending" style={{width: "105.05px"}}>Created By</th>
											<th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending" style={{width: "89.8875px"}}>Action</th></tr>
									</thead>
									<tbody>					
									<tr class="odd">
											<td className="">
												<label >
													<input  type="checkbox" />
													<span class="checkmarks"></span>
												</label>
											</td>
											<td className="flex gap-2">
												<a href="javascript:void(0);" class="product-img">
													<img src={category1} alt="product" />
												</a>
												<a href="javascript:void(0);">Macbook pro</a>
											</td>
											<td>PT001</td>
											<td>Computers</td>
											<td>N/D</td>
											<td>1500.00</td>
											<td>pc</td>
											<td>100.00</td>
											<td>Admin</td>
											<td className='flex '>
												<a class="me-3" href="product-details.html">
													<img src="assets/img/icons/eye.svg" alt="img" />
												</a>
												<a class="me-3" href="editproduct.html">
													<img src="assets/img/icons/edit.svg" alt="img" />
												</a>
												<a class="confirm-text" href="javascript:void(0);">
													<img src="assets/img/icons/delete.svg" alt="img" />
												</a>
											</td>
										</tr>
										<tr class="even">
											<td class="sorting_1">
												<label class="checkboxs">
													<input type="checkbox" />
													<span class="checkmarks"></span>
												</label>
											</td>
											<td className="flex gap-2">
												<a href="javascript:void(0);" class="product-img">
													<img src="assets/img/product/product2.jpg" alt="product" />
												</a>
												<a href="javascript:void(0);">Orange</a>
											</td>
											<td>PT002</td>
											<td>Fruits</td>
											<td>N/D</td>
											<td>10.00</td>
											<td>pc</td>
											<td>100.00</td>
											<td>Admin</td>
											<td className='flex '>
												<a class="me-3" href="product-details.html">
													<img src="assets/img/icons/eye.svg" alt="img" />
												</a>
												<a class="me-3" href="editproduct.html">
													<img src="assets/img/icons/edit.svg" alt="img" />
												</a>
												<a class="confirm-text" href="javascript:void(0);">
													<img src="assets/img/icons/delete.svg" alt="img" />
												</a>
											</td>
										</tr>
										<tr class="odd">
											<td class="sorting_1">
												<label class="checkboxs">
													<input type="checkbox" />
													<span class="checkmarks"></span>
												</label>
											</td>
											<td className="flex gap-2">
												<a href="javascript:void(0);" class="product-img">
													<img src="assets/img/product/product3.jpg" alt="product" />
												</a>
												<a href="javascript:void(0);">Pineapple</a>
											</td>
											<td>PT003</td>
											<td>Fruits</td>
											<td>N/D</td>
											<td>10.00</td>
											<td>pc</td>
											<td>100.00</td>
											<td>Admin</td>
											<td className='flex '>
												<a class="me-3" href="product-details.html">
													<img src="assets/img/icons/eye.svg" alt="img" />
												</a>
												<a class="me-3" href="editproduct.html">
													<img src="assets/img/icons/edit.svg" alt="img" />
												</a>
												<a class="confirm-text" href="javascript:void(0);">
													<img src="assets/img/icons/delete.svg" alt="img" />
												</a>
											</td>
										</tr>
										<tr class="even">
											<td class="sorting_1">
												<label class="checkboxs">
													<input type="checkbox" />
													<span class="checkmarks"></span>
												</label>
											</td>
											<td className="flex gap-2">
												<a href="javascript:void(0);" class="product-img">
													<img src="assets/img/product/product4.jpg" alt="product" />
												</a>
												<a href="javascript:void(0);">Strawberry</a>
											</td>
											<td>PT004</td>
											<td>Fruits</td>
											<td>N/D</td>
											<td>10.00</td>
											<td>pc</td>
											<td>100.00</td>
											<td>Admin</td>
											<td className='flex '>
												<a class="me-3" href="product-details.html">
													<img src="assets/img/icons/eye.svg" alt="img" />
												</a>
												<a class="me-3" href="editproduct.html">
													<img src="assets/img/icons/edit.svg" alt="img" />
												</a>
												<a class="confirm-text" href="javascript:void(0);">
													<img src="assets/img/icons/delete.svg" alt="img" />
												</a>
											</td>
										</tr>
										<tr class="odd">
											<td class="sorting_1">
												<label class="checkboxs">
													<input type="checkbox" />
													<span class="checkmarks"></span>
												</label>
											</td>
											<td className="flex gap-2">
												<a href="javascript:void(0);" class="product-img">
													<img src="assets/img/product/product5.jpg" alt="product" />
												</a>
												<a href="javascript:void(0);">Avocat</a>
											</td>
											<td>PT005</td>
											<td>Accessories</td>
											<td>N/D</td>
											<td>10.00</td>
											<td>pc</td>
											<td>150.00</td>
											<td>Admin</td>
											<td className='flex '>
												<a class="me-3" href="product-details.html">
													<img src="assets/img/icons/eye.svg" alt="img" />
												</a>
												<a class="me-3" href="editproduct.html">
													<img src="assets/img/icons/edit.svg" alt="img" />
												</a>
												<a class="confirm-text" href="javascript:void(0);">
													<img src="assets/img/icons/delete.svg" alt="img" />
												</a>
											</td>
										</tr>
										<tr class="even">
											<td class="sorting_1">
												<label class="checkboxs">
													<input type="checkbox" />
													<span class="checkmarks"></span>
												</label>
											</td>
											<td className="flex gap-2">
												<a href="javascript:void(0);" class="product-img">
													<img src="assets/img/product/product6.jpg" alt="product" />
												</a>
												<a href="javascript:void(0);">Macbook Pro</a>
											</td>
											<td>PT006</td>
											<td>Shoes</td>
											<td>N/D</td>
											<td>10.00</td>
											<td>pc</td>
											<td>100.00</td>
											<td>Admin</td>
											<td className='flex '>
												<a class="me-3" href="product-details.html">
													<img src="assets/img/icons/eye.svg" alt="img" />
												</a>
												<a class="me-3" href="editproduct.html">
													<img src="assets/img/icons/edit.svg" alt="img" />
												</a>
												<a class="confirm-text" href="javascript:void(0);">
													<img src="assets/img/icons/delete.svg" alt="img" />
												</a>
											</td>
										</tr>
										<tr class="odd">
											<td class="sorting_1">
												<label class="checkboxs">
													<input type="checkbox" />
													<span class="checkmarks"></span>
												</label>
											</td>
											<td className="flex gap-2">
												<a href="javascript:void(0);" class="product-img">
													<img src="assets/img/product/product7.jpg" alt="product" />
												</a>
												<a href="javascript:void(0);">Apple Earpods</a>
											</td>
											<td>PT007</td>
											<td>Shoes</td>
											<td>N/D</td>
											<td>10.00</td>
											<td>pc</td>
											<td>100.00</td>
											<td>Admin</td>
											<td className='flex '>
												<a class="me-3" href="product-details.html">
													<img src="assets/img/icons/eye.svg" alt="img" />
												</a>
												<a class="me-3" href="editproduct.html">
													<img src="assets/img/icons/edit.svg" alt="img" />
												</a>
												<a class="confirm-text" href="javascript:void(0);">
													<img src="assets/img/icons/delete.svg" alt="img" />
												</a>
											</td>
										</tr>
										<tr class="even">
											<td class="sorting_1">
												<label class="checkboxs">
													<input type="checkbox" />
													<span class="checkmarks"></span>
												</label>
											</td>
											<td className="flex gap-2">
												<a href="javascript:void(0);" class="product-img">
													<img src="assets/img/product/product8.jpg" alt="product" />
												</a>
												<a href="javascript:void(0);">iPhone 11	</a>
											</td>
											<td>PT008</td>
											<td>Fruits</td>
											<td>N/D</td>
											<td>10.00</td>
											<td>pc</td>
											<td>100.00</td>
											<td>Admin</td>
											<td className='flex '>
												<a class="me-3" href="product-details.html">
													<img src="assets/img/icons/eye.svg" alt="img" />
												</a>
												<a class="me-3" href="editproduct.html">
													<img src="assets/img/icons/edit.svg" alt="img" />
												</a>
												<a class="confirm-text" href="javascript:void(0);">
													<img src="assets/img/icons/delete.svg" alt="img" />
												</a>
											</td>
										</tr>
										<tr class="odd">
											<td class="sorting_1">
												<label class="checkboxs">
													<input type="checkbox" />
													<span class="checkmarks"></span>
												</label>
											</td>
											<td className="flex gap-2">
												<a href="javascript:void(0);" class="product-img">
													<img src="assets/img/product/product9.jpg" alt="product" />
												</a>
												<a href="javascript:void(0);">samsung	</a>
											</td>
											<td>PT009</td>
											<td>Earphones</td>
											<td>N/D</td>
											<td>10.00</td>
											<td>pc</td>
											<td>100.00</td>
											<td>Admin</td>
											<td className='flex '>
												<a class="me-3" href="product-details.html">
													<img src="assets/img/icons/eye.svg" alt="img" />
												</a>
												<a class="me-3" href="editproduct.html">
													<img src="assets/img/icons/edit.svg" alt="img" />
												</a>
												<a class="confirm-text" href="javascript:void(0);">
													<img src="assets/img/icons/delete.svg" alt="img" />
												</a>
											</td>
										</tr>
										<tr class="even">
											<td class="sorting_1">
												<label class="checkboxs">
													<input type="checkbox" />
													<span class="checkmarks"></span>
												</label>
											</td>
											<td className="flex gap-2">
												<a href="javascript:void(0);" class="product-img">
													<img src="assets/img/product/product11.jpg" alt="product" />
												</a>
												<a href="javascript:void(0);">Banana</a>
											</td>
											<td>PT0010</td>
											<td>Health Care	</td>
											<td>N/D</td>
											<td>10.00</td>
											<td>kg</td>
											<td>100.00</td>
											<td>Admin</td>
											<td className='flex '>
												<a class="me-3" href="product-details.html">
													<img src="assets/img/icons/eye.svg" alt="img" />
												</a>
												<a class="me-3" href="editproduct.html">
													<img src="assets/img/icons/edit.svg" alt="img" />
												</a>
												<a class="confirm-text" href="javascript:void(0);">
													<img src="assets/img/icons/delete.svg" alt="img" />
												</a>
											</td>
										</tr></tbody>
								</table>
                                <div class="dataTables_length" id="DataTables_Table_0_length"><label><select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></label></div><div class="dataTables_paginate paging_numbers" id="DataTables_Table_0_paginate"><ul class="pagination"><li class="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="0" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="1" tabindex="0" class="page-link">2</a></li></ul></div><div class="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">1 - 10 of 11 items</div>
                                </div>
							</div> */}


            </div>
        </div>
    );
};

export default Products;