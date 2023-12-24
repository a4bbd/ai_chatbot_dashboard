import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import filter from "../../assets/filter.svg";
import search from "../../assets/search-white.svg";
import pdf from "../../assets/pdf.svg";
import printer from "../../assets/printer.svg";
import excel from "../../assets/excel.svg";
import remove from "../../assets/remove.svg";
import edit from "../../assets/edit.svg";
import eye from "../../assets/eye.svg";
import { Link } from "react-router-dom";
import { categories } from "../../dummy_data/dummy_data";

const Categories = () => {
  const [addproduct, setAddproduct] = useState(false);
  const [importItem, setImportitem] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = categories.slice(firstIndex, lastIndex);
  const npage = Math.ceil(categories.length / recordsPerPage);
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
    <div>
      <div className="flex justify-between">
        <div class="page-title">
          <h4 className="font-bold text-lg">Product Category list</h4>
          <h6 style={{ color: "#555" }} className="font-normal text-sm">
            View/Search product Category
          </h6>
        </div>
        <div className="">
          {/* <button style={{background:"#FF9F43"}} className='block text-center pt-2 pb-2 pl-4 pr-4 text-white rounded' href="addcategory.html" class="btn btn-added">
                            <FontAwesomeIcon  icon={faPlus} className='' /> Add  Category
							</button> */}
          <Link to={"/categoriesform"}>
            <button className="hover:bg-slate-700 bg-orange-400 text-white font-bold py-2 px-4 rounded">
              <FontAwesomeIcon icon={faPlus} className="w-7" />
              Add Category
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-5 bg-white border p-6 rounded">
        <div className=" ">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div class="search-path">
                <a class="btn btn-filter" id="filter_search">
                  <img
                    style={{ background: "#FF9F43" }}
                    className="block p-2 rounded"
                    src={filter}
                    alt="img"
                  />
                </a>
              </div>
              <div className="flex  relative">
                <a className="absolute mr-4 pl-1 top-3 left-1 btn btn-searchset">
                  <img src={search} alt="img" />
                </a>
                <div className="">
                  <input
                    type="search"
                    className="w-56  pl-7 h-10  border rounded outline-none"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>

            <div className="">
              <ul className="flex gap-4">
                <li>
                  <a
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="pdf"
                    aria-label="pdf">
                    <img src={pdf} alt="img" />
                  </a>
                </li>
                <li>
                  <a
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="excel"
                    aria-label="excel">
                    <img src={excel} alt="img" />
                  </a>
                </li>
                <li>
                  <a
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="print"
                    aria-label="print">
                    <img src={printer} alt="img" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* categores  */}
        <div className="mt-6">
          <table className="table ">
            <tr>
              <th className="check ml-8">
                <input type="checkbox" />
              </th>
              <th>Category Name</th>
              <th>Category Code</th>
              <th>Description</th>
              <th>Created By</th>
              <th>Action</th>
            </tr>
            <tbody>
              {records.map((data) => (
                <tr className=" transition duration-400">
                  <td className="ml-8">
                    <input type="checkbox" />
                  </td>
                  <td className="flex gap-2 categoriesImages">
                    <a href="javascript:void(0);" class="">
                      <img className="images" src={data.img} alt="product" />
                    </a>
                    <a href="#">{data.categories_name}</a>
                  </td>
                  <td>{data.categores_code}</td>
                  <td>{data.description}</td>
                  <td>Admin</td>

                  <td className="flex ">
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
        </div>
      </div>
      <div className="mt-7 flex justify-between">
        <div className="flex gap-2">
          <div>
            <a
              className="bg-blue-500 rounded  paginate_button page-item active text-black"
              href="#"
              onClick={prePage}>
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
            <a
              className=" rounded bg-blue-500  paginate_button page-item active text-black"
              href="#"
              onClick={nextPage}>
              Next
            </a>
          </div>
        </div>
      </div>
      <div className="mt-1 border-orange-400 border-2"></div>
    </div>
  );
};

export default Categories;
