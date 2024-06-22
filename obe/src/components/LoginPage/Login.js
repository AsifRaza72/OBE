import React,{useState} from "react";
import "./Login.css"; // Import your CSS file for styling

const Login = () => {
  const [email,SetEmail]=useState("")
  const emailHandler=(e)=>{
    SetEmail(e.target.value)
    console.log(email)
  }
  console.log(email)
  return (
    <div className="login-container">
      <form className="form">
      <div>
        <h2>Login</h2>
        </div>
        <div className="form-group">
          <label 
          htmlFor="email"
          onChange={emailHandler}
          value={email}
          >Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="a form-group" >
          <a href="/forgot-password" className="a">Forgot Password?</a>
        </div>
        <div className="button">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
