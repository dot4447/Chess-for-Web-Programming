import React from "react";
import { Outlet } from "react-router-dom";
import Header from './components/Overlay/Header'
import Footer from "./components/Overlay/Footer";
import ChessLanding from "./components/Lander/ChessLanding";
function Layout(params) {
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>              
        </>
    )
}

export default Layout