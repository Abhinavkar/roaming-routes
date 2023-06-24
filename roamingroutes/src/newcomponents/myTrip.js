import './mytrip.css';
import Footer from "../component/Footer"
function myTrip(props) {
console.log(props);
  
    return(
		<>
        <div className='mytrip'>
            <div className="ticket" >
	            <div className="left">
		            <div className="sachitimage">
			            <p className="admit-one">
				            <span>ENJOY</span>
				            <span>ENJOY</span>
				            <span>ENJOY</span>
			            </p>
			            <div class="ticket-number">
				        <p>
					        #20030220
				        </p>
			        </div>
		        </div>
		        <div class="ticket-info">
			        <p class="date">
				        <span class="june-29">{props.date}</span>
			        </p>
			        <div class="show-name">
				        <h3>{props.name}</h3>
				        <h4>{props.location}</h4>
			        </div>
			        <div class="time">
				        <p>{props.date} <span>TO</span> {props.date2}</p>
			        </div>
			        
		        </div>
	        </div>
	        <div class="right">
		        <p class="admit-one">
                    <span>ENJOY</span>
                    <span>ENJOY</span>
                    <span>ENJOY</span>
		        </p>
		        <div class="right-info-container">
			        <div class="show-name">
				        {/* <h1>SOUR Prom</h1> */}
			        </div>
			        <div class="time">
				        {/* <p>8:00 PM <span>TO</span> 11:00 PM</p>
				        <p>DOORS <span>@</span> 7:00 PM</p> */}
			        </div>
			        <div class="barcode">
				        <img src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb" alt="QR code"/>
			        </div>
			        <p class="ticket-number">
				        #20030220
			        </p>
		        </div>
	        </div>
        </div>
        </div>
	
	</>
    )
}
export default myTrip;