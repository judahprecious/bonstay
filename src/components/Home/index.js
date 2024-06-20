import Header from "../CommonComponents/header";
import "./styles/home.css";
const Home = () => {
    return (
        <div className="pages">
            <Header />
            <main>
                <div className="home_container">
                BonStay always provides you an amazing and pleasant stay with your friends and family at reasonable prices.
                We provide well-designed space with modern amenities.
                You can reserve a room faster with our efficient BonStay app.  
                </div>
            </main>
        </div>
    )
}
export default Home;