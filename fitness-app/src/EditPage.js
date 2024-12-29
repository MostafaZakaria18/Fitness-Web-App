import React, {useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./editPage.css";
import User from "./User";

const EditPage = () =>{
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: ''
      });
      
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchUserData = async() => {
            try{
                const response = await fetch(`http://localhost:8000/User?email=${localStorage.getItem('email')}`);
                if(!response.ok){
                    throw new Error('Failed to fetch user data');
                }
                const data = await response.json();
                setUser(data[0]);
            }catch(err){
                setError('Failed to load user data');
            }
        };
        fetchUserData();
    },[]);
    const handleChange= (e) =>{
        const { name, value } = e.target;
        setUser((prevState)=>({
            ...prevState,
            [name]:value
        }));
    };
    const handleSave = async() =>{
        try{
            const response = await fetch(`http://localhost:8000/User`,{
                method:'PUT',
                headers:{
                     'Content-Type': 'application/json'
                },
                body:JSON.stringify(user)
            });
            if(response.ok){
                navigate('/user');
            }else{
                setError('Failed to update user data');
            }
        }catch(err){
            setError('Network error');
        }
    };
    return (
        <div className="edit-page">
          <h2>Edit Profile</h2>
          {error && <div className="error">{error}</div>}
          <form>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
              />
            </div>
            {/* <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                readOnly
              />
            </div> */}
            <div>
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
              />
            </div>
            <label>Birth Date:</label>
            <input
                type="date"
                name="birthDate"
                value={user.birthDate}
                onChange={handleChange}
                placeholder="Birth Date"
                required
            />    
            {console.log(user)}
            <div className="button-container">
          <button className="button" type="button" onClick={handleSave}>
            Save Changes
          </button>
          <button className="cancel-button" type="button" onClick={() => navigate('/user')}>
            Cancel
          </button>
        </div>
          </form>
        </div>
      );
};
export default EditPage;