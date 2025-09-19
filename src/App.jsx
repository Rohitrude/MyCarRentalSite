import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import CarDetails from "./Pages/CarDetails";
import Cars from "./Pages/Cars";
import MyBookings from "./Pages/MyBookings";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();
  const isHideBgImg = ["/cars", "/my-bookings"].includes(location.pathname) || location.pathname.startsWith("/owner");
  const isOwnerPath = location.pathname.startsWith("/owner");

  return (
    <div className="relative h-screen overflow-y-auto">
      {!isHideBgImg && (
        <img
          src="/hero-bg-img.webp"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ pointerEvents: "none" }}
        />
      )}
      {!isHideBgImg && <div className="absolute inset-0 bg-black/60 z-10"></div>}
      <div className="relative z-20">
        {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardetails" element={<CarDetails />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/my-bookings" element={<MyBookings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
