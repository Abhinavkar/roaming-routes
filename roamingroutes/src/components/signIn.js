import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./signIn.css";

function Signin() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token") || "";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
        const response = await fetch(
            "http://localhost:8000/users/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: email,
                pass: password,
              }),
            }
          );
          if (!response.ok) {
            throw new Error("Wrong credentials");
          } else {
            const data = await response.json();
            alert("You are logged in!");
            localStorage.setItem("token", data.token);
            navigate("/destination");
          }
        } catch (error) {
          alert(error.message); // Show the error message
        }
      };
  return (
    <div>
        <div class="container">
        <h2 class="login-title">Log in</h2>
      <div>
        <label for="email">Email </label>
        <input
               id="email"
               type="email"
               placeholder="me@example.com"
               name="email"
               value={email}
                onChange={(e) => setEmail(e.target.value)}
               required
               />
      </div>

      <div>
        <label for="password">Password </label>
        <input
               id="password"
               type="password"
               placeholder="password"
               name="password"
               onChange={(e) => setPassword(e.target.value)}
               value={password}
               required
               />
      </div>

      <button class="btn btn--form" type="submit"  onClick={handleLogin}>
        Log in
      </button>

    </div>
    </div>
  );
}

export default Signin;
