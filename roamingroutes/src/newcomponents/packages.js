import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PackageItem from './packageItem';
import Homepack from './homepack';
import Navbar from '../component/Navbar/Navbar';
import Footer from "../component/Footer"

function BookingPackages() {
  const [data, setData] = useState(null);
  const location = useLocation();
  const id = location.state.id;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await fetch(`http://localhost:8080/destination/${id}`, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((responseData) => {
        console.log(responseData);
        setData(responseData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  console.log('data:',data);

  if (data === null) {
    return <p>Loading...</p>; // Display a loading message until data is fetched
  }


  return (
    <>
    <Navbar/>
      <PackageItem
        id={data.id}
        location={data.location}
        poster={data.cover_photo}
        saying={data.saying}
        packages={data.packages}
      />
      <Homepack
></Homepack>   
<Footer/>

 </>
  );
}

export default BookingPackages;
