import React from "react";
import * as Components from "./components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./hi.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signin() {
  console.log("hiiii buttonClick");
  localStorage.removeItem("token");

  const [signIn, toggle] = React.useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email1, setEmail1] = useState("");
  const [pass1, setPassword1] = useState("");

  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleSignup = async () => {
    const obj = {
      name,
      email,
      pass,
    };
    console.log(obj);
    try {
      const response = await fetch("http://localhost:8000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      if (!response.ok) {
        const res = await response.json();
        toast.error(res.msg, toastOptions);
        throw new Error(res);
      } else {
        const data = await response.json();
        console.log(data);
        toast.success("SIGN UP SUCCESSFULL", toastOptions);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.msg, toastOptions);
    }
  };

  const handleLogin = async () => {
    console.log(email1, pass1);
    try {
      const response = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email1,
          pass: pass1,
        }),
      });

      if (!response.ok) {
        const res = await response.json();
        console.log(res);
        toast.error(res.msg, toastOptions);
        throw new Error(res.msg);
      } else {
        const data = await response.json();
        console.log(data);
        toast.success("success", toastOptions);
        window.location.href = "./packages";
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="bodyback">
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Components.Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Components.Input
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Components.Button onClick={handleSignup}>
              Sign Up
            </Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form>
            <Components.Title>Sign in</Components.Title>
            <Components.Input
              type="email"
              placeholder="Email"
              value={email1}
              onChange={(e) => setEmail1(e.target.value)}
            />
            <Components.Input
              type="password"
              placeholder="Password"
              value={pass1}
              onChange={(e) => setPassword1(e.target.value)}
            />
            <Components.Anchor href="#">
              Forgot your password?
            </Components.Anchor>
            <Components.Button onClick={handleLogin}>
              Login In
            </Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start the journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sigin Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
      <ToastContainer />
    </div>
  );
}

export default Signin;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import "./signIn.css";

// function Signin() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token") || "";
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const handleLogin = async () => {
//     try {
//       const response = await fetch("http://localhost:8000/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: email,
//           pass: password,
//         }),
//       });
//       if (!response.ok) {
//         throw new Error("Wrong credentials");
//       } else {
//         const data = await response.json();
//         alert("You are logged in!");
//         localStorage.setItem("token", data.token);
//         navigate("/packages");
//       }
//     } catch (error) {
//       alert(error.message); // Show the error message
//     }
//   };
//   return (
//     <div>
//       <div class="container">
//         <h2 class="login-title">Log in</h2>
//         <div>
//           <label for="email">Email </label>
//           <input
//             id="email"
//             type="email"
//             placeholder="me@example.com"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label for="password">Password </label>
//           <input
//             id="password"
//             type="password"
//             placeholder="password"
//             name="password"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             required
//           />
//         </div>

//         <button class="btn btn--form" type="submit" onClick={handleLogin}>
//           Log in
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Signin;
