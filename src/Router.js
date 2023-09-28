// Router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
function Router() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />}></Route>
    </Routes>
  );
}

export default Router;
