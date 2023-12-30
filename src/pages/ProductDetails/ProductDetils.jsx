import React from 'react';
import barcode from "../../assets/barcode1.png";
import printer from "../../assets/printer.svg"

const ProductDetils = () => {
    return (
        <div>
            <div class="page-title">
							<h4 style={{color:"#212B36"}} className='font-bold text-lg'>Product Details</h4>
							<h6 style={{color:"#555"}} className='text-sm font-normal'>Full details of a product</h6>
			</div>
            <div className='grid  w-full grid-cols-6 mt-4 gap-4'>
                 <div className='bg-white border rounded p-5 h-full col-span-4 '>

                 <div className="flex  items-center p-4 justify-center border w-64  bar-code-view gap-11"> 
										<img src={barcode} alt="barcode" />
										<a className="block">
											<img src={printer} alt="print" />
										</a>
									</div>

                    
                                    <div className="w-full productdetails">
										<ul class="product-bar w-full">
											<li className='flex w-full'>
												<h4>Product</h4>
												<h6>Macbook pro	</h6>
											</li>
											<li>
												<h4>Category</h4>
												<h6>Computers</h6>
											</li>
											<li>
												<h4>Sub Category</h4>
												<h6>None</h6>
											</li>
											<li>
												<h4>Brand</h4>
												<h6>None</h6>
											</li>
											<li>
												<h4>Unit</h4>
												<h6>Piece</h6>
											</li>
											<li>
												<h4>SKU</h4>
												<h6>PT0001</h6>
											</li>
											<li>
												<h4>Minimum Qty</h4>
												<h6>5</h6>
											</li>
											<li>
												<h4>Quantity</h4>
												<h6>50</h6>
											</li>
											<li>
												<h4>Tax</h4>
												<h6>0.00 %</h6>
											</li>
											<li>
												<h4>Discount Type</h4>
												<h6>Percentage</h6>
											</li>
											<li>
												<h4>Price</h4>
												<h6>1500.00</h6>
											</li>
											<li>
												<h4>Status</h4>
												<h6>Active</h6>
											</li>
											<li>
												<h4>Description</h4>
												<h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h6>
											</li>
										</ul>
									</div>

                 </div>


                 <div className='bg-green-500 col-start-5 h-10 col-end-7 '>

                 </div>
            </div>
        </div>
    );
};

export default ProductDetils;