import React,{useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCreditCard,
  faMoneyBill,
  faEllipsisVertical,
  faEye,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { OrderListData } from '../../dummy_data/dummy_data';

const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = OrderListData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(OrderListData.length / recordsPerPage);
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
           
           <div className="border p-3 col-span-6 rounded-md ">
            <div className="flex justify-between">
              <div class="col mb-3 mb-xl-0">
                <h5 className=" text-xl font-semibold">All Order List</h5>
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
                {records.map((order)=>(<tr className="border-b-2 border-slate-300 ">
                  <td className="align-middle p-3 ">
                    <div class="d-flex align-items-center">
                      <div class="mr-2"></div>
                      <div>
                        <div>
                          <a
                            href="https://demo.bastisapp.com/backoffice/order/view?order_uuid=42af63ba-9173-11ee-b2ff-2e3da68cc847"
                            className="text-emerald-500 font-weight-bold hover:text-blue-950 mb-1">
                            Order {order.orderNumber}
                          </a>
                        </div>
                        <div>
                          {" "}
                          <a
                            style={{ color: "#6c757d" }}
                            className="font-bold text-muted font-weight-bold hover-text-primary"
                            href="javascript:;">
                            {order.customerName}
                          </a>
                        </div>
                        <div className="text-xs">{order.time}</div>
                      </div>
                    </div>
                  </td>
                  <td width="15%" class="text-left align-middle">
                    {order.companyName}
                  </td>
                  <td class="text-right align-middle">
                    <span className="font-bold block">${order.price}</span>
                    <span
                      style={{ fontSize: "75%" }}
                      className={`${order.color}  text-center text-white font-semibold pt-0.5 pb-0.5 pl-0.5 pr-0.5 leading-none rounded`}>
                      {order.payment}
                    </span>
                  </td>
                  <td class="text-right align-middle">
                    <div>{order.status}</div>
                    <span
                      style={{ color: "#6c757d" }}
                      class="text-muted font-weight-500">
                      {order.status_track}
                    </span>
                  </td>
                  <td class="text-right align-middle">
                    <span
                      style={{ fontSize: "75%" }}
                      className={` ${order.realStatusColor} text-center color-white text-white font-semibold pt-0.5 pb-0.5 pl-0.5 pr-0.5 leading-none rounded`}>
                      {order.realStatus}
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
                </tr> ))}

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
          <div>
          <div className="mt-5 ml-3 flex  justify-between">
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
          </div>
        </div>
    );
};

export default Orders;