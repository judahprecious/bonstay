import Header from "../CommonComponents/header";
import React from "react";
import "./Styles//hotels.css";
import HotelCard from "./HotelCard";

const Hotels = () => {
    return (
        <div className="pages">
            <Header/>
            <main>
                <HotelCard />
            </main>
        </div>
        

    )
}
export default Hotels;