import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faPenToSquare,faTrash } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Coupons = () => {
  return (
    <div>
      <div class="page-title">
        <h4 className="font-bold text-lg">Coupons list</h4>
        <h6 style={{ color: "#555" }} className="font-normal text-sm">
          View/Search Coupons
        </h6>
      </div>

      <div className="mt-5 flex justify-between">
        <div className=" relative mt-1 items-center ">
          <input
            type="text"
            placeholder="Search"
            className="border-2  focus:outline-none font-sans rounded bg-slate-100  border-slate-200  w-[300px] h-10 pb-0 pt-0 pl-9 pr-10  m-2"
          />

          <span className="search absolute top-5 left-5 opacity-50">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-search feather-14">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
        </div>
        <div className="flex gap-3">
          <div className="">
            <button className="hover:bg-slate-700 bg-green-400 text-white font-bold py-2 px-4 rounded">
              <FontAwesomeIcon icon={faPlus} className="w-7" />
              Chossen Date
            </button>
          </div>

          <div className="">
           <NavLink to={"/couponform"}> <button className="hover:bg-slate-700 bg-orange-400 text-white font-bold py-2 px-4 rounded">
              <FontAwesomeIcon icon={faPlus} className="w-7" />
              Add Coupon
            </button></NavLink>
          </div>
        </div>
      </div>

      <table className="w-full border-collapse border mt-5 table-fixed">
  <thead>
    <tr>
      <th>#</th>
      <th>Coupon</th>
      <th>Amount</th>
      <th>Type</th>
      <th>Expiry date</th>
      <th>Status</th>
      <th>Actions</th>
      <th>Free shipping</th>
      <th>Used</th>
    </tr>
  </thead>
  <tbody>
    <tr className="h-[59px]">
      <td>1</td>
      <td>#234</td>
      <td>10</td>
      <td>Percent</td>
      <td>Nov 30, 23 11:10</td>
      <td>Active</td>
      <td> <a className="w-10 h-10 inline-block rounded-full border border-yellow-700"><FontAwesomeIcon className=" translate-x-3 translate-y-2 text-yellow-700 text-center" icon={faPenToSquare} /></a>  <a className="ml-4 w-10 h-10 inline-block rounded-full border border-red-700"><FontAwesomeIcon className="text-red-700 translate-x-3 translate-y-2" icon={faTrash} /></a></td>
      <td>Disable</td>
      <td>1/2</td>
    </tr>
    <tr className="h-[59px]">
    <td>2</td>
      <td>#235</td>
      <td>10</td>
      <td>Percent</td>
      <td>Nov 30, 23 11:10</td>
      <td>Active</td>
      <td> <a className="w-10 h-10 inline-block rounded-full border border-yellow-700"><FontAwesomeIcon className=" translate-x-3 translate-y-2 text-yellow-700 text-center" icon={faPenToSquare} /></a>  <a className="ml-4 w-10 h-10 inline-block rounded-full border border-red-700"><FontAwesomeIcon className="text-red-700 translate-x-3 translate-y-2" icon={faTrash} /></a></td>
      <td>Disable</td>
      <td>1/2</td>

    </tr>
    <tr className="h-[59px]">
    <td>3</td>
      <td>#236</td>
      <td>10</td>
      <td>Percent</td>
      <td>Nov 30, 23 11:10</td>
      <td>Active</td>
      <td> <a className="w-10 h-10 inline-block rounded-full border border-yellow-700"><FontAwesomeIcon className=" translate-x-3 translate-y-2 text-yellow-700 text-center" icon={faPenToSquare} /></a>  <a className="ml-4 w-10 h-10 inline-block rounded-full border border-red-700"><FontAwesomeIcon className="text-red-700 translate-x-3 translate-y-2" icon={faTrash} /></a></td>
      <td>Disable</td>
      <td>1/2</td>
    </tr>
  </tbody>
</table>

    </div>
  );
};

export default Coupons;
