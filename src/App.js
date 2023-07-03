import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
const App = () => {
    return (
        <div className="text-sm">
            <NavBar/>
            <Home/>

            <SocialLinks/>
        </div>
    )
}
export default App; 