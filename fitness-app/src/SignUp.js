import React ,{useState}from "react";
import './SignUp.css';

const SignUp = () => {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
});

const [responseMessage , setResponseMessage] = useState("");
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword){
      setResponseMessage("Passwords do not match");
      return;
    }
   try{
    const response = await fetch("",{    
    method : "POST",
    headers:{
      "Content-type" : "application/json",
    },
    body : JSON.stringify({
      name  :formData.name,
      email :formData.email,
      password : formData.password,
    }),
  });
  if(response.ok){
    const result  = await response.JSON();
    setResponseMessage("Success: ${result.message}");
  }else{
    const errorData = await response.JSON();
    setResponseMessage("Error: ${errorData.message || response.statusText}");
  }
}catch(error){
  setResponseMessage("Network error: &{error.message}");
  }   
};
  return (
   <div className="signup-container">
   <form onSubmit={handleSubmit}>
      <div> 
        <header>
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
        <button type="submit">Sign Up</button>
      </div>
    </form>
    {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};
export default SignUp;
