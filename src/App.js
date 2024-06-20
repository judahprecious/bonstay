import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Registration from "./components/Registration";
import AddReview from "./components/AddReview";
import Booking from "./components/Booking";
import Bookroom from "./components/Bookroom";
import Home from "./components/Home";
import Hotels from "./components/Hotels";
import Login from "./components/Login";
import Reshedule from "./components/Reschedule";
import ViewReview from "./components/ViewReview";

const App = () => {
  return (
    <>
      <div className="image_container">
        <img src="./images/background.png" alt="background image" />
      </div>

    <BrowserRouter>

     <Routes>

        <Route path="/register" element={<Registration/>} />
        <Route path="/addReview" element={<AddReview/>} />
        <Route path="/bookings" element={<Booking/>} />
        <Route path="/bookroom" element={<Bookroom/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/hotels" element={<Hotels/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/reschedule" element={<Reshedule/>} />
        <Route path="/viewReview" element={<ViewReview/>} />

      </Routes>
    </BrowserRouter>

    </>
  );
};

export default App;
