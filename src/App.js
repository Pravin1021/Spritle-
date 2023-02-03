import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Signup from './Signup.js';
import Home from './Home.js';
import Log from "./Log.js";
const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Log />}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
