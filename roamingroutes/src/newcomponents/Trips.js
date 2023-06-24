import MyTrip from "./myTrip";
import { useState,useEffect } from "react";
import Navbar from "../component/Navbar/Navbar";
function Trips(){
    const [arr, setArr] = useState([]);
    const token = localStorage.getItem("token");
    console.log(token);
    
    const getData = async () => {
      if (token) {
        const data = await fetch(
          "http://localhost:8000/blogs/myblogs",
          {
            method: "GET",
            headers: {
              Authorization: token,
            },
          }
        );
        if (!data.ok) {
          const err = await data.json();
          throw new Error(err);
        } else {
          const fullData = await data.json();
          setArr(fullData);
        }
      } else {
        alert("You are not logged in!");
        window.location.href='/signin'
      }
    };
    useEffect(() => {
        getData();
      }, []);
    
    return(
        <>
          <Navbar></Navbar>
            {
                arr.map((item)=>{
                    return(
                        
                        <MyTrip  name={item.ex2[0].value} location={item.ex4} price={item.ex3} date={item.date1} date2={item.date2}/>
                    )
                })
            }
        </>
    )
}
export default Trips;