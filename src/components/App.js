import React from 'react'
import { Routes, Route } from "react-router-dom";
import Referans from "./Referans"
import Header from "./Header"
import Footer from "./Footer"
import Content from "./Content"
import Slick from "./Slick"
import Hakkimizda from './Hakkimizda';
import Iletisim from "./Iletisim"

const App = () => {
    return (
        <div id='container'>
            <Header id="header" />
            <Slick id="slick" />
            <Routes id="content">
                <Route path='/' element={<Content id="content"/>}/>
                <Route path='/hakkimizda' element={<Hakkimizda />}/>
                <Route path='/iletisim' element={<Iletisim />}/>
            </Routes>  
            <Referans id="referans" />
            <Footer id="footer" />
        </div>
    )
}

export default App