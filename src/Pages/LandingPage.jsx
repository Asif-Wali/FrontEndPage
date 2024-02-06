import React from "react";
import { NavBar } from "../Components/Navbar/Navbar";
import { Hero } from "../Components/Hero/Hero";
import { ServicesDetail } from "../Components/HawaainMan/ServicesDetail";
import { Partners } from "../Components/Partners/Partners";
import { LightningMobile } from "../Components/LightningMobile/LightningMobile";
const LandingPage= ()=>{
    return <div className="LandingPageWrapper">
        <NavBar/>
        <Hero/>
        <ServicesDetail/>
        <Partners/>
        <LightningMobile/>
    </div>
}
export{LandingPage};