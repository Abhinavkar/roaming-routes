import "./packageItem.css";

const PackageItem = () => {
    const handleClick = () => {
        // Handle button click event here
        console.log("Button clicked");
        // Perform any desired actions
    };

    return (
        <div className="packageItem">
            <img
                src="https://pmlholidays.com/admin/production/images/packages/Ex_puri_Jagannath_temple_three.png"
                alt=""
                className="=siImg"
            />
            <div className="sipackage">
                <div className="siDesc">
                    <h1 className="siTitle">Odisha</h1> 
                    <span className="siDistance">📌PURI➡️BHUBANESHWAR</span>
                    <span className="siTaxiOp">🛫Airport + 🏢Room Taxes</span>

                    <span className="siCancelOp">✅Free Cancellation</span>
                    <span className="siCancelOpSubtitle">🔒lock in this great price today!</span>
                </div>
                <div className="siDetails">
                    <div className="siRating">
                        <span>Premium</span>
                        <button>8.9⭐</button>
                    </div>
                    <div className="siDetailTexts">
                        <span className="siPrice">Rs.4500/-</span>
                        <br />
                        <button className="siCheckButton" onClick={handleClick}>Check availability</button>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageItem;
