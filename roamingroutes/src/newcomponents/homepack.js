import React from "react";
import './homepack.css';
import video from "./video.mp4";
    
const Homepack = () => {
    return(
        <section className="home">
            
            <div className="overlay"></div>
            <video src = {video} muted autoPlay loop type='video/mp4'></video>

            <div className="homeContent container">
                    <div className="textDiv">

                        <h1 className="homeTitle">Choose your Holiday Package</h1>
                    </div>
                </div>
            
        </section>
    )
    }
    export default Homepack;