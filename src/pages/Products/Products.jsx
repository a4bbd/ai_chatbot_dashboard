import React from 'react';
import "./products.css";

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



const Products = () => {
    return (
        <div className=''>
            <div className="page-title w-full">
							<h4 className='font-bold text-lg leading-relaxed'>Product List</h4>
							<h6 className='text-sm font-normal'>Manage your products</h6>
			</div>

            <div className='mt-4 bg-white rounded p-4'>

              <div className='  '>
			  <div className="flex gap-6   mt-2" style={{transform: "translate(0px, 0px)"}}>

			  <div  data-node-key="categories" className=" ant-tabs-tab">
			  <div role="tab" aria-selected="false" className="text-indigo-500  cursor-pointer ant-tabs-tab-btn" tabindex="0" id="rc-tabs-0-tab-categories" aria-controls="rc-tabs-0-panel-categories">Items</div>
			           <div className='border-b-2 translate-y-3 border-indigo-500'></div>
			  </div>

			  <div  data-node-key="categories" className=" ant-tabs-tab">
			  <div role="tab" aria-selected="false" className="hover:text-indigo-500 transition duration-400 cursor-pointer  ant-tabs-tab-btn" tabindex="0" id="rc-tabs-0-tab-categories" aria-controls="rc-tabs-0-panel-categories">Categories</div>
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
			  {/* <div className="border " style={{left: "0px", width: "39px"}}></div> */}
			  </div>
			  <div className='mt-3 border-b'></div>
			  
			  </div>


              
			  <table className="table ">
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Product Name</th>
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
												<a href="javascript:void(0);" class="product-img">
													<img src={category7} alt="product" />
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