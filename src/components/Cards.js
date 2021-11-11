import React from "react";
import Carditem from "./Casrditem";
import "./Cards.css";


function Cards(){
    return (
        <div className="cards">
            <h1>CHECK OUT THESE EPIC DESTINATIONS!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem 
                            src="https://raw.githubusercontent.com/briancodex/react-website-v1/starter/public/images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon jungle "
                            label="Adventure"
                            path="./services"
                        />

                            <Carditem 
                            src="https://raw.githubusercontent.com/briancodex/react-website-v1/starter/public/images/img-2.jpg"
                            text="Travel through the islands of Bali in a private cruise"
                            label="Luxury"
                            path="./services"
                        />
                    </ul>
                    <ul className="cards__items">
                    <Carditem
              src='https://raw.githubusercontent.com/briancodex/react-website-v1/starter/public/images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <Carditem
              src='https://raw.githubusercontent.com/briancodex/react-website-v1/starter/public/images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <Carditem
              src='https://raw.githubusercontent.com/briancodex/react-website-v1/starter/public/images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards