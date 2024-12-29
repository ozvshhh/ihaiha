import { BrowserRouter,Route, Routes } from "react-router-dom";
import React from "react";

import { Home } from "../pages/home";

export const Router:React.FC = ()=>{
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter> 
    </div> 
  )
}