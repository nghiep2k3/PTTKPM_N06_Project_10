// Router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeRouter from './components/Pages/HomeRouter/HomeRouter';
import Page from './components/Pages/HomeRouter/Page';
import Contact from './components/Pages/HomeRouter/Contact';
import Home from './components/Pages/Home/Home';
import Page_404 from './components/Pages/Page_404/Page_404';
import TestAntd from './components/Test/TestAntd'

function Router() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/HomeRouter" element={<HomeRouter />}></Route>

      <Route path="/" element={<HomeRouter />}>
        <Route path="/Page" element={<Page />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/TestAntd" element={<TestAntd />} />
        <Route path="*" element={<Page_404 />} />
      </Route>
    </Routes>
  );
}

export default Router;
