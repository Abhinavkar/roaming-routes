import { useState, useEffect } from "react";
import "./destination.css";
import offer1 from "./offer1.png";
import offer2 from "./offer2.png";
import offer3 from "./offer3.png";
import offer4 from "./offer4.png";
import offer5 from "./offer5.png";
import offer6 from "./offer6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

import DestinationCard from "./destinationCard";
function Destination() {
  const navigate = useNavigate();
  const [arr, setArr] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await fetch("http://localhost:8080/destination", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArr(data);
      });
  };

  const packages = (id) => {
    navigate("/bookingPackages", { state: { id: id } });
  };
  const handleAdditionalClick = (id) => {};

  return (
    <>
      <Navbar></Navbar>
      <div>
        <h1 className="accomodation">Accommodation Promotions</h1>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{
            type: "progressbar",
          }}
          slidesPerView={2}
          spaceBetween={20}
          navigation={true}
          autoplay={{ delay: 500 }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={offer1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={offer2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={offer3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={offer4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={offer5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={offer6} alt="" />
          </SwiperSlide>
        </Swiper>

        <h1 className="our_packages">Our Packages</h1>
        <div className="destination-container">
          <div className="destination-cards">
            {arr.map((item) => {
              return (
                <DestinationCard
                  id={item.id}
                  location={item.location}
                  poster={item.cover_photo}
                  saying={item.saying}
                  onclick={() => packages(item.id)}
                  additionalOnClick={() => handleAdditionalClick(item.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Destination;
