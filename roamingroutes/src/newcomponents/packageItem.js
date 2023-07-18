import "./packageItem.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";

const PackageItem = ({onclick,packages}) => {

    const navigate  = useNavigate();
    const getPrice = (location,price) => {
        console.log(location,price);
        navigate("/price", {state: {destination: location, price: price}});
    }
    const getImg = (img1,img2,img3,img4,img5,img6,img7,type) => {
        console.log(img1);
        navigate("/images", {state: {img1: img1,img2: img2,img3: img3,img4: img4,img5: img5,img6: img6,img7: img7, type: type}});
    }
    return (
        <>
        
        <div onClick={onclick}>
        {
            packages.map((item) => {
                return(
                    <div className="packageItem">
                        <div className="imageparent">
                        <img
                            src={item.profile_photo}
                            alt=""
                            className="=siImg"
                        />
                        </div>
                        <div className="sipackage">
                            <div className="siDesc">
                            <h1 className="siTitle">{item.location0}</h1>
                            <span className="siDistance">📌{item.location1}➡️{item.location2}</span>
                          
                            <button className="siTaxiOp" onClick={()=>getImg(item.img1,item.img2,item.img3,item.img4,item.img5,item.img6,item.img7,item.type)}>Our Services ↗</button>
                            <span className="siCancelOp">✅Free Cancellation</span>
                            <span className="siCancelOpSubtitle">🔒lock in this great price today!</span>
                        </div>
                        <div className="siDetails">
                            <div className="siRating">
                                <span style={{padding:"10px"}}>{item.type}</span>
                                <button>8.9⭐</button>
                            </div>
                            <div className="siDetailTexts">
                                <span className="siPrice">Rs.{item.price}/-</span>
                                <br />
                                <button className="siCheckButton" onClick={()=>getPrice(item.location0,item.price)}>Book Package</button>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                )
            })
        }
        </div>
        </>
    );
};

export default PackageItem;