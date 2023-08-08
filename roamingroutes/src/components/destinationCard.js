import './destinationCard.css'
import { ImLocation } from 'react-icons/im'
function DestinationCard(props){
    return(
        <div className="destination-card">
            <div className="card">
                <img src={props.poster} alt="" className='card-img'/>
                <div className="top-right"><ImLocation style={{color: "yellow", fontWeight: "bold", fontSize: "20px" }}/>{props.location}</div>
                <div className='card-body'>
                    <h2 style={{fontStyle:"italic", textDecoration: "underline"}}>{props.location}</h2>
                    <h3>Explore the best of {props.location}</h3>
                    <p className="card-info">{props.saying}</p>
                    <div className="card-footer">
                        <button className='card-btn' onClick={props.onclick}>Explore Packages</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationCard;