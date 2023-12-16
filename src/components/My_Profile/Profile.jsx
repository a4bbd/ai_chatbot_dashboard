import React from "react";
import customer5 from "../../assets/customer5.jpg";
import edit from "../../assets/edit-set.svg";
import "./Profile.css";
const Profile = () => {
  return (
    <div>
      <div className="page-header">
        <div class="page-title">
          <h4 className="font-bold text-lg">Profile</h4>
          <h6 style={{ color: "#555" }} className="text-sm font-normal">
            User Profile
          </h6>
        </div>
      </div>
      <div className="border rounded mt-4 bg-white p-3">
        <div
          className="w-full rounded"
          style={{
            height: "109px",
            background: "linear-gradient(90deg, #EA5455 0%, #FF9F43 100%)",
          }}></div>

        <div className="profile-top flex mt-4 justify-between">
          <div className="profile-content flex">
            <div className="relative ">
              <img
                className="rounded-full shadow-xl  object-cover profile-contentimg max-w-full border-4 ml-2 border-white mt-[-69px]"
                src={customer5}
                alt="img"
                id="blah"
              />

              <div className="">
                <label className="cursor-pointer " for="files" class="btn">
                  <div className="image-uploads h-full w-full max-auto ">
                    <img
                      className="w-8 h-8 absolute top-0 left-14 bg-orange-300 rounded-full"
                      src={edit}
                      alt="img"
                    />
                  </div>
                </label>
                <input
                  id="files"
                  className=""
                  style={{ visibility: "hidden" }}
                  type="file"
                />
              </div>
            </div>
            <div className="ml-[-161px] profile-contentname">
              <h2 className="text-lg font-bold">William Castillo</h2>
              <h4 style={{ color: "#777" }} className="text-sm">
                Updates Your Photo and Personal Details.
              </h4>
            </div>
          </div>

          <div className="">
            <a
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white rounded pt-3 pb-3 w-28 inline-block text-center me-2">
              Save
            </a>
            <a
              href="#"
              className="text-white hover:bg-slate-800  bg-slate-700 pt-3 pb-3 rounded w-28 inline-block text-center">
              Cancel
            </a>
          </div>
        </div>

          <div className="mt-2">
          <div className="flex gap-6 w-full">
            <div className="w-full">
              <label>First Name</label>
              <input
                className=" mt-2 appearance-none focus:border-orange-500 h-11 border-slate-300  border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none "
                type="text"
                placeholder="First Name"
              />
            </div>

            <div className="w-full">
              <label>Last Name</label>
              <input
                class="  mt-2 appearance-none focus:border-orange-500 h-11 border-slate-300  border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none "
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="flex mt-7 gap-6 w-full">
            <div className="w-full">
              <label>Email</label>
              <input
                className=" mt-2 appearance-none focus:border-orange-500 h-11  border-slate-300  border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none "
                type="email"
                placeholder="username@gmail.com"
              />
            </div>

            <div className="w-full">
              <label>Phone</label>
              <input
                class="  mt-2 appearance-none focus:border-orange-500 h-11 border-slate-300  border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none "
                type="text"
                placeholder="+8801710977178"
              />
            </div>
          </div>

          <div className="flex mt-7 gap-6 w-full">
            <div className="w-full">
              <label>User Name</label>
              <input
                className=" mt-2 appearance-none focus:border-orange-500 h-11 border-slate-300  border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none "
                type="text"
                placeholder="User Name"
              />
            </div>

            <div className="w-full">
              <label>Password</label>
              <input
                class="  mt-2 appearance-none focus:border-orange-500 h-11 border-slate-300   border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none "
                type="password"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="mt-4">
            <a
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white rounded pt-3 pb-3 w-28 inline-block text-center me-2">
              Save
            </a>
            <a
              href="#"
              className="text-white hover:bg-slate-800  bg-slate-700 pt-3 pb-3 rounded w-28 inline-block text-center">
              Cancel
            </a>
          </div>

          </div>

      </div>
      
    </div>
  );
};

export default Profile;
