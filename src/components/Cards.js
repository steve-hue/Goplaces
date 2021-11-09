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
                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon jungle "
                            label="Adventure"
                            path="./services"
                        />

                            <Carditem 
                            src="images/img-2.jpg"
                            text="Travel through the islands of Bali in a private cruise"
                            label="Luxury"
                            path="./services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <Carditem 
                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon jungle "
                            label="Adventure"
                            path="./services"
                        />

                            <Carditem 
                            src="images/img-2.jpg"
                            text="Travel through the islands of Bali in a private cruise"
                            label="Luxury"
                            path="./services"
                        />
                         <Carditem 
                            src="images/img-2.jpg"
                            text="Travel through the islands of Bali in a private cruise"
                            label="Luxury"
                            path="./services"
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cards