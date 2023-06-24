import React, { useState } from 'react';
import './admin.css';

const AdminForm = () => {
  const [location, setLocation] = useState('');
  const [coverPhoto, setCoverPhoto] = useState('');
  const [saying, setSaying] = useState('');
    
        const [price1, setPrice1] = useState({ cost: '', place1: '', place2: '', displayPhoto: '' });
        const [price2, setPrice2] = useState({ cost: '', place1: '', place2: '', displayPhoto: '' });
        const [price3, setPrice3] = useState({ cost: '', place1: '', place2: '', displayPhoto: '' });
    
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can access all the form values in the respective state variables
    console.log({
      location,
      coverPhoto,
      saying,
      price1,
      price2,
      price3,
    });
  };
  const adminSubmit = () =>{
    console.log("Hello");
  }

  return (
    <div className="form-container">
            <h1 className="admin-form-heading">Admin Form</h1>
    
            <form onSubmit={handleSubmit}>
            <div className="main">
                <div className='loca'>
                <label htmlFor="location">Destination:</label>
                <input
                    type="text"
                    id="location"
                    placeholder='   Destination Name'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                </div>

                <div className='cove'>
                <label htmlFor="coverPhoto">Image Url: </label>
                <input
                    type="text"
                    id="coverPhoto"
                    placeholder='    Cover Url'
                    value={coverPhoto}
                    onChange={(e) => setCoverPhoto(e.target.value)}
                />
                </div>

                <div className='say'>
                <label htmlFor="saying">Description:</label>
                <input
                    type="text"
                    id="saying"
                    placeholder='     Famous Saying'
                    value={saying}
                    onChange={(e) => setSaying(e.target.value)}
                />
                </div>

                <div className='costt'>
                <label htmlFor="package1">Package 1:</label>
                <input
                    type="text"
                    id="price1"
                    placeholder='       Enter Cost'
                    value={price1.cost}
                    onChange={(e) => setPrice1({ ...price1, cost: e.target.value })}
                />
                <input
                    type="text"
                    id="price1Place1"
                    placeholder='       Location 1'
                    value={price1.place1}
                    onChange={(e) => setPrice1({ ...price1, place1: e.target.value })}
                />
                <input
                    type="text"
                    id="price1Place2"
                    placeholder='       Location 2'
                    
                    value={price1.place2}
                    onChange={(e) => setPrice1({ ...price1, place2: e.target.value })}
                />
                <input
                    type="text"
                    id="price1DisplayPhoto"
                    placeholder='       Location image'
                    value={price1.displayPhoto}
                    onChange={(e) => setPrice1({ ...price1, displayPhoto: e.target.value })}
                />
                </div>

                <div className='costt2'>
                    <label htmlFor="package2">Package 2:</label>
                    <input
                        type="text"
                        id="price2"
                        placeholder='       Enter Cost'
                        value={price2.cost}
                        onChange={(e) => setPrice2({ ...price2, cost: e.target.value })}
                    />
                    <input
                        type="text"
                        id="price2Place1"
                        placeholder='       Location 1'
                    
                        value={price2.place1}
                        onChange={(e) => setPrice2({ ...price2, place1: e.target.value })}
                    />
                    <input
                        type="text"
                        id="price2Place2"
                        placeholder='       Location 2'
                        value={price2.place2}
                        onChange={(e) => setPrice2({ ...price2, place2: e.target.value })}
                    />
                    <input
                        type="text"
                        id="price2DisplayPhoto"
                        placeholder='       Location image'
                        value={price2.displayPhoto}
                        onChange={(e) => setPrice2({ ...price2, displayPhoto: e.target.value })}
                    />
                </div >

                <div className='costt3'>
                        <label htmlFor="package3">Package 3:</label>
                        <input
                            type="text"
                            id="price3"
                            placeholder='       Enter Cost'
                            value={price3.cost}
                            onChange={(e) => setPrice3({ ...price3, cost: e.target.value })}
                        />
                        <input
                            type="text"
                            id="price3Place1"
                            placeholder='       Location 1'
                            value={price3.place1}
                            onChange={(e) => setPrice3({ ...price3, place1: e.target.value })}
                        />
                        <input
                            type="text"
                            id="price3Place2"
                            placeholder='       Location 2'
                            value={price3.place2}
                            onChange={(e) => setPrice3({ ...price3, place2: e.target.value })}
                        />
                        <input
                            type="text"
                            id="price3DisplayPhoto"
                            placeholder='       Location image'
                            value={price3.displayPhoto}
                            onChange={(e) => setPrice3({ ...price3, displayPhoto: e.target.value })}
                        />
                </div>
            </div>
            <div className="butt">
        <button onClick={adminSubmit} type="submit" className='button'>Submit</button></div>
      </form>
      
      
    </div>
    
  );
};

export default AdminForm;