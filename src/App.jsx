import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Application from "./pages/Application/Application";
import Menubar from "./components/Menubar/Menubar"
import Chat from "./pages/Chat/chat";
import Calender from "./pages/Calender/Calender";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
import Products from "./pages/Products/Products";
import Categories from "./pages/Categories/Categories";
import Categoriesform from "./pages/Categoriesform/Categoriesform";
import Profile from "./components/My_Profile/Profile";
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
         <div style={click ? {width : "214%",transition : ".5s"}:{width: "84%",transition : ".5s"}} className="contentContainer bg-slate-50">
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
        },

      ]
    },
  
  ]);
  return <RouterProvider router={router} />;
  
}



export default App;
