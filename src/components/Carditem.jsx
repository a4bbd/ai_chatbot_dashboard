import React from "react";
// import shop from '../assets/shop.png'
import shop2 from "../assets/shop2.jpg";
// import shop3 from '../assets/shop3.jpg'
// import shop4 from '../assets/shop4.jpg'
// import shop5 from '../assets/shop5.jpg'
import product_1 from "../assets/product_1.jpg";
import product_2 from "../assets/product_2.jpg";
import product_3 from "../assets/product_3.jpg";
import product_4 from "../assets/product_4.jpg";
import product_5 from "../assets/product_5.jpg";
import product_6 from "../assets/product_6.jpg";
import product_7 from "../assets/product_7.jpg";
import product_8 from "../assets/product_8.jpg";
import product_9 from "../assets/product_9.jpg";
import product_10 from "../assets/product_10.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

const Carditem = () => {
  return (
    <div className="w-[93.75em] mx-auto m-5 relative">
      <div className="grid justify-start grid-cols-3 gap-4 ">
        <div className="rounded-lg border-2 relative border-slate-200 bg-white h-[150px]">
          <img
            className="h-full w-48 rounded-l-lg object-cover"
            src={product_1}
          />
          <div className="absolute top-2 right-12 ">
          <a href="https://www.w3schools.com" className="hover:underline">BBQ Chicken Burger</a>
            <p className="font-mono antialiased	">
              BDT <span>200.00</span>{" "}
            </p>
            <p className="opacity-60 font-medium">
              This burger has too much chees..
            </p>
            <button className="absolute bottom-[-59px] border-2 bg-white hover:bg-black hover:text-white	border-slate-900 left-0 font-bold text-black p-2 rounded">
              <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
            </button>
            <button className="absolute bottom-[-59px] right-[-37px] bg-slate-900 text-white p-2 rounded">
              <FontAwesomeIcon icon={faCreditCard} /> Buy Now
            </button>
          </div>
        </div>
        <div className="rounded-lg border-2 relative border-slate-200 bg-white h-[150px]">
          <img
            className="h-full w-48 rounded-l-lg object-cover"
            src={product_2}
          />
          <div className="absolute top-2 right-12 ">
          <a href="" className="hover:underline">BBQ Chicken Cheese Pizza</a>
            <p className="font-mono antialiased	">
              BDT <span>300.00</span>{" "}
            </p>
            <p className="opacity-60 font-medium">
              Who is Going to get the Bigges..
            </p>
            <button className="absolute bottom-[-59px] border-2 bg-white hover:bg-black hover:text-white	border-slate-900 left-0 font-bold text-black p-2 rounded">
              <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
            </button>
            <button className="absolute bottom-[-59px] right-[-37px] bg-slate-900 text-white p-2 rounded">
              <FontAwesomeIcon icon={faCreditCard} /> Buy Now
            </button>
          </div>
        </div>
        <div className="rounded-lg border-2 relative border-slate-200 bg-white h-[150px]">
          <img
            className="h-full w-48 rounded-l-lg object-cover"
            src={product_3}
          />
          <div className="absolute top-2 right-12 ">
          <a href="" className="hover:underline">BBQ Rice Bowl?</a>
            <p className="font-mono antialiased	">
              BDT <span>200.00</span>{" "}
            </p>
            <p className="opacity-60 font-medium">
              Who Doesn't Love BBQ?And If it..
            </p>
            <button className="absolute bottom-[-59px] border-2 bg-white hover:bg-black hover:text-white	border-slate-900 left-0 font-bold text-black p-2 rounded">
              <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
            </button>
            <button className="absolute bottom-[-59px] right-[-37px] bg-slate-900 text-white p-2 rounded">
              <FontAwesomeIcon icon={faCreditCard} /> Buy Now
            </button>
          </div>
        </div>{" "}
      </div>
      <div className="grid justify-start grid-cols-3 mt-4 gap-4 ">
        <div className="rounded-lg border-2 relative border-slate-200 bg-white h-[150px]">
          <img
            className="h-full w-48 rounded-l-lg object-cover"
            src={product_4}
          />
          <div className="absolute top-2 right-12 ">
          <a href="" className="hover:underline">Black Burger</a>
            <p className="font-mono antialiased	">
              BDT <span>280.00</span>{" "}
            </p>
            <p className="opacity-60 font-medium">
              This burger has too much chees..
            </p>
            <button className="absolute bottom-[-59px] border-2 bg-white hover:bg-black hover:text-white	border-slate-900 left-0 font-bold text-black p-2 rounded">
              <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
            </button>
            <button className="absolute bottom-[-59px] right-[-37px] bg-slate-900 text-white p-2 rounded">
              <FontAwesomeIcon icon={faCreditCard} /> Buy Now
            </button>
          </div>
        </div>
        <div className="rounded-lg border-2 relative border-slate-200 bg-white h-[150px]">
          <img
            className="h-full w-48 rounded-l-lg object-cover"
            src={product_5}
          />
          <div className="absolute top-2 right-12 ">
          <a href="" className="hover:underline">Hot Wings</a>
            <p className="font-mono antialiased	">
              BDT <span>160.00</span>{" "}
            </p>
            <p className="opacity-60 font-medium">
              Those who like chicken,have wi..
            </p>
            <button className="absolute bottom-[-59px] border-2 bg-white hover:bg-black hover:text-white	border-slate-900 left-0 font-bold text-black p-2 rounded">
              <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
            </button>
            <button className="absolute bottom-[-59px] right-[-37px] bg-slate-900 text-white p-2 rounded">
              <FontAwesomeIcon icon={faCreditCard} /> Buy Now
            </button>
          </div>
        </div>
        <div className="rounded-lg border-2 relative border-slate-200 bg-white h-[150px]">
          <img
            className="h-full w-48 rounded-l-lg object-cover"
            src={product_6}
          />
          <div className="absolute top-2 right-12 ">
          <a href="" className="hover:underline">Red Sauce Pasta</a>
            <p className="font-mono antialiased	">
              BDT <span>160.00</span>{" "}
            </p>
            <p className="opacity-60 font-medium">
              This burger has too much chees..
            </p>
            <button className="absolute bottom-[-59px] border-2 bg-white hover:bg-black hover:text-white	border-slate-900 left-0 font-bold text-black p-2 rounded">
              <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
            </button>
            <button className="absolute bottom-[-59px] right-[-37px] bg-slate-900 text-white p-2 rounded">
              <FontAwesomeIcon icon={faCreditCard} /> Buy Now
            </button>
          </div>
        </div>{" "}
      </div>
      <div className="grid justify-start grid-cols-3 mt-4 gap-4 ">
        <div className="rounded-lg border-2 relative border-slate-200 bg-white h-[150px]">
          <img
            className="h-full w-48 rounded-l-lg object-cover"
            src={product_7}
          />
          <div className="absolute top-2 right-12 ">
          <a href="" className="hover:underline">Sausage Surprise Pizza</a>
            <p className="font-mono antialiased	">
              BDT <span>250.00</span>{" "}
            </p>
            <p className="opacity-60 font-medium">
              This burger has too much chees..
            </p>
            <button className="absolute bottom-[-59px] border-2 bg-white hover:bg-black hover:text-white	border-slate-900 left-0 font-bold text-black p-2 rounded">
              <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
            </button>
            <button className="absolute bottom-[-59px] right-[-37px] bg-slate-900 text-white p-2 rounded">
              <FontAwesomeIcon icon={faCreditCard} /> Buy Now
            </button>
          </div>
        </div>
        <div className="rounded-lg border-2 relative border-slate-200 bg-white h-[150px]">
          <img
            className="h-full w-48 rounded-l-lg object-cover"
            src={product_8}
          />
          <div className="absolute top-2 right-12 ">
          <a href="" className="hover:underline">BBQ Chicken Burger</a>
            <p className="font-mono antialiased	">
              BDT <span>200.00</span>{" "}
            </p>
            <p className="opacity-60 font-medium">
              This burger has too much chees..
            </p>
            <button className="absolute bottom-[-59px] border-2 bg-white hover:bg-black hover:text-white	border-slate-900 left-0 font-bold text-black p-2 rounded">
              <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
            </button>
            <button className="absolute bottom-[-59px] right-[-37px] bg-slate-900 text-white p-2 rounded">
              <FontAwesomeIcon icon={faCreditCard} /> Buy Now
            </button>
          </div>
        </div>
        <div className="rounded-lg border-2 relative border-slate-200 bg-white h-[150px]">
          <img
            className="h-full w-48 rounded-l-lg object-cover"
            src={product_9}
          />
          <div className="absolute top-2 right-12 ">
          <a href="" className="hover:underline">Set Menu-2</a>
            <p className="font-mono antialiased	">
              BDT <span>300.00</span>{" "}
            </p>
            <p className="opacity-60 font-medium">
              This burger has too much chees..
            </p>
            <button className="absolute bottom-[-59px] border-2 bg-white hover:bg-black hover:text-white	border-slate-900 left-0 font-bold text-black p-2 rounded">
              <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
            </button>
            <button className="absolute bottom-[-59px] right-[-37px] bg-slate-900 text-white p-2 rounded">
              <FontAwesomeIcon icon={faCreditCard} /> Buy Now
            </button>
          </div>
        </div>{" "}
      </div>

      <div className="grid justify-start grid-cols-3 mt-4 gap-4 ">
        <div className="rounded-lg border-2 relative border-slate-200 bg-white h-[150px]">
          <img
            className="h-full w-48 rounded-l-lg object-cover"
            src={product_1}
          />
          <div className="absolute top-2 right-12 ">
          <a href="" className="hover:underline">Thai Soup</a>
            <p className="font-mono antialiased	">
              BDT <span>150.00</span>{" "}
            </p>
            <p className="opacity-60 font-medium">
              This burger has too much chees..
            </p>
            <button className="absolute bottom-[-59px] border-2 bg-white hover:bg-black hover:text-white	border-slate-900 left-0 font-bold text-black p-2 rounded">
              <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
            </button>
            <button className="absolute bottom-[-59px] right-[-37px] bg-slate-900 text-white p-2 rounded">
              <FontAwesomeIcon icon={faCreditCard} /> Buy Now
            </button>
          </div>
        </div>
        <div className="rounded-lg border-2 relative border-slate-200 bg-white h-[150px]">
          <img
            className="h-full w-48 rounded-l-lg object-cover"
            src={product_2}
          />
          <div className="absolute top-2 right-12 ">
            <p className="font-mono antialiased	">Twin Cheese & Patty Burgers</p>
            <p className="font-mono antialiased	">
              BDT <span>300.00</span>{" "}
            </p>
            <p className="opacity-60 font-medium">
              Double the flavours, double th..
            </p>
            <button className="absolute bottom-[-59px] border-2 bg-white hover:bg-black hover:text-white	border-slate-900 left-0 font-bold text-black p-2 rounded">
              <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
            </button>
            <button className="absolute bottom-[-59px] right-[-37px] bg-slate-900 text-white p-2 rounded">
              <FontAwesomeIcon icon={faCreditCard} /> Buy Now
            </button>
          </div>
        </div>
        <div className="rounded-lg border-2 relative border-slate-200 bg-white h-[150px]">
          <img
            className="h-full w-48 rounded-l-lg object-cover"
            src={product_3}
          />
          <div className="absolute top-2 right-12 ">
            <p className="font-mono antialiased	">BBQ Chicken Burger</p>
            <p className="font-mono antialiased	">
              BDT <span>200.00</span>{" "}
            </p>
            <p className="opacity-60 font-medium">
              This burger has too much chees..
            </p>
            <button className="absolute bottom-[-59px] border-2 bg-white hover:bg-black hover:text-white	border-slate-900 left-0 font-bold text-black p-2 rounded">
              <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
            </button>
            <button className="absolute bottom-[-59px] right-[-37px] bg-slate-900 text-white p-2 rounded">
              <FontAwesomeIcon icon={faCreditCard} /> Buy Now
            </button>
          </div>
        </div>{" "}
      </div>
      <div className="grid justify-start grid-cols-3 mt-4 gap-4 ">
        <div className="rounded-lg border-2 relative border-slate-200 bg-white h-[150px]">
          <img
            className="h-full w-48 rounded-l-lg object-cover"
            src={product_10}
          />
          <div className="absolute top-2 right-12 ">
            <p className="font-mono antialiased	">BBQ Chicken Burger</p>
            <p className="font-mono antialiased	">
              BDT <span>200.00</span>{" "}
            </p>
            <p className="opacity-60 font-medium">
              This burger has too much chees..
            </p>
            <button className="absolute bottom-[-59px] border-2 bg-white hover:bg-black hover:text-white	border-slate-900 left-0 font-bold text-black p-2 rounded">
              <FontAwesomeIcon icon={faCartShopping} /> Add To Cart
            </button>
            <button className="absolute bottom-[-59px] right-[-37px] bg-slate-900 text-white p-2 rounded">
              <FontAwesomeIcon icon={faCreditCard} /> Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carditem;
