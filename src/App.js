import React from "react";
import Navbar from './components/navbar/Navbar'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
import Cars from "./shop/Cars";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
     
        <Navbar />

          <Routes>

            <Route path="/" element={<Cars />} />

          </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
