import { Link } from "react-router-dom";
import "./Styles/forms.css";

const Form = () => {
    return (
       <div className="form-div">
        <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required/>

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" required/>

        <label htmlFor="phoneNo">Phone No:</label>
        <input type="number" id="phoneNo" required/>

        <label htmlFor="emailID">Email ID:</label>
        <input type="email" id="emailID" required/>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" required/>

        <button type="submit">Register</button>

       </form>
       <p><Link to= "/login">Login</Link> with your existing account.</p>
       </div>
    );

};


export default Form;