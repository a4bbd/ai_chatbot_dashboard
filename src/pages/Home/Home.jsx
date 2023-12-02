import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCreditCard,
  faMoneyBill,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import product22 from "../../assets/product22.jpg"
import totalOrder from "../../assets/total_order.svg";
import "./home.css";
import Example from "../../components/Recharts/Chart";
const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-md">
          <div className="p-5 flex gap-3">
            <div className="">
              <p className=" bg-red-100 h-[48px] w-[48px] rounded-full ">
                {" "}
                <img
                  className="translate-y-3 translate-x-3 "
                  src={totalOrder}
                />
              </p>
            </div>
            <div class="">
              <h5 className="font-bold text-lg tracking-wide ">
                $<span className="">307144</span>
              </h5>
              <h6 className="mt-1 tracking-wider font-normal text-sm">
                Total Purchase Due
              </h6>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-md">
          <div className="p-5 flex gap-3">
            <div className="">
              <p className=" bg-teal-100 h-[48px] w-[48px] rounded-full ">
                {" "}
                <FontAwesomeIcon
                  style={{ fontSize: "23px", color: "265073" }}
                  className="translate-y-3 translate-x-3 "
                  icon={faBagShopping}
                />
              </p>
            </div>
            <div class="">
              <h5 className="font-bold text-lg tracking-wide ">
                $<span className="">307144</span>
              </h5>
              <h6 className="mt-1 tracking-wider font-normal text-sm">
                Recovered Cart
              </h6>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-md">
          <div className="p-5 flex gap-3">
            <div className="">
              <p className=" bg-lime-100 h-[48px] w-[48px] rounded-full ">
                {" "}
                <FontAwesomeIcon
                  style={{ fontSize: "23px", color: "8ADAB2" }}
                  className="translate-y-3 translate-x-3 "
                  icon={faCreditCard}
                />
              </p>
            </div>
            <div class="">
              <h5 className="font-bold text-lg tracking-wide ">
                $<span className="">307144</span>
              </h5>
              <h6 className="mt-1 tracking-wider font-normal text-sm">
                Cehckout Order
              </h6>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-md">
          <div className="p-5 flex gap-3">
            <div className="">
              <p className=" bg-red-100 h-[48px] w-[48px] rounded-full ">
                {" "}
                <FontAwesomeIcon
                  style={{ fontSize: "23px", color: "" }}
                  className="translate-y-3 translate-x-3 "
                  icon={faMoneyBill}
                />
              </p>
            </div>
            <div class="">
              <h5 className="font-bold text-lg tracking-wide ">
                $<span className="">307144</span>
              </h5>
              <h6 className="mt-1 tracking-wider font-normal text-sm">
                Total Earnings
              </h6>
            </div>
          </div>
        </div>

        <div className="bg-orange-400 mt-2	 border border-slate-200 rounded-md">
          <div className="flex p-5 justify-between ">
            <div class="dash-counts">
              <h4 className="text-white text-2xl font-bold">100</h4>
              <h5 className="text-white">Customers</h5>
            </div>
            <div className="iconSvg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-user">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-teal-400	mt-2	 border border-slate-200 rounded-md">
          <div className="flex p-5 justify-between ">
            <div class="dash-counts">
              <h4 className="text-white text-2xl font-bold">100</h4>
              <h5 className="text-white">Suppliers</h5>
            </div>
            <div className="iconSvg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-user-check">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <polyline points="17 11 19 13 23 9"></polyline>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-sky-900 mt-2	 border border-slate-200 rounded-md">
          <div className="flex p-5 justify-between ">
            <div class="dash-counts">
              <h4 className="text-white text-2xl font-bold">100</h4>
              <h5 className="text-white">Purchase Invoice</h5>
            </div>
            <div className="iconSvg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-file-text">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>{" "}
            </div>
          </div>
        </div>

        <div className="bg-green-400 mt-2		 border border-slate-200 rounded-md">
          <div className="flex p-5 justify-between ">
            <div class="dash-counts">
              <h4 className="text-white text-2xl font-bold">110</h4>
              <h5 className="text-white">Purchase Invoice</h5>
            </div>
            <div className="iconSvg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-file">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                <polyline points="13 2 13 9 20 9"></polyline>
              </svg>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="grid mt-7  grid-cols-5 gap-2">
          <div className="border p-3 col-span-3 rounded-md ">
            <div className="flex justify-between">
              <h1 className="text-lg font-bold">Purchase & Sales</h1>
              <div className="flex gap-3 ">
                <h1 className="flex gap-2 justify-center items-center">
                  <p
                    style={{ backgroundColor: "#694FEA" }}
                    className="h-3 w-3   rounded-full"></p>{" "}
                  Sales
                </h1>
                <h1 className="flex gap-2 justify-center items-center">
                  <p
                    style={{ backgroundColor: "#82CA9D" }}
                    className="h-3 w-3  rounded-full"></p>
                  Purchase
                </h1>
                <p>
                  <div class="relative inline-block text-left">
                    <div>
                      <button
                        type="button"
                        className="inline-flex cursor-pointer w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-light tracking-wide  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true">
                        2023
                        <svg
                          className="-mr-1 cursor-pointer h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    <div
                      className="absolute hidden right-0 z-10 mt-2 w-20 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabindex="-1">
                      <div class="py-1" role="none">
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-0">
                          2023
                        </a>
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-1">
                          2021
                        </a>
                        <a
                          href="#"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-2">
                          2020
                        </a>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
            <div className="h-[350px] mt-4">
              <Example />
            </div>
          </div>
          <div className="border p-3 col-span-2 rounded-md">
            <div className="flex justify-between">
              <h1>Recently Added Products</h1>
              <a>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </a>
            </div>

            <table className="table-fixed mt-5 w-full">
  <thead>
    <tr>
      <th className="float-left" >Serial No</th>
      <th className="text-left" >Products</th>
      <th className="text-left ">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td className="sorting_1">1</td>
													<td className="flex">
														<a href="productlist.html" className="product-img">
															<img src={product22} alt="product" />
														</a>
														<a href="productlist.html" className="">Apple Earpods</a>
													</td>
	 	<td>$891.2</td>
    </tr>
    <tr>
      <td>2</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
