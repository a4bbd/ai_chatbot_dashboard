import React from "react";
import upload from "../../assets/upload.svg";

const Importitems = () => {
  return (
    <div>
      <div class="page-title">
        <h4 className="font-bold text-lg">Import Products</h4>
        <h6 style={{ color: "#555" }} className="text-sm font-normal">
          Bulk upload your products
        </h6>
      </div>
      <div className="border rounded mt-4 p-4 bg-white">
        <div class="requiredfield">
          <h4 style={{ color: "#637381" }} className="text-sm">
            Field must be in csv format
          </h4>
        </div>

        <div className="mt-10">
          <div className="form-group">
            <a
              style={{ background: "#FF9F43" }}
              className="text-white rounded p-4 w-full  btn btn-submit">
              Download Sample File
            </a>
          </div>
        </div>
        <div className="mt-6">
          <label>Upload CSV File</label>
          <div className="border  hover:bg-slate-100 mt-2 h-24 rounded ">
            <label className="cursor-pointer" for="files" class="btn">
              <div className="image-uploads h-full w-full max-auto ">
                <img
                  className="text-center mt-2 ml-[550px]"
                  src={upload}
                  alt="img"
                />
                <h4 className="ml-[30rem] max-auto">
                  Drag and drop a file to upload
                </h4>
              </div>
            </label>
            <input
              id="files"
              className=""
              style={{ visibility: "hidden" }}
              type="file"
            />
          </div>
        </div>

        <div className=" w-full grid grid-cols-2 gap-4 mt-4">
          <div>
            <table className="w-full border">
              <tbody className="w-full">
                <tr>
                  <td>Product Name</td>
                  <td style={{ color: "#0F9D58" }} className="border">
                    This Field is required
                  </td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td style={{ color: "#0F9D58" }} className="border">
                    This Field is required
                  </td>
                </tr>
                <tr>
                  <td>SKU code</td>
                  <td style={{ color: "#0F9D58" }} className="border">
                    This Field is required
                  </td>
                </tr>
                <tr>
                  <td>Product Cost</td>
                  <td style={{ color: "#0F9D58" }} className="border">
                    This Field is required
                  </td>
                </tr>
                <tr>
                  <td>Product Price</td>
                  <td style={{ color: "#0F9D58" }} className="border">
                    This Field is required
                  </td>
                </tr>
                <tr>
                  <td>Product Unit</td>
                  <td style={{ color: "#0F9D58" }} className="border">
                    This Field is required
                  </td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td style={{ color: "#2AA4F4" }} className="border">
                    This Field is Optional
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table className="w-full border">
              <tbody className="w-full">
                <tr>
                  <td>Minimum Qty</td>
                  <td style={{ color: "#2AA4F4" }} className="border">
                    Field optional
                  </td>
                </tr>
                <tr>
                  <td>Quantity</td>
                  <td style={{ color: "#2AA4F4" }} className="border">
                    Field optional
                  </td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td style={{ color: "#2AA4F4" }} className="border">
                    Field optional
                  </td>
                </tr>
                <tr>
                  <td>Discount Type</td>
                  <td style={{ color: "#2AA4F4" }} className="border">
                    Field optional
                  </td>
                </tr>
                <tr>
                  <td>Brand</td>
                  <td style={{ color: "#2AA4F4" }} className="border">
                    Field optional
                  </td>
                </tr>
                <tr>
                  <td>Minimum Qty</td>
                  <td style={{ color: "#2AA4F4" }} className="border">
                    Field optional
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10">
									<a href="#" className="bg-orange-500 hover:bg-orange-600 text-white rounded pt-3 pb-3 w-28 inline-block text-center me-2">Submit</a>
									<a href="#" className="text-white hover:bg-slate-800  bg-slate-700 pt-3 pb-3 rounded w-28 inline-block text-center">Cancel</a>
		 </div>

      </div>
    </div>
  );
};

export default Importitems;
