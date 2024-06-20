import Header from "../CommonComponents/header";
import React, { useEffect, useState } from "react";
import "./Styles//hotels.css";
import HotelCard from "./HotelCard";
import axios from "axios";

const Hotels = () => {
    let a = 10;
    const [hotelsData, setHotelsData] = useState();

    useEffect(() => {
        console.log("use effect is running");
        axios.get("http://localhost:3000/hotels")
        .then((res) => {
            console.log(res.data);
            setHotelsData(res.data);
        });
    );
    return (
        <div className="pages">
            <Header/>
            <main>
                <HotelCard card={jay}/>
            </main>
        </div>

    )
}
export default Hotels;