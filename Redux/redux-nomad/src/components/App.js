import React from "react"; 
/* import { HashRouter as Routes, Route } from "react-router-dom"; */
import { Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Detail />} />
        </Routes>
    )
}

export default App;