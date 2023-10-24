// Router.js
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomeRouter from "./components/Pages/HomeRouter/HomeRouter";
import Page from "./components/Pages/HomeRouter/Page";
import Contact from "./components/Pages/HomeRouter/Contact";
import Home from "./components/Pages/Home/Home";
import Page_404 from "./components/Pages/Page_404/Page_404";
import TestAntd from "./components/Test/TestAntd";
import CartItem from "./components/Pages/CartItem/CartItem";

import TourOut from "./components/Pages/HomeRouter/TourOut";
import TourAsia from "./components/Pages/HomeRouter/TourForeign/TourAsia";
import TourAmericars from "./components/Pages/HomeRouter/TourForeign/TourAmericars";
import TourEurope from "./components/Pages/HomeRouter/TourForeign/TourEurope";
import TourAutralia from "./components/Pages/HomeRouter/TourForeign/TourAutralia";

import HaNoi from "./components/Pages/HomeRouter/TourDomestic/MienBac/HaNoi";
import HaLong from "./components/Pages/HomeRouter/TourDomestic/MienBac/HaLong";
import InfoTourHaNoi from "./components/Pages/DetailTour/MienBac/InfoTourHaNoi";
import InfoTourHaiPhong from "./components/Pages/DetailTour/MienBac/InfoTourHaiPhong";
import InfoTourNhaTrang from "./components/Pages/DetailTour/MienTrung/InfoTourNhaTrang"
import InfoTourDaNang from "./components/Pages/DetailTour/MienTrung/InfoTourDangNang";
function Router() {
  return (
    <div>

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/HomeRouter" element={<HomeRouter />}></Route>

        <Route path="/" element={<HomeRouter />}>
          <Route path="/Page" element={<Page />} />
          <Route path="/CartItem" element={<CartItem />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/TourOut" element={<TourOut />} />
          <Route path="/TestAntd" element={<TestAntd />} />
          <Route path="/TourAsia" element={<TourAsia />} />
          <Route path="/TourEurope" element={<TourEurope />} />
          <Route path="/TourAmericars" element={<TourAmericars />} />
          <Route path="/TourAutralia" element={<TourAutralia />} />
          <Route path="/HaNoi" element={<HaNoi />} />
          <Route path="/HaLong" element={<HaLong />} />
          {/* Detail Tour */}
          <Route path="/InfoTourHaNoi" element={<InfoTourHaNoi />} />
          <Route path="/InfoTourHaiPhong" element={<InfoTourHaiPhong />} />

          <Route path="/InfoTourNhaTrang" element={<InfoTourNhaTrang />} />
          <Route path="/InfoTourDaNang" element={<InfoTourDaNang />} />
          <Route path="*" element={<Page_404 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Router;
