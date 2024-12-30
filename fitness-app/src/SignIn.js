import React, { useState } from "react";
import './SignIn.css';
import axios from "axios";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [otp, setOTP] = useState("");
  const [step, setStep] = useState(1); // Step 1: Sign-in, Step 2: OTP
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrorMessage("");
  };

  const goToLandingPage = () => {
    window.location.href = "/";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.password.trim()) {
      setErrorMessage("Password is required.");
      return;
    }

    const payload = {
      email: formData.email,
      password: formData.password
    };

    try {
      console.log("Payload being sent to the server:", payload);

      const response = await fetch("http://localhost:8000/user/SignIn", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const result = await response.json();
        // setResponseMessage(`Success: ${result.message}`);
        setStep(2); // Proceed to OTP step
        setError("");
        localStorage.setItem('email', formData.email);
        
        
      } else {
        const errorData = await response.json();
        console.log(errorData);
        setResponseMessage(`Error: ${errorData.error || response.statusText}`);
      }
    } catch (error) {
      setResponseMessage(`Network error: ${error.message}`);
    }
  };

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8000/user/signin", { fo, password });
//       setStep(2); // Proceed to OTP step
//       setError("");
//       console.log(response.data.message);
//     } catch (err) {
//       setError(err.response?.data?.error || "An error occurred.");
//     }
//   };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
        // const payload = {
        //     email: formData.email,
        //     otp: otp
        //   };
        const email = formData.email
      const response = await axios.post("http://localhost:8000/user/VerifyOTP", { email, otp });
      localStorage.setItem("token", "dummy-token");
      setFormData({
        email: '',
        password: ''
      });
      goToLandingPage();
      console.log(response.data.message);
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred.");
    }
  };


  const isFormValid = formData.email && formData.password;

  return (
    <div>
      {step == 1 && <div className="signin-container">
        <form onSubmit={handleSubmit}>
          <div>
            <header>
              <h1>Please sign in</h1>
            </header>
          </div>

          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div>
            <button type="submit" disabled={!isFormValid}>Sign In</button>
          </div>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
}
      {step === 2 && (
        <form onSubmit={handleVerifyOTP}>
          <h2>Verify OTP</h2>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            placeholder="Enter OTP"
            required
          />
          <button type="submit">Verify OTP</button>
          {error && <p className="error">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default SignIn;