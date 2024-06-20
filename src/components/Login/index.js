import Header from "../CommonComponents/header";
import React from "react";
import "./styles/login.css"
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="pages">
            <Header />
            <main>
                    <div className="login_container">
                        <h2>Bonstay with Us</h2>
                        <form>
                            <label htmlFor="userid">UserID:</label>
                            <input type="text" id="userid" required/>

                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" required/>

                            <button type="submit">Login</button>
                        </form>
                        <p><Link to= "/register">Sign Up</Link> to create a new account.</p>
                        
                    </div>       
                </main>


        </div>
    )
}
export default Login;