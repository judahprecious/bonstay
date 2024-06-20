
const imageUrl = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/bf/06/59/killashee-hotel-spa-leisure.jpg?w=500&h=-1&s=1"

const HotelCard = ({card}) => {
    return (
        <div className="hotel_card">

                <div className="img_container">
                <img src={imageUrl} alt="hotel room"/>
                    
                </div>


                <div className="details_container">
                    <h4>{card.hotelName}</h4>
                    <p>City: {card.city}</p>
                    <p>Amanetics:{card.amenities}</p>
                    <p>Address:{card.address}</p>
                    <p>Contact:{card.phoneNo}</p>

                </div>


               <div className="buttons_container">
                <button>Book A Room</button>
                <button>Add Review</button>
                <button>View Review</button>

               </div>
              


        </div>
    )
}

export default HotelCard;