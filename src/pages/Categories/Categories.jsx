import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import filter from "../../assets/filter.svg";
import search from "../../assets/search-white.svg";
import pdf from "../../assets/pdf.svg";
import printer from "../../assets/printer.svg";
import excel from "../../assets/excel.svg";
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
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div>
            <div className="flex justify-between">
						<div class="page-title">
							<h4 className='font-bold text-lg'>Product Category list</h4>
							<h6 style={{color:"#555"}} className='font-normal text-sm'>View/Search product Category</h6>
						</div>
						<div  className="">
							{/* <button style={{background:"#FF9F43"}} className='block text-center pt-2 pb-2 pl-4 pr-4 text-white rounded' href="addcategory.html" class="btn btn-added">
                            <FontAwesomeIcon  icon={faPlus} className='' /> Add  Category
							</button> */}
						   <Link to={"/categoriesform"}><button  className="hover:bg-slate-700 bg-orange-400 text-white font-bold py-2 px-4 rounded">
							<FontAwesomeIcon  icon={faPlus} className='w-7' />
							Add Category</button></Link>
						</div>
			</div>

            <div className='mt-5 bg-white border p-6 rounded'>
              <div className=' '>


              <div className="flex justify-between">
              <div className="flex gap-2">
									<div class="search-path">
										<a class="btn btn-filter" id="filter_search">
											<img style={{background:"#FF9F43"}} className='block p-2 rounded' src={filter} alt="img" />
											

										</a>
									</div>
									<div className="flex  relative">
										<a className="absolute mr-4 pl-1 top-3 left-1 btn btn-searchset">
										<img src={search} alt="img" />
										
										</a>
									<div  className="">
                                    
									<input type="search" className="w-56  pl-7 h-10  border rounded outline-none" placeholder="Search..." />
									
									
                                    </div></div>
								</div>




								<div className="">
									<ul className='flex gap-4'>
										<li>
											<a data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="pdf" aria-label="pdf"><img src={pdf} alt="img" /></a>
										</li>
										<li>
											<a data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="excel" aria-label="excel"><img src={excel} alt="img" /></a>
										</li>
										<li>
											<a data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="print" aria-label="print"><img src={printer} alt="img" /></a>
										</li>
									</ul>
								</div>


                                
							</div>


              </div>


              {/* categores  */}
              <div className='mt-6'>
              <table className="table ">
                <tr>
          <th className='check ml-8'>
            <input type="checkbox" />
          </th>
          <th>Category Name</th>
          <th>Category Code</th>
          <th>Description</th>
          <th>Created By</th>
          <th>Action</th>
        </tr>
        <tbody>
          <tr className=' transition duration-400'>
            <td className='ml-8'>
              <input type="checkbox" />
            </td>
            <td className="flex gap-2">
												<a href="javascript:void(0);" class="">
													<img src={category1} alt="product" />
												</a>
												<a href="#">Computers</a>
											</td>
											<td>CT001</td>
											<td>Computers Description</td>
											<td>Admin</td>
											
											<td className='flex '>
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
												<a href="javascript:void(0);">Fruits</a>
											</td>
											<td>CT002</td>
											<td>Fruits Description</td>
											<td>Admin</td>
											<td className='flex '>
												
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
												<a href="javascript:void(0);">Fruits</a>
											</td>
											<td>CT003</td>
											<td>Fruits Description</td>
											<td>Admin</td>
											<td className='flex '>
												
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
												<a href="javascript:void(0);">Fruits</a>
											</td>
											<td>CT004</td>
											<td>Fruits Description</td>
											<td>Admin</td>
											
											<td className='flex '>
												
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
												<a href="javascript:void(0);">Fruits</a>
											</td>
											<td>CT004</td>
											<td>Fruits Description</td>
											<td>Admin</td>
											<td className='flex '>
												
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
												<a href="javascript:void(0);">Fruits</a>
											</td>
											<td>CT004</td>
											<td>Fruits Description</td>
											<td>Admin</td>
											<td className='flex '>
												
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
												<a >Fruits</a>
											</td>
											<td>CT004</td>
											<td>Fruits Description</td>
											<td>Admin</td>
											<td className='flex '>
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
												<a href="javascript:void(0);">Fruits</a>
											</td>
											<td>CT004</td>
											<td>Fruits Description</td>
											<td>Admin</td>
											<td className='flex '>
												
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
												<a href="javascript:void(0);">Fruits</a>
											</td>
											<td>CT004</td>
											<td>Fruits Description</td>
											<td>Admin</td>
											<td className='flex '>
												
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
												<a href="javascript:void(0);">Fruits</a>
											</td>
											<td>CT004</td>
											<td>Fruits Description</td>
											<td>Admin</td>
											<td className='flex '>
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
              </div>
                
            </div>
        </div>
    );
};

export default Categories;