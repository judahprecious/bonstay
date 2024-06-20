import Header from "../CommonComponents/header";
import React from "react";
import "./Styles/registration.css";
import Form from "./forms";


const Registration = () => {
    return (
        <div className="pages">
            <Header />
                <main>
                    <div className="form_container">
                        <div className="form_image">
                            <img 
                            src="./images/registration.jpg" alt="Image not found" 
                             />
                            <span className="welcome-msg "> Welcome to BonStay </span>
                        </div>
                        <Form />
                    </div>       
                </main>
        </div>

    )
}
export default Registration;