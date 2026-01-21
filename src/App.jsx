import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/layout/Footer";


import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Career from "./pages/Career";

import WebDevelpoment from "./pages/serices/WebDevelopment"
import MobileApp from "./pages/serices/MobileDevelopment"
import Uiux from "./pages/serices/UiuxDesign"
import CloudServices from "./pages/serices/CloudComputing"

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services">
                    <Route index element={<WebDevelpoment />} />
                    <Route path="web-development" element={<WebDevelpoment />} />
                    <Route path="mobile-apps" element={<MobileApp />} />
                    <Route path="ui-ux" element={<Uiux />} />
                    <Route path="cloud-services" element={<CloudServices />} />
                </Route>

                <Route path="/contact" element={<Contact />} />
                <Route path="/career" element={<Career />} />
            </Routes>
            <Footer />

        </>
    );
}

export default App;
