import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../component/Home";
import About from "../component/About";
import Todo from "../component/Todo";
import { Navbar } from "../component/Navbar";


export const MainRoutes = ()=>{
    return(
        <>
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Todo" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    )
}