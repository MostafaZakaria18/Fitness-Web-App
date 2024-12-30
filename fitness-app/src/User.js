import react, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./User.css";
import { faL } from "@fortawesome/free-solid-svg-icons";

const User = ()=>{
const[user, setUser] = useState(null);
const[loading, setLoading] = useState(true);
const[error, setError] = useState(null);
const navigate = useNavigate();

useEffect(() =>{
  const fetchUserProfile = async () =>{
    try{
      const response = await fetch(`http://localhost:8000/User?email=${localStorage.getItem('email')}`);
      if (!response.ok){
        throw new Error('failed to fetch user data: ${response.statusText}');
      }
      const data = await response.json();
      var mydate = new Date(data[0].birthDate).toISOString().split('T')[0];
      console.log(mydate);
      data[0].birthDate = mydate;
      setUser(data[0]);
      setLoading(false);
    } catch(err){
      setError(err.message);
      setLoading(false);
    }
  };
  fetchUserProfile();
}, []);
const goToLandingPage = () => {
  window.location.href="/";
};
const handleLogout = () =>{
  localStorage.removeItem("email");
  goToLandingPage();

}

if (loading) {
  return <div className="loading">Loading...</div>;
}

if (error) {
  return <div className="error">{error}</div>;
}
const handleEditClick = () => {
  window.location.href="/edit"
};
return(
<div className="user-profile">
  <div className="profile-header">
    {console.log(user)}
    <h1>User Profile</h1>
    {/* <p>Manage your account information</p> */}
  </div>
  <div className="profile-details">
    <h2>Details:</h2>
    <p><strong>Name:</strong> {user.name}</p>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>Phone:</strong> {user.phone}</p>
    <p><strong>Birth Date:</strong> {user.birthDate || "Not Provided"}</p>
  </div>
  <div className="profile-actions">
    <button className="edit-button" onClick={handleEditClick}>Edit</button>
    <button className="logout-button" onClick={handleLogout}>Logout</button>
  </div>
</div>

);
};

export default User;
