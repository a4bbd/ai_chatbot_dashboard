import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCreditCard,
  faMoneyBill,
  faEllipsisVertical,
  faEye,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import product22 from "../../assets/product22.jpg";
import totalOrder from "../../assets/total_order.svg";
import "./home.css";
import Example from "../../components/Recharts/Chart";
import Burger from "../../assets/burger.jpg"
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
        <div className="grid mt-7  grid-cols-8 gap-4">
          <div className="border p-3 col-span-6 rounded-md ">
            {/* <div className="flex justify-between">
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
            </div> */}
            {/* <div className="h-[350px] mt-4">
              <Example />
            </div>
            <div className=" mt-4">


            </div> */}
            <div className="flex justify-between">
              <div class="col mb-3 mb-xl-0">
                <h5 className="text-base font-semibold">Last Orders</h5>
                <p style={{ color: "#6c757d" }} class="m-0 text-muted">
                  Quick management of the last 5 orders
                </p>
              </div>
              <div class="">
                <div className="">
                  <ul className="flex">
                    <li className="bg-emerald-500 text-xs   text-white rounded">
                      <a className="text-center py-1 px-3">All</a>
                    </li>
                    <li class="nav-item ">
                      <a class="nav-link text-emerald-500 py-1 px-3">Pending</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link py-1 text-emerald-500 px-3">
                        Processing
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link py-1 text-emerald-500 px-3">
                        Completed
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <table class="table mt-5 w-full">
              <thead>
                <tr className="border border-slate-300 border-b-1">
                  <th class="p-0 mw-200"></th>
                  <th class="p-0 mw-200"> </th>
                  <th class="p-0 mw-200"></th>
                  <th class="p-0 mw-200"></th>
                  <th class="p-0 mw-200"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-slate-300 ">
                  <td className="align-middle p-3 ">
                    <div class="d-flex align-items-center">
                      <div class="mr-2"></div>
                      <div>
                        <div>
                          <a
                            href="https://demo.bastisapp.com/backoffice/order/view?order_uuid=42af63ba-9173-11ee-b2ff-2e3da68cc847"
                            className="text-emerald-500 font-weight-bold hover:text-blue-950 mb-1">
                            Order #16447
                          </a>
                        </div>
                        <div>
                          {" "}
                          <a
                            style={{ color: "#6c757d" }}
                            className="font-bold text-muted font-weight-bold hover-text-primary"
                            href="javascript:;">
                            Billy Joe
                          </a>
                        </div>
                        <div className="text-xs">6 hours ago</div>
                      </div>
                    </div>
                  </td>
                  <td width="15%" class="text-left align-middle">
                    Jollibee
                  </td>
                  <td class="text-right align-middle">
                    <span className="font-bold block">$134.40</span>
                    <span
                      style={{ fontSize: "75%" }}
                      className=" bg-blue-900 text-center text-white font-semibold pt-0.5 pb-0.5 pl-0.5 pr-0.5 leading-none rounded">
                      unpaid
                    </span>
                  </td>
                  <td class="text-right align-middle">
                    <div>Pickup</div>
                    <span
                      style={{ color: "#6c757d" }}
                      class="text-muted font-weight-500">
                      Cash On delivery
                    </span>
                  </td>
                  <td class="text-right align-middle">
                    <span
                      style={{ fontSize: "75%" }}
                      className=" bg-pink-400 text-center color-white text-white font-semibold pt-0.5 pb-0.5 pl-0.5 pr-0.5 leading-none rounded">
                      rejected
                    </span>
                  </td>
                  <td class="text-right align-middle pr-0">
                    <a
                      href="https://demo.bastisapp.com/backoffice/order/view?order_uuid=42af63ba-9173-11ee-b2ff-2e3da68cc847"
                      className="w-10 h-12 p-2 bg-slate-100 rounded-md hover:bg-slate-200  px-4 mr-2">
                      <FontAwesomeIcon
                        style={{ color: "#6c757d" }}
                        icon={faEye}
                      />
                    </a>
                    <a
                      href="https://demo.bastisapp.com/backoffice/preprint/pdf?order_uuid=42af63ba-9173-11ee-b2ff-2e3da68cc847"
                      target="_blank"
                      class="w-10 h-12 p-2 bg-slate-100 rounded-md hover:bg-slate-200  px-4 mr-2">
                      <FontAwesomeIcon
                        style={{ color: "#6c757d" }}
                        icon={faDownload}
                      />
                    </a>
                  </td>
                </tr>

                <tr className="border-b-2 border-slate-300 ">
                  <td class="p-3  align-middle">
                    <div class="d-flex align-items-center">
                      <div class="mr-2">
                        <div class="blob red"></div>
                      </div>
                      <div>
                        <div>
                          <a
                            href="https://demo.bastisapp.com/backoffice/order/view?order_uuid=0e8ed840-9172-11ee-b2ff-2e3da68cc847"
                            class="text-emerald-500 font-weight-bold hover:text-blue-950 mb-1">
                            Order #16446
                          </a>
                        </div>
                        <div>
                          <a
                            style={{ color: "#6c757d" }}
                            className="font-bold text-muted font-weight-bold hover-text-primary">
                            Joe Sawyer
                          </a>
                        </div>
                        <div className="text-xs">14 hours ago</div>
                      </div>
                    </div>
                  </td>
                  <td width="15%" class="text-left align-middle">
                    McDonald's
                  </td>
                  <td class="text-right align-middle">
                    <span className="font-bold block">$200.00</span>
                    <span
                      style={{ fontSize: "75%" }}
                      className=" bg-yellow-300 text-center text-black font-semibold pt-0.5 pb-0.5 pl-0.5 pr-0.5 leading-none rounded">
                      paid
                    </span>
                  </td>
                  <td class="text-right align-middle">
                    <div>Pickup</div>
                    <span
                      style={{ color: "#6c757d" }}
                      class="text-muted font-weight-500">
                      Cash On delivery
                    </span>
                  </td>
                  <td class="text-right align-middle">
                    <span
                      style={{ fontSize: "75%" }}
                      className=" bg-lime-500 text-center text-white font-semibold pt-0.5 pb-0.5 pl-0.5 pr-0.5 leading-none rounded">
                      Completed
                    </span>
                  </td>
                  <td class="text-right align-middle pr-0">
                    <a
                      href="https://demo.bastisapp.com/backoffice/order/view?order_uuid=0e8ed840-9172-11ee-b2ff-2e3da68cc847"
                      className="w-10 h-12 p-2 bg-slate-100 rounded-md hover:bg-slate-200  px-4 mr-2">
                      <FontAwesomeIcon
                        style={{ color: "#6c757d" }}
                        icon={faEye}
                      />
                    </a>
                    <a
                      href="https://demo.bastisapp.com/backoffice/preprint/pdf?order_uuid=0e8ed840-9172-11ee-b2ff-2e3da68cc847"
                      target="_blank"
                      className="w-10 h-12 p-2 bg-slate-100 rounded-md hover:bg-slate-200  px-4 mr-2">
                      <FontAwesomeIcon
                        style={{ color: "#6c757d" }}
                        icon={faDownload}
                      />
                    </a>
                  </td>
                </tr>
                <tr className="border-b-2 border-slate-300 ">
                  <td class="p-3  align-middle">
                    <div class="d-flex align-items-center">
                      <div class="mr-2">
                        <div class="blob red"></div>
                      </div>
                      <div>
                        <div>
                          <a
                            href="https://demo.bastisapp.com/backoffice/order/view?order_uuid=91f73eb0-911a-11ee-b2ff-2e3da68cc847"
                            class="text-emerald-500 font-weight-bold hover:text-blue-950 mb-1">
                            Order #16439
                          </a>
                        </div>
                        <div>
                          <a
                            style={{ color: "#6c757d" }}
                            className="font-bold text-muted font-weight-bold hover-text-primary">
                            Chico Rose
                          </a>
                        </div>
                        <div className="text-xs">Yesterday</div>
                      </div>
                    </div>
                  </td>
                  <td width="15%" class="text-left align-middle">
                    McDonald's
                  </td>
                  <td class="text-right align-middle">
                    <span className="font-bold block">$121.00</span>
                    <span
                      style={{ fontSize: "75%" }}
                      className=" bg-yellow-300 text-center text-black font-semibold pt-0.5 pb-0.5 pl-0.5 pr-0.5 leading-none rounded">
                      pay
                    </span>
                  </td>
                  <td class="text-right align-middle">
                    <div>Dinein</div>
                    <span
                      style={{ color: "#6c757d" }}
                      class="text-muted font-weight-500">
                      Pay on delivery
                    </span>
                  </td>
                  <td class="text-right align-middle">
                    <span
                      style={{ fontSize: "75%" }}
                      className=" bg-emerald-300 text-center text-black font-semibold pt-0.5 pb-0.5 pl-0.5 pr-0.5 leading-none rounded">
                      new
                    </span>
                  </td>
                  <td class="text-right align-middle pr-0">
                    <a
                      href="https://demo.bastisapp.com/backoffice/order/view?order_uuid=91f73eb0-911a-11ee-b2ff-2e3da68cc847"
                      class="w-10 h-12 p-2 bg-slate-100 rounded-md hover:bg-slate-200  px-4 mr-2">
                      <FontAwesomeIcon
                        style={{ color: "#6c757d" }}
                        icon={faEye}
                      />
                    </a>
                    <a
                      href="https://demo.bastisapp.com/backoffice/preprint/pdf?order_uuid=91f73eb0-911a-11ee-b2ff-2e3da68cc847"
                      target="_blank"
                      class="w-10 h-12 p-2 bg-slate-100 rounded-md hover:bg-slate-200  px-4 mr-2">
                      <FontAwesomeIcon
                        style={{ color: "#6c757d" }}
                        icon={faDownload}
                      />
                    </a>
                  </td>
                </tr>
                <tr className="border-b-2 border-slate-300 ">
                  <td class="p-3  align-middle">
                    <div class="d-flex align-items-center">
                      <div class="mr-2">
                        <div class="blob green mb-1"></div>
                        <div class="blob red"></div>
                      </div>
                      <div>
                        <div>
                          <a
                            href="https://demo.bastisapp.com/backoffice/order/view?order_uuid=192b47e9-913e-11ee-b2ff-2e3da68cc847"
                            class="text-emerald-500 font-weight-bold hover:text-blue-950 mb-1">
                            Order #16445
                          </a>
                        </div>
                        <div>
                          <a
                            style={{ color: "#6c757d" }}
                            className="font-bold text-muted font-weight-bold hover-text-primary">
                            Dharmaraj Rathod
                          </a>
                        </div>
                        <div className="text-xs">Yesterday</div>
                      </div>
                    </div>
                  </td>
                  <td width="15%" class="text-left align-middle">
                    McDonald's
                  </td>
                  <td class="text-right align-middle">
                    <span className="font-bold block">$54.59</span>
                    <span
                      style={{ fontSize: "75%" }}
                      className=" bg-blue-900 text-center text-white font-semibold pt-0.5 pb-0.5 pl-0.5 pr-0.5 leading-none rounded">
                      unpaid
                    </span>
                  </td>
                  <td class="text-right align-middle">
                    <div>Pickup</div>
                    <span
                      style={{ color: "#6c757d" }}
                      class="text-muted font-weight-500">
                      Cash On delivery
                    </span>
                  </td>
                  <td class="text-right align-middle">
                    <span
                      style={{ fontSize: "75%" }}
                      className=" bg-emerald-300 text-center text-black font-semibold pt-0.5 pb-0.5 pl-0.5 pr-0.5 leading-none rounded">
                      new
                    </span>
                  </td>
                  <td class="text-right align-middle pr-0">
                    <a
                      href="https://demo.bastisapp.com/backoffice/order/view?order_uuid=192b47e9-913e-11ee-b2ff-2e3da68cc847"
                      class="w-10 h-12 p-2 bg-slate-100 rounded-md hover:bg-slate-200  px-4 mr-2">
                      <FontAwesomeIcon
                        style={{ color: "#6c757d" }}
                        icon={faEye}
                      />
                    </a>
                    <a
                      href="https://demo.bastisapp.com/backoffice/preprint/pdf?order_uuid=192b47e9-913e-11ee-b2ff-2e3da68cc847"
                      target="_blank"
                      class="w-10 h-12 p-2 bg-slate-100 rounded-md hover:bg-slate-200  px-4 mr-2">
                      <FontAwesomeIcon
                        style={{ color: "#6c757d" }}
                        icon={faDownload}
                      />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td class="p-3  align-middle">
                    <div class="d-flex align-items-center">
                      <div class="mr-2">
                        <div class="blob green mb-1"></div>
                        <div class="blob red"></div>
                      </div>
                      <div>
                        <div>
                          <a
                            href="https://demo.bastisapp.com/backoffice/order/view?order_uuid=a4417edc-9128-11ee-b2ff-2e3da68cc847"
                            class="text-emerald-500 font-weight-bold hover:text-blue-950 mb-1">
                            Order #16441
                          </a>
                        </div>
                        <div>
                          <a
                            style={{ color: "#6c757d" }}
                            className="font-bold text-muted font-weight-bold hover-text-primary">
                            Kaua Torres
                          </a>
                        </div>
                        <div className="text-xs">Yesterday</div>
                      </div>
                    </div>
                  </td>
                  <td width="15%" class="text-left align-middle">
                    McDonald's
                  </td>
                  <td class="text-right align-middle">
                    <span className="font-bold block">$141.08</span>
                    <span
                      style={{ fontSize: "75%" }}
                      className=" bg-yellow-300 text-center text-black font-semibold pt-0.5 pb-0.5 pl-0.5 pr-0.5 leading-none rounded">
                      paid
                    </span>
                  </td>
                  <td class="text-right align-middle">
                    <div>Pickup</div>
                    <span
                      style={{ color: "#6c757d" }}
                      class="text-muted font-weight-500">
                      Mercadopago
                    </span>
                  </td>
                  <td class="text-right align-middle">
                    <span
                      style={{ fontSize: "75%" }}
                      className=" bg-emerald-300 text-center text-black font-semibold pt-0.5 pb-0.5 pl-0.5 pr-0.5 leading-none rounded">
                      new
                    </span>
                  </td>
                  <td class="text-right align-middle pr-0">
                    <a
                      href="https://demo.bastisapp.com/backoffice/order/view?order_uuid=a4417edc-9128-11ee-b2ff-2e3da68cc847"
                      class="w-10 h-12 p-2 bg-slate-100 rounded-md hover:bg-slate-200  px-4 mr-2">
                      <FontAwesomeIcon
                        style={{ color: "#6c757d" }}
                        icon={faEye}
                      />
                    </a>
                    <a
                      href="https://demo.bastisapp.com/backoffice/preprint/pdf?order_uuid=a4417edc-9128-11ee-b2ff-2e3da68cc847"
                      target="_blank"
                      class="w-10 h-12 p-2 bg-slate-100 rounded-md hover:bg-slate-200  px-4 mr-2">
                      <FontAwesomeIcon
                        style={{ color: "#6c757d" }}
                        icon={faDownload}
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* <div class="d-block d-sm-none text-right">
                  <div class="dropdown btn-group dropleft">
                    <button
                      class="btn btn-sm dropdown-togglex dropleft"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <i class="zmdi zmdi-more-vert"></i>
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item active">All</a>
                      <a class="dropdown-item">Processing</a>
                      <a class="dropdown-item">Ready</a>
                      <a class="dropdown-item">Completed</a>
                    </div>
                  </div>
                </div> */}
          </div>

          <div className="border p-3 col-span-2 rounded-md">
            <div className="flex justify-between">
              <h1 className="text-lg font-bold">Top Selling Products</h1>
              <a>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </a>
            </div>



            <table className="mt-4">
              <thead>
                <tr className="border border-slate-300 border-b-1">
                  <th class="p-0 mw-200"></th>
                  <th class="p-0 mw-200"></th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="border-b-2 border-slate-300">
                  <td className="pt-2 pb-2  text-left align-middle">
                    <div className="flex">
                      <div class="mr-3">
                        <a>
                          <img
                            src={Burger}
                            className="photo_radious"
                          />
                        </a>
                      </div>
                      <div class="flex-col">
                        <a
                          href="javascript:;"
                          class="font-weight-bold hover-text-primary mb-1">
                          Sandwich
                        </a>
                        <div>
                          <small class="text-muted">
                           Since Sun, January 30
                          </small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="text-right align-middle">
                    <p class="m-0 text-muted">303 orders</p>
                  </td>
                </tr>
                <tr className="border-b-2 border-slate-300">
                  <td className="pt-2 pb-2  text-left align-middle">
                    <div class="flex">
                      <div class="mr-3">
                        <a>
                          <img
                            src={Burger}
                            className="photo_radious"
                          />
                        </a>
                      </div>
                      <div class="flex-col">
                        <a
                          href="javascript:;"
                          class="font-weight-bold hover-text-primary mb-1">
                          john Doe
                        </a>
                        <div>
                          <small class="text-muted">
                          Since Sun, January 30
                          </small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="text-right align-middle">
                    <p class="m-0 text-muted">69 orders</p>
                  </td>
                </tr>
                <tr className="border-b-2 border-slate-300">
                  <td className="pt-2 pb-2  text-left align-middle">
                    <div class="flex">
                      <div class="mr-3">
                        <a>
                          <img
                            src={Burger}
                            className="photo_radious"
                          />
                        </a>
                      </div>
                      <div class="flex-col">
                        <a
                          href="javascript:;"
                          class="font-weight-bold hover-text-primary mb-1">
                          Steak
                        </a>
                        <div>
                          <small class="text-muted">
                          Since Sun, January 30
                          </small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="text-right align-middle">
                    <p class="m-0 text-muted">58 orders</p>
                  </td>
                </tr>
                <tr className="border-b-2 border-slate-300">
                  <td className="pt-2 pb-2  text-left align-middle">
                    <div class="flex">
                      <div class="mr-3">
                        <a>
                          <img
                            src={Burger}
                            className="photo_radious"
                          />
                        </a>
                      </div>
                      <div class="flex-col">
                        <a
                          href="javascript:;"
                          class="font-weight-bold hover-text-primary mb-1">
                          Tuna Steak
                        </a>
                        <div>
                          <small class="text-muted">
                          Since Sun, January 30
                          </small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="text-right align-middle">
                    <p class="m-0 text-muted">58 orders</p>
                  </td>
                </tr>
                <tr className="border-b-2 border-slate-300">
                  <td className="pt-2 pb-2  text-left align-middle">
                    <div class="flex">
                      <div class="mr-3">
                        <a>
                          <img
                            src={Burger}
                            className="photo_radious"
                          />
                        </a>
                      </div>
                      <div class="flex-col">
                        <a
                          href="javascript:;"
                          class="font-weight-bold hover-text-primary mb-1">
                          Shrimp
                        </a>
                        <div>
                          <small class="text-muted">
                          Since Sun, January 30
                          </small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="text-right align-middle">
                    <p class="m-0 text-muted">45 orders</p>
                  </td>
                </tr>
                <tr className="border-b-2 border-slate-300">
                  <td className="pt-2 pb-2  text-left align-middle">
                    <div class="flex">
                      <div class="mr-3">
                        <a>
                          <img
                            src={Burger}
                            className="photo_radious"
                          />
                        </a>
                      </div>
                      <div class="flex-col">
                        <a
                          href="javascript:;"
                          class="font-weight-bold hover-text-primary mb-1">
                          Cake
                        </a>
                        <div>
                          <small class="text-muted">
                          Since Sun, January 30
                          </small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="text-right align-middle">
                    <p class="m-0 text-muted">45 orders</p>
                  </td>
                </tr>
                <tr className="">
                  <td className="pt-2 pb-2  text-left align-middle">
                    <div class="flex">
                      <div class="mr-3">
                        <a>
                          <img
                            src={Burger}
                            className="photo_radious"
                          />
                        </a>
                      </div>
                      <div class="flex-col">
                        <a
                          href="javascript:;"
                          class="font-weight-bold hover-text-primary mb-1">
                          Burger
                        </a>
                        <div>
                          <small class="text-muted">
                          Since Sun, January 30
                          </small>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="text-right align-middle">
                    <p class="m-0 text-muted">45 orders</p>
                  </td>
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
