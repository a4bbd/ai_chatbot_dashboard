import React, { useState } from "react";
import "./products.css";
import search from "../../assets/search-white.svg";
import remove from "../../assets/remove.svg";
import edit from "../../assets/edit.svg";
import eye from "../../assets/eye.svg";
import { NavLink } from "react-router-dom";
import AddProductform from "../AddProductForm/AddProductform";
import { products } from "../../dummy_data/dummy_data";

const Products = () => {
  const [addproduct, setAddproduct] = useState(false);
  const [importItem, setImportitem] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="scrollbar">
      <div className="page-title w-full">
        <h4 className="font-bold text-lg leading-relaxed">Product List</h4>
        <h6 className="text-sm font-normal">Manage your products</h6>
      </div>

      <div className="mt-4 border bg-white rounded p-4">
        <div className="  ">
          <div
            className="flex justify-between  mt-2"
            style={{ transform: "translate(0px, 0px)" }}>
            <div className="flex gap-6">
              <div data-node-key="categories" className=" ant-tabs-tab">
                <div
                  role="tab"
                  aria-selected="false"
                  className="text-indigo-500  cursor-pointer ant-tabs-tab-btn"
                  tabindex="0"
                  id="rc-tabs-0-tab-categories"
                  aria-controls="rc-tabs-0-panel-categories">
                  Items
                </div>
                <div className="border-b-2 translate-y-3 border-indigo-500"></div>
              </div>

              <div data-node-key="categories" className=" ant-tabs-tab">
                <div
                  role="tab"
                  aria-selected="false"
                  className="hover:text-indigo-500 transition duration-400 cursor-pointer  ant-tabs-tab-btn"
                  tabindex="0"
                  id="rc-tabs-0-tab-categories"
                  aria-controls="rc-tabs-0-panel-categories">
                  Add Products
                </div>
                <div className=""></div>
              </div>

              <div data-node-key="categories" className=" ant-tabs-tab">
                <div
                  role="tab"
                  aria-selected="false"
                  className="hover:text-indigo-500 transition duration-400 cursor-pointer ant-tabs-tab-btn"
                  tabindex="0"
                  id="rc-tabs-0-tab-categories"
                  aria-controls="rc-tabs-0-panel-categories">
                  Add ons
                </div>
                <div className=""></div>
              </div>

              <div data-node-key="categories" className=" ant-tabs-tab">
                <div
                  role="tab"
                  aria-selected="false"
                  className="hover:text-indigo-500 transition duration-400 cursor-pointer ant-tabs-tab-btn"
                  tabindex="0"
                  id="rc-tabs-0-tab-categories"
                  aria-controls="rc-tabs-0-panel-categories">
                  Variations
                </div>
                <div className=""></div>
              </div>
            </div>
          </div>
          <div className="mt-3 border-b border-slate-50"></div>

          <div className="pl-5  bg-slate-50 border rounded mt-3 pr-5  pt-4 pb-4">
            <div className="flex justify-between">
              <div className="flex gap-4">
                <div flexflow="column" margin="0 1rem 0 0" class="">
                  <div
                    className="text-xl font-semibold leading-6"
                    level="3"
                    font-weight="600">
                    Items
                  </div>
                  <div className="text-xs leading-4 tracking-wider ">
                    Your item cards
                  </div>
                </div>

                <NavLink to={"/create_item"}>
                  <button
                    onClick={() => setAddproduct(!addproduct)}
                    className="ml-3 pl-2 pr-2 text-lg rounded transition duration-300 ease-in-out bg-orange-500 hover:bg-slate-400 text-white">
                    Create Item
                  </button>
                </NavLink>

                <NavLink to={"/importitems"}>
                  {" "}
                  <button
                    onClick={() => setImportitem(!importItem)}
                    type="button"
                    className="pl-2 pr-2 text-lg rounded bg-orange-500 hover:bg-slate-400 text-white transition duration-300 ease-in-out">
                    <span>Import items</span>
                  </button>{" "}
                </NavLink>
              </div>

              <div className="relative">
                <input
                  className="mt-2  focus:border-orange-400 pt-1 pb-1  pl-3 pr-8 outline-none rounded  w-72 border"
                  placeholder="Search"
                  type="text"
                />
                <img
                  className="absolute top-4 w-5 right-2"
                  src={search}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>

        {addproduct ? (
          <AddProductform />
        ) : (
          <>
            {" "}
            <table className="table mt-1">
              <tr className="h-12">
                <th className="check  ">
                  <input type="checkbox" />
                </th>
                <th> Product Name</th>
                <th>SKU</th>
                <th>Color</th>
                <th>Brand</th>
                <th>price</th>
                <th>Unit</th>
                <th>Qty</th>
                <th>Created By</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
              <tbody>
                {records.map((data) => (
                  <tr className="transition duration-400">
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td className="flex gap-2">
                      <a href="javascript:void(0);" class="">
                        <img className="images" src={data.img} alt="product" />
                      </a>
                      <a href="javascript:void(0);">{data.title}</a>
                    </td>
                    <td>{data.sku}</td>
                    <td>{data.color}</td>
                    <td>{data.producer}</td>
                    <td>{data.price}</td>
                    <td>pc</td>
                    <td>{data.id}</td>
                    <td>Admin</td>
                    <td>{data.createdAt}</td>
                    <td className="flex ">
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
                ))}
              </tbody>
            </table>
            <div className="mt-7 flex justify-between">
              <div className="flex gap-2">
                <div>
                  <a style={{ background: "#FF9F43" }}
                        className=" rounded  paginate_button page-item active text-black"  href="#" onClick={prePage}>
                    Prev
                  </a>
                </div>
                {numbers.map((n, i) => (
                  <div>
                    <ul className="flex gap-2 pagination">
                      <li
                        style={{ background: "#FF9F43" }}
                        className=" rounded  paginate_button page-item active">
                        <a
                          href="#"
                          className="page-link text-black"
                          onClick={() => changeCPage(n)}>
                          {n}
                        </a>
                      </li>
                    </ul>
                  </div>
                ))}
                <div>
				
                  <a style={{ background: "#FF9F43" }}
                        className=" rounded  paginate_button page-item active text-black" href="#" onClick={nextPage}>
                    Next
                  </a>
				 
                </div>
              </div>
            </div>
            <div className="mt-1 border-orange-400 border-2"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
