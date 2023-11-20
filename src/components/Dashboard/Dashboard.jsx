import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-12  h-[800px]">
        <h1 className="bg-red-700 col-span-2">Element 2</h1>
        <h1 className="bg-amber-400 col-span-10 ">
          <div className="grid gap-1 grid-cols-4 mt-2 ml-2">
            <h1>
              {" "}
              <a
                href="#"
                class="block max-w-xs  py-5 px-10 relative bg-white border border-gray-200 rounded-sm shadow  dark:border-gray-700 ">
                <FontAwesomeIcon
                  className="absolute top-5 left-0"
                  icon={faCartPlus}
                />
                <h1>Total Order</h1>
              </a>
            </h1>
            <h1>
              <a
                href="#"
                class="block max-w-xs py-5 px-10 relative bg-white border border-gray-200 rounded-sm shadow  dark:border-gray-700 ">
                <FontAwesomeIcon
                  className="absolute top-5 left-0"
                  icon={faCartPlus}
                />
                <h1>Total Order</h1>
              </a>
            </h1>
            <h1>
              <a
                href="#"
                class="block max-w-xs  py-5 px-10 relative bg-white border border-gray-200 rounded-sm shadow  dark:border-gray-700 ">
                <FontAwesomeIcon
                  className="absolute top-5 left-0"
                  icon={faCartPlus}
                />
                <h1>Total Order</h1>
              </a>
            </h1>
            <h1>
              <a
                href="#"
                class="block max-w-xs  py-5 px-10 relative bg-white border border-gray-200 rounded-sm shadow  dark:border-gray-700 ">
                <FontAwesomeIcon
                  className="absolute top-5 left-0"
                  icon={faCartPlus}
                />
                <h1>Total Order</h1>
              </a>
            </h1>
          </div>
        </h1>
      </div>
    </>
  );
};

export default Dashboard;
