import React ,{useState}from "react";
import './SignUp.css';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import { faHome } from '@fortawesome/free-solid-svg-icons';


const SignUp = () => {  
const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    sex: '',
    birthDate: ''
});

const [responseMessage , setResponseMessage] = useState("");
const [errorMessage , setErrorMessage] = useState("");
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrorMessage("");
  };
  const goToLandingPage = () => {
    window.location.href="/"
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword){
      setResponseMessage("");
      setErrorMessage("");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      const phoneRegex = /^[0-9]{11}$/;

      if(!formData.name.trim()){
        setErrorMessage("Name is required and cannot be empty.");
        return;
      }
      if(!emailRegex.test(formData.email)){
        setErrorMessage("please enter a valid email address")
        return;
      }
      if (!phoneRegex.test(formData.phone)) {
        setErrorMessage("Phone number must be 11 digits.");
        return;
      }
      if (!formData.sex) {
        setErrorMessage("Please select your gender.");
        return;
      }
      if (!formData.birthDate) {
        setErrorMessage("Please enter your date of birth.");
        return;
      }
      if(!passwordRegex.test(formData.password)){
        setErrorMessage(
          "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.");
          return;
      }
      if(formData.password != formData.confirmPassword){
        setErrorMessage("passwords do not match");
        return;
      }
      
   
    }
    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      sex: formData.sex,
      birthDate: formData.birthDate,
    };
  
    console.log("Payload being sent to the server:", payload);
  
   try{
    console.log(formData);
    const response = await fetch("http://localhost:8000/User",{    
    method : "POST",
    headers:{
      "Content-type" : "application/json",
      //body:
    },
    body : JSON.stringify(payload),
  });
  if(response.ok){
    const result  = await response.json();
    setResponseMessage(`Success: ${result.message}`);
   localStorage.setItem('email',formData.email);
    setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          phone: '',
          sex: '',
          birthDate: ''
        });
        goToLandingPage();
  }else{
    const errorData = await response.json();
    console.log(errorData);
    setResponseMessage(`Error: ${errorData.error   || response.statusText}`);
  }
}catch(error){
  setResponseMessage(`Network error: ${error.message}`);
  }   
  //goToLandingPage();
};
const isFormValid = formData.name && formData.email && formData.password && formData.confirmPassword;
  return ( 
    <div>
   <div className="signup-container">
  
   <form onSubmit={handleSubmit}>
      <div> 
        <header>
        {/* <FontAwesomeIcon
        icon={faHome}
        className="home-icon"
        onClick={goToLandingPage}
        />       */}
            <h1> Please enter your information to sign up</h1>
        </header>
      </div>
      
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
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
              Phone:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="11-digit phone number"
                required
              />
              </label>
              <div>
            <label>
              Gender:
              <select
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="m">Male</option>
                <option value="f">Female</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Birth Date:
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
              />
            </label>
          </div>
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
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>      
        <button type="submit" disabled = {!isFormValid}>Sign Up</button>
      </div>
    </form>
    {console.log(responseMessage)}
    {responseMessage && <p>{responseMessage}</p>}
    </div>
    </div>
  );
};
export default SignUp;
