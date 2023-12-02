import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Application from "./pages/Application/Application";
import Menubar from "./components/Menubar/Menubar"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
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
        {
          path : "/application",
          element : <Application />
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
  
}



export default App;
