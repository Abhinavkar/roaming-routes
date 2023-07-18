import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DatePicker } from "antd";
import moment from "moment";
import "./price.css";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer";
const { RangePicker } = DatePicker;

function Price() {
  const location = useLocation();
  const destination = location.state.destination;
  const cost = location.state.price;
  console.log("in price file", destination, cost);

  const [inputs, setInputs] = useState([{ value: "" }]);
  const [child, setChild] = useState([{ val: "" }]);
  const [count, setCount] = useState(1);
  const [countChild, setCountChild] = useState(1);
  const [dates, setDates] = useState([]);
  console.log("dates", dates);
  console.log("inputs", inputs);
  console.log("child", child);
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (i, event) => {
    const values = [...inputs];
    values[i].value = event.target.value;
    setInputs(values);
  };

  const hChange = (i, event) => {
    const values = [...child];
    values[i].val = event.target.value;
    setChild(values);
  };

  const handleAddClick = () => {
    setInputs([...inputs, { value: "" }]);
    setCount(count + 1);
  };

  const handAddClick = () => {
    setChild([...child, { val: "" }]);
    setCountChild(countChild + 1);
  };

  const handleRemoveClick = (i) => {
    const values = [...inputs];
    values.splice(i, 1);
    setInputs(values);
    setCount(count - 1);
  };

  const hRemoveClick = (i) => {
    const values = [...child];
    values.splice(i, 1);
    setInputs(values);
    setCountChild(countChild - 1);
  };

  const token = localStorage.getItem("token");

  const submitPrice = async () => {
    if (!token) {
      toast.error("Please Login", toastOptions);
      window.location.href = "/signin";
    } else {
      var numberOfDays = 0;
      if (dates.length === 2) {
        const startDate = moment(dates[0]);
        const endDate = moment(dates[1]);
        numberOfDays = endDate.diff(startDate, "days");
        console.log("Number of days:", numberOfDays);
      }
      var current = cost * (count + countChild) * numberOfDays;
      console.log("current", current);
      const { data } = await axios.post(
        "http://localhost:8000/blogs/create",
        { ex1: dates, ex2: inputs, ex3: current, ex4: destination, child },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(data);
      if (data.msg === "Success") {
        toast.success("Hurrahh !!! Trip Booked ", toastOptions);
        window.location.href = "/";
      } else {
        alert("Error in submitting price");
      }
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="priced">
        <div className="prescription-doctor-medicine">
          <h3 className="Adults">Adults:</h3>
          {inputs.map((input, i) => (
            <div key={i}>
              <input
                className="input_medicine"
                type="text"
                value={input.value}
                onChange={(event) => handleChange(i, event)}
              />
              <button
                className="priceRemove"
                onClick={() => handleRemoveClick(i)}
              >
                Remove
              </button>
            </div>
          ))}
          <button className="priceAdd" onClick={handleAddClick}>
            Add field
          </button>
        </div>

        <div className="children">
          <h3>Children:</h3>
          {child.map((input, i) => (
            <div key={i}>
              <input
                className="input_medicine"
                type="text"
                value={input.val}
                onChange={(event) => hChange(i, event)}
              />
              <button className="priceRemove" onClick={() => hRemoveClick(i)}>
                Remove
              </button>
            </div>
          ))}
          <button className="priceAdd" onClick={handAddClick}>
            Add field
          </button>
        </div>

        <div className="price_location">
          <h3>Destination:</h3>
          <span className="priceDisplay">{destination}</span>
        </div>

        <div className="price_cost">
          <h3>Cost:</h3>
          <span className="priceDisplay">{cost}</span>
        </div>
        <div className="priceCalendar">
          <RangePicker
            onChange={(dates, dateStrings) => {
              setDates(dateStrings);
            }}
          />
        </div>

        <button onClick={() => submitPrice()} className="priceSubmit">
          Submit
        </button>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
export default Price;
