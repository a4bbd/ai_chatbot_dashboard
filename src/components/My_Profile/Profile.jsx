import React from "react";
import customer5 from "../../assets/customer5.jpg";
import edit from "../../assets/edit-set.svg";
import { useFormik } from "formik";
import {singUpSchema} from "../schemas";
import "./Profile.css";
const initialValues ={
  firstName:"",
  lastName:"",
  email:"",
  phone:"",
  password:"",
  confirmpassword:"",
}

const Profile = () => {
  const {values,errors,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues : initialValues,
    validationSchema : singUpSchema,
    onSubmit : (values)=>{
        console.log(values)
    }
  });
  
  

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

          <form onSubmit={handleSubmit}>
          <div className="mt-2">
          <div className="flex gap-6 w-full">
            <div className="w-full">
              <label>First Name</label>
              <input
                className=" mt-2 appearance-none focus:border-orange-500 h-11 border-slate-300  border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none "
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="First Name"
              />
              {<p>{errors.name}</p>}
              
            </div>

            <div className="w-full">
              <label>Last Name</label>
              <input
                class="  mt-2 appearance-none focus:border-orange-500 h-11 border-slate-300  border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none "
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
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
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="username@gmail.com"
              />
            </div>

            <div className="w-full">
              <label>Phone</label>
              <input
                class="  mt-2 appearance-none focus:border-orange-500 h-11 border-slate-300  border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none "
                type="text"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="+8801710977178"
              />
            </div>
          </div>

          <div className="flex mt-7 gap-6 w-full">
            <div className="w-full">
              <label>Password</label>
              <input
                className=" mt-2 appearance-none focus:border-orange-500 h-11 border-slate-300  border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none "
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="User Name"
              />
            </div>

            <div className="w-full">
              <label>Confirm Password</label>
              <input
                class="mt-2 appearance-none focus:border-orange-500 h-11 border-slate-300   border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none "
                type="password"
                name="confirmpassword"
                value={values.confirmpassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Password"
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              href="#"
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white rounded pt-3 pb-3 w-28 inline-block text-center me-2">
              Submit
            </button>
            <button
              href="#"
              type="submit"
              className="text-white hover:bg-slate-800  bg-slate-700 pt-3 pb-3 rounded w-28 inline-block text-center">
              Cancel
            </button>
          </div>

          </div>
          </form>

      </div>
      
    </div>
  );
};

export default Profile;
