import React from "react";
import state_of_foods from "../assets/state_of_foods.jpg";
const Navbar = () => {
  return (
    <div>
      <div className="h-[400px] w-[1500px] mx-auto">
        <div className="relative">
          <img
            className="h-[400px] w-[1500px] object-center  my-4 mx-auto object-cover rounded-lg"
            src={state_of_foods}
          />
          {/* <h2 className=" mono antialiased font-bold leading-8 text-4xl absolute top-8 left-[2em] text-black">State Of Foods</h2> */}
          <img
            className="absolute border-4 border-slate-950	 bottom-[-85px] left-20  h-64 w-64 rounded-full"
            src="https://app.aichatbot.xyz/upload/ecommerce/storefavicon_1_1678695964133621.jpg"
          />
        </div>
        <div className="flex justify-end gap-3">
          <button className="bg-amber-500 p-3 rounded-md px-5 hover:bg-amber-600">
            <span>+</span> Add To
          </button>
          <button className="bg-amber-500 p-3 rounded-md px-5 hover:bg-amber-600">
            Edit Profile
          </button>
          <button className="bg-amber-500 p-3 rounded-md px-5 hover:bg-amber-600">
            Another
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
