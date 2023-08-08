import React from "react";
import './homepack.css';
import video from "./video.mp4";

const Homepack = () => {
    return(
        <section className="home">
            <div className="overlay"></div>
            <video src = "https://drive.google.com/uc?export=download&id=1HZWPofaQIu1pzKHGMfU7lPyA3_iBARMt" muted autoPlay loop type='video/mp4'></video>

            <div className="homeContent container">
                    <div className="textDiv">
                        <span className="smallText">💵Our Packages</span>
                        <h1 className="homeTitle">Choose your Holiday Package</h1>
                    </div>
                </div>
            
        </section>
    )
    }
    export default Homepack;