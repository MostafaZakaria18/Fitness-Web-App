    import React ,{useState}from "react";
    import './SignIn.css';
    import { validateOTP, generateOTP, sendOTPEmail} from "./OTP";
    //import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
    //import { faHome } from '@fortawesome/free-solid-svg-icons';


    const SignIn = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
    
        const handleSubmit = (e) => {
            e.preventDefault();
            setError("");
            
            var user = JSON.parse(localStorage.getItem('user'));
            user = {
                email:"ms@test.com",
                password: "123"
            }
            console.log("user --->", user)


    
            if (!user) {
                setError('No user found. Please register.');
            } else if (user.email !== email) {
                setError('Email not found.');
            } else if (user.password !== password) {
                setError('Incorrect password.');
            } else {
                localStorage.setItem('token', 'dummy-token'); 
                localStorage.setItem('email', user.email);
                setEmail('');
                setPassword('');
                
                window.location.href="/";
            }
           
        };
    
        return (
            <div className="signin-container">
                <h2>Please enter your information to sign In</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button className="signin-button"
                    type="submit">Sign In</button>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        );
    };
    
    export default SignIn;