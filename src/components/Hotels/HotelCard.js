
const imageUrl = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/bf/06/59/killashee-hotel-spa-leisure.jpg?w=500&h=-1&s=1"

const card = {
    "id": 1,
    "hotelName": "Paradise Stay",
    "city": "Bangalore",
    "description": "A home to relax at the 'city' peek with all the facilities near you",
    "amenities": "Different Cuisine Food, Swimming Pool, Self Cooking Station",
    "phoneNo": 9090909090,
    "address": "120/1C, Bangalore, Karnataka",
    "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/bf/06/59/killashee-hotel-spa-leisure.jpg?w=500&h=-1&s=1",
    "reviews": [
      "Good Accomodation",
      "Best place to relax with friends and family",
      "The best place to chill with friends. ",
      "The best place I ever visited."
    ] 

};

const HotelCard = () => {
    return (
        <div className="hotel_card">

                <div className="image_container">
                <img src={imageUrl} alt="hotel room"/>
                    
                </div>


                <div className="details_container">
                    <h4>{card.hotel}</h4>
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
                {/* <div className="reviews_container"></div> */}
           


           
        </div>
    )
}

export default HotelCard;