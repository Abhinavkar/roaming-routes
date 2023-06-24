import {useState,useEffect} from 'react';
import './destination.css';
import { useNavigate } from "react-router-dom";
import video2 from "./video2.mp4";
import DestinationCard from './destinationCard';


function Destination(){
    const navigate  = useNavigate();
    const [arr,setArr]=useState([]);


    useEffect(()=>{
        getData();
    },[])

    const getData = async() =>{
        await fetch ("http://localhost:8080/destination",{
            method:"GET"
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setArr(data);
        })
    }

    const packages = (id) =>{
        navigate("/packages", {state: {id: id}});
    }
    
    return(
        <div>
        <section className="home">
            <div className="overlay"></div>
            <video src = {video2} muted autoPlay loop type='video/mp4'></video>

            <div className="homeContent container">
                    <div className="textDiv">
                        <span className="smallText"></span>
                        <h1 className="homeTitle">Choose your Holiday Package</h1>
                    </div>
                </div>
            
        </section>

        <h1 className='our_packages'>Our Packages</h1>
        <div className="destination-container">
            <div className="destination-cards">
                {
                    arr.map((item)=>{
                        return (
                            <DestinationCard
                                id={item.id} location={item.location} poster={item.cover_photo} saying={item.saying} 
                                onclick={()=>packages(item.id)}
                            />
                        );
                    })
                }
            </div>
        </div>
        </div>
    )
}

export default Destination;