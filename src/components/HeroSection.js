import React from "react";
import "../App.css";
import {Button} from "./Button";
import "./HeroSection.css";

function HeroSection(){
    return(
        <div className="hero-container">
             
             <img src="https://raw.githubusercontent.com/briancodex/react-website-v1/starter/public/images/img-7.jpg" />
            {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for</p>
            <div className="hero-btns">
                <Button className="btns"
                 buttonStyle="btn--outline"
                 buttonSize="btn--large"
                 >
                    GET STARTED
                 </Button>
                 <Button className="btns"
                 buttonStyle="btn--primary"
                 buttonSize="btn--large"
                 >
                    WATCH TRAILER <i className="far fa-play-circle" />
                 </Button>
            </div>
        </div>
    )
}



export default HeroSection