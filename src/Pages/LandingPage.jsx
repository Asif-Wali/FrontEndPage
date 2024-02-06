import React, {useState} from "react";
import { NavBar } from "../Components/Navbar/Navbar";
import { Hero } from "../Components/Hero/Hero";
const LandingPage= ()=>{
    return <div className="LandingPageWrapper">
        <NavBar/>
        <Hero/>
    </div>
}
export{LandingPage};