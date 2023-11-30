import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import totalOrder from "../../assets/total_order.svg"
import "./home.css";
const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">

        <div className="bg-slate-400 rounded-md">
          <div className="p-5 flex gap-3">
            <div className="">
              <p className=" bg-red-100 h-[48px] w-[48px] rounded-full "> <img className="translate-y-3 translate-x-3 " src={totalOrder} /></p>
              
              
            </div>
            <div class="">
              <h5>
                $<span className="">307144</span>
              </h5>
              <h6>Total Order</h6>
            </div>
          </div>
        </div>

        <div className="bg-slate-400 rounded-md">
          <div className="">
            <div className="">
              <span>
                <img src="assets/img/icons/dash1.svg" alt="img" />
              </span>
            </div>
            <div class="">
              <h5>
                $<span className=""></span>
              </h5>
              <h6>Recovered Cart</h6>
            </div>
          </div>
        </div>

        <div className="bg-slate-400 rounded-md">
          <div className="">
            <div className="">
              <span>
              
              </span>
            </div>
            <div class="">
              <h5>
                <span className="">10</span>
              </h5>
              <h6>Checkout Order</h6>
            </div>
          </div>
        </div>

        <div className="bg-slate-400 rounded-md">
          <div className="">
            <div className="">
              <span>
                <img src="assets/img/icons/dash1.svg" alt="img" />
              </span>
            </div>
            <div class="">
              <h5>
                $<span className="">$10000</span>
              </h5>
              <h6>Total Earnings</h6>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
