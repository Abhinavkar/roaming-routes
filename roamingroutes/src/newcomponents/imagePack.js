import React from 'react';
import './images.css';
import { useLocation } from 'react-router-dom';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper";
import Navbar from '../component/Navbar/Navbar';

const Imagepack = () => {
    const location = useLocation();
    const img1 = location.state.img1;
    const img2 = location.state.img2;
    const img3 = location.state.img3;
    const img4 = location.state.img4;
    const img5 = location.state.img5;
    const img6 = location.state.img6;
    const img7 = location.state.img7;
    const type = location.state.type;
  return (
    <>
    <Navbar/>
    <div>
        <div className='titl'>{type}</div>
        <div className="container">
      <div className="single-image">
        <img src={img1} alt="Single Image" />
      </div>
      <div className="image-column">
        
      <div> <img src={img2} alt="Image 1" />
        </div>
        <div><img src={img3} alt="Image 2" />
        </div>
        <div><img src={img4} alt="Image 3" />
        </div>
        <div><img src={img5} alt="Image 4" /></div>
        <div><img src={img6} alt="Image 5" /></div>
        <div className='six'>
            <img src={img7} alt="Image 6" />
            </div>
       
      
      
      </div>

      </div >
            <div className='highlight'>
                <div className="highl">HIGHLIGHTS</div>
                <div className="highli">
                    <div>✅Check-in (24-hour) </div>
                    <div>🍜Free Breakfast </div>
                    <div>📶Free Wi-fi</div>
                    <div>🏖Good View </div>
                    <div>🫧Clean Room </div>
                </div>
            </div>

            
            <div className="con">
                    <div className="conn">Description</div>
            
                    <div className="con1">The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Conveniently situated in the Chatan part of Okinawa Main island, this property puts you close to attractions and interesting dining options. Don't leave before paying a visit to the famous Naha Airport. Rated with 4 stars, this high-quality property provides guests with access to massage, restaurant and hot tub on-site.</div>

            </div> 

            <div className="pr">
                <div className="pro">This luxirous room is in high demand!</div>
                <div className="prop"><b>88 people have booked today. </b></div>
            </div>

            <div className='title'>Flights</div>
            {/* <div className='swippers'> */}
            {/* <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            
                
                slidesPerView={1}
                spaceBetween={2}
                
                autoplay={{ delay: 500 }}
                className="mySwiper"
        >

            
            <SwiperSlide><img src="https://www.museuly.com/wp-content/uploads/2018/06/Copy-of-Copy-of-Copy-of-Copy-of-Inspirational-Quote-Tumblr-Graphic-26.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://i.pinimg.com/736x/8d/fe/66/8dfe66112136db099216e602246893fa.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://i.pinimg.com/originals/27/1b/90/271b908f8876d11c0ec5d98a374635f4.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://i.pinimg.com/originals/b6/80/61/b68061a9550cafe16425071fd7c6f9b3.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://i.pinimg.com/originals/0e/31/42/0e31424a014ad8238fc2a4b25ba72f1c.jpg" alt="" /></SwiperSlide>
        </Swiper> */}
      {/* </div> */}

            <div className="of">
            <div className="off">Use promo code ”MMTSUPER” and get upto ₹800 OFF on your Delhi to Chennai flight booking on MakeMyTrip. New Users Special OFFER - Use Pomocode ”WELCOMEMMT” and get Flat 10% OFF (upto Rs.1500 OFF ) on your first flight booking .</div>
            </div>
            <div className="titl">
            <div className="title1">
                    <div className='so '><b>Available</b></div>
                    <div className='d'>Duration </div>
                    <div className='de'>Departure</div>
                    <div className='ar'>Arrival</div>
                    <div className='pric'>Price</div>
                </div>
            </div>
            <div className="dura">
            <div className="durat">
                      <div className='indi'><img width="16%" height="110%" src="https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill"></img></div>
                    <div><u>02h30m<br/></u>non-stop</div>
                    <div><b>10:10</b></div>
                    <div><b>13:10</b></div>
                    <div><b>Rs.4,630</b></div>
                </div>
            </div>
            <div className="dura">
            <div className="durat">
                    <div className='indi'><img width="18%" height="110%" src="https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill"></img></div>
                    <div><u>02h40m<br/></u>non-stop</div>
                    <div><b>19:55</b></div>
                    <div><b>22:40</b></div>
                    <div><b>Rs.5,879</b></div>
                    
                </div>
            </div>
            <div className="dura">
            <div className="durat">
                     <div className='indi'><img width="18%" height="110%" src="https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill"></img></div>
                    <div><u>02h50m<br/></u>non-stop</div>
                    <div><b>13:10</b></div>
                    <div><b>16:10</b></div>
                    <div><b>Rs.5,387</b></div>
                    
                </div>
            </div>
            <div className="dura">
            <div className="durat">
                      <div className='indi'><img width="16%" height="110%" src="https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill"></img></div>
                    <div><u>05h30m<br/></u>non-stop</div>
                    <div><b>07:05</b></div>
                    <div><b>12:35</b></div>
                    <div><b>Rs.6,373</b></div>
                </div>
            </div>
            <div className="dura">
            <div className="durat">
                    <div className='indi'><img width="18%" height="110%" src="https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill"></img></div>
                    <div><u>03h<br/></u>non-stop</div>
                    <div><b>17:35</b></div>
                    <div><b>20:20</b></div>
                    <div><b>Rs.6,351</b></div>
                </div>
            </div>
            <div className="dura">
            <div className="durat">
                    <div className='indi'><img width="20%" height="110%" src="https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill"></img></div>
                    <div><u>02h50m<br/></u>non-stop</div>
                    <div><b>20:40</b></div>
                    <div><b>23:35</b></div>
                    <div><b>Rs.7,424</b></div>
                </div>
                
            </div>
            <div className="hot">
            <div className="hott">Hot Deals</div>
            <div className="hottt">HDFCEMI</div>
            <div className="hotttT">Use this code and get upto Rs.2000 off instant discount on HDFC BankEasyEMI</div>  
            </div>



    </div>
    </>
  );
};

export default Imagepack;