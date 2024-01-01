import React from "react";
import barcode from "../../assets/barcode1.png";
import printer from "../../assets/printer.svg";
import { tableinfo } from "../../dummy_data/dummy_data";
import mac from "../../assets/product69.jpg"
const ProductDetils = () => {
  return (
    <div>
      <div class="page-title">
        <h4 style={{ color: "#212B36" }} className="font-bold text-lg">
          Product Details
        </h4>
        <h6 style={{ color: "#555" }} className="text-sm font-normal">
          Full details of a product
        </h6>
      </div>
      <div className="grid  w-full grid-cols-6 mt-4 gap-4">
        <div className="bg-white border rounded p-5 h-full col-span-4 ">
          <div className="flex  items-center p-4 justify-center border w-64  bar-code-view gap-11">
            <img src={barcode} alt="barcode" />
            <a className="block">
              <img src={printer} alt="print" />
            </a>
          </div>

          <div className="w-full productdetails">
            <table class="border-collapse mt-4 w-full border border-slate-500 table-auto ...">
              
              <tbody>
                <tr>
                  <td class="border  border-slate-300 ...">Product</td>
                  <td class="border border-slate-300 ...">Macbook pro</td>
                </tr>
                <tr>
                  <td class="border border-slate-300 ...">Category</td>
                  <td class="border border-slate-300 ...">Computers</td>
                </tr>
                <tr>
                  <td class="border  border-slate-300 ...">Sub Category</td>
                  <td class="border border-slate-300 ...">None</td>
                </tr>
                <tr>
                  <td class="border border-slate-300 ...">Brand</td>
                  <td class="border border-slate-300 ...">None</td>
                </tr>
                <tr>
                  <td class="border border-slate-300 ...">Unit</td>
                  <td class="border border-slate-300 ...">Piece</td>
                </tr>
                <tr>
                  <td class="border border-slate-300 ...">SKU</td>
                  <td class="border border-slate-300 ...">PT0001</td>
                </tr>
                <tr>
                  <td class="border border-slate-300 ...">Minimum Qty</td>
                  <td class="border border-slate-300 ...">5</td>
                </tr>
                <tr>
                  <td class="border border-slate-300 ...">Quantity</td>
                  <td class="border border-slate-300 ...">50</td>
                </tr>
                <tr>
                  <td class="border border-slate-300 ...">Tax</td>
                  <td class="border border-slate-300 ...">0.00 %</td>
                </tr>
                <tr>
                  <td class="border border-slate-300 ...">Discount Type</td>
                  <td class="border border-slate-300 ...">Percentage</td>
                </tr>
                <tr>
                  <td class="border border-slate-300 ...">Price</td>
                  <td class="border border-slate-300 ...">1500.00</td>
                </tr>
                <tr>
                  <td class="border border-slate-300 ...">Status</td>
                  <td class="border border-slate-300 ...">Active</td>
                </tr>
                <tr>
                  <td class="border border-slate-300 ...">Description</td>
                  <td class="border border-slate-300 ...">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</td>
                </tr>
              </tbody>
            </table>
		   {/* <table className="w-full mt-4 table-auto">
  <tbody>
  {tableinfo.map((item)=>( <tr>
      <td className="border  border-slate-300">{item.name}</td>
      <td>{item.item}</td>
      
    </tr>))}
    
  </tbody>
</table> */}
          </div>
        </div>

        <div className="col-start-5 col-end-7">
        <div className="slider-product border  rounded">
												<img src={mac} alt="img" />
												<h4 className="text-center">Macbook Pro</h4>
												<h6 className="text-center">581kb</h6>
											</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetils;
