import React from "react";

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./cmponents/Home";
import Login from "./cmponents/Login";
import Navbar from "./cmponents/navbar";
import Register from "./cmponents/Register";
import Product from "./cmponents/product";
import Payment from "./cmponents/payment";
import AdminHome from "./cmponents/AdminHome";
// import Orders from "./cmponents/Orders";
import OrderTable from "./cmponents/OrderTable";
import ViewCakesTable from "./cmponents/ViewCakesTable";
import confirmation from "./cmponents/confirmation";
//import my from "./cmponents/my";
import { ToastContainer } from 'react-toastify';



export default function App() {
  return (
    <React.Fragment>
  <ToastContainer/>
  <Navbar/>
    <div>
      <div>
      {/* <Switch> */}
      <Routes>

        <Route  path="/" element={<Home/>} exact />
        <Route path="/login" element={<Login/>} exact />
        <Route path="/register" element={<Register/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/adminhome" element={<AdminHome/>} />
        <Route path="/orders" element={<ViewCakesTable/>} />
        <Route path="/ordertable" element={<OrderTable/>} />
        <Route path="/viewcakestable" element={<ViewCakesTable/>} />
        <Route path="/confirmation" element={confirmation}  /> 
        {/* <Route path="/my" element={my}  />  */}
        {/* </Switch> */}
      </Routes>

      </div>
    </div>
    </React.Fragment>
  );
}

