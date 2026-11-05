import React from 'react'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import { Routes, Route } from "react-router";

function Outline() {
    return (
        <><Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            </Routes>
            </>
    )
}

export default Outline
