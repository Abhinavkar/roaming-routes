import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { DatePicker } from "antd";
import moment from "moment";
import Navbar from "../component/Navbar/Navbar";
import * as Components from "../component/components";
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
      alert("You are not logged in!");
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
        alert("Price submitted successfully");
        window.location.href = "/";
      } else {
        alert("Error in submitting price");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div></div>

      <Components.Container>
        <Components.SignUpContainer>
          <Components.Form>
            <Components.Title>BOOKING DETAILS</Components.Title>
            {inputs.map((input, i) => (
              <div key={i}>
                <Components.Input
                  type="text"
                  placeholder="Name"
                  className="input_medicine"
                  value={input.value}
                  onChange={(event) => handleChange(i, event)}
                />
                <Components.Button
                  className="medicine_button"
                  onClick={() => handleRemoveClick(i)}
                >
                  Remove
                </Components.Button>
                <Components.Button
                  className="medicine_button_add"
                  onClick={handleAddClick}
                >
                  Add field
                </Components.Button>
              </div>
            ))}
            <Components.Input type="email" placeholder="Email" />
            <Components.Input type="password" placeholder="Password" />
            <Components.Button>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>
      </Components.Container>

      <div className="container">
        <div className="prescription-doctor-medicine">
          <h3>Adults:</h3>
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
              <button
                className="medicine_button"
                onClick={() => hRemoveClick(i)}
              >
                Remove
              </button>
            </div>
          ))}
          <button className="medicine_button_add" onClick={handAddClick}>
            Add field
          </button>
        </div>

        <div className="price_location">
          <h3>Destination:</h3>
          <span>{destination}</span>
        </div>

        <div className="price_cost">
          <h3>Cost:</h3>
          <span>{cost}</span>
        </div>

        <RangePicker onChange={(dates, dateStrings) => setDates(dateStrings)} />
        <button onClick={() => submitPrice()}>Submit</button>
      </div>  
    </>
  );
}

export default Price;
