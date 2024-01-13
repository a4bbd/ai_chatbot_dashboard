import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Application from "./pages/Application/Application";
import Menubar from "./components/Menubar/Menubar"
// import Chat from "./pages/Chat/chat";
import Calender from "./pages/Calender/Calender";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
import Products from "./pages/Products/Products";
import Categories from "./pages/Categories/Categories";
import Categoriesform from "./pages/Categoriesform/Categoriesform";
import Profile from "./components/My_Profile/Profile";
import Importitems from "./pages/importItems/Importitems";
import Coupons from "./pages/Coupons/Coupons";
import CouponForm from "./pages/CouponForm/CouponForm";
import Product from "./pages/Sitepages/Product";
import Navbar from "./pages/Sitepages/Navbar"
import AddProductform from "./pages/AddProductForm/AddProductform";
import Orders from "./pages/Orders/Orders";
import ProductEdit from "./pages/ProductEdit/ProductEdit";
import ProductDetils from "./pages/ProductDetails/ProductDetils";
import DeliveryPoints from "./pages/DeliveryPoints/DeliveryPoints";
import Deliverypointsform from "./pages/DeliveryPoints/Deliverypointsform";
function App() {
  const Layout = ()=>{

    const [click,setValue] = useState();

    const getValue = (data)=>{
         setValue(data);
   }

    return (
      <div>
        <Header getValue={getValue} />
        <div className="maincontainer">
         <div className="menuContainer">
             <Menubar click={click}  />
          </div>
          {/* style={click ? {width: "110px"}:{width: "300px"}} */}
         <div style={click ? {width : "214%",transition : ".5s"}:{width: "96%",transition : ".5s"}} className="contentContainer scroll__bar bg-slate-50">
             <Outlet />
         </div>
        </div>
      </div>
    )
  };
  const router = createBrowserRouter([
    {  
      path : "/",
      element : <Layout />,
      children:[
        {
          path : "/",
          element : <Home />
        },
        ,
        {
          path: "/chat",
          element: <Chat />,
        },{
          path:"/calendar",
          element:<Calender />
        },
        ,{
          path:"/categories",
          element:<Categories />
        },
        {
           path:"/products",
           element: <Products   />
        },{
          path:"/categoriesform",
          element:<Categoriesform />
        },{
          path:"/myprofile",
          element:<Profile />
        },{
          path:"/importitems",
          element:<Importitems />
        },{
          path:"/coupons",
          element:<Coupons />
        },{
          path : "/couponform",
          element : <CouponForm />
        },{
          path:"/addproduct",
          element : <AddProductform />
        },{
          path:"/orders",
          element : <Orders />
        },{
          path:"/productedit",
          element : <ProductEdit />
        },{
          path:"/productdetails",
          element : <ProductDetils />
        },{
          path : "/deliverypoint",
          element : <DeliveryPoints />
        },{
          path : "/deliverypointfrom",
          element : <Deliverypointsform />
        }

      ],
    },
     {
      path:"/store",
      element: <Navbar />
     },{
      path : "/product",
      element : <Product />
     }
  ]);
  return <RouterProvider router={router} />;
  
}



export default App;
