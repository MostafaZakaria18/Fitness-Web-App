import React, { useState } from "react";
import './SignIn.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

      const response = await fetch("http://localhost:8000/SignIn", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const result = await response.json();
        setResponseMessage(`Success: ${result.message}`);
        localStorage.setItem('email', formData.email);
        setFormData({
          email: '',
          password: ''
        });
        goToLandingPage();
      } else {
        const errorData = await response.json();
        console.log(errorData);
        setResponseMessage(`Error: ${errorData.error || response.statusText}`);
      }
    } catch (error) {
      setResponseMessage(`Network error: ${error.message}`);
    }
  };

  const isFormValid = formData.email && formData.password;

  return (
    <div>
      <div className="signin-container">
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
    </div>
  );
};

export default SignIn;