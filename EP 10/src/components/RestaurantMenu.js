import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams()

    const restInfo = useRestaurantMenu(resId);
    
    //condition for shimmer ui
    if (restInfo == null) return <Shimmer />;

    //data of restaurant
    const restaurantInfo = restInfo?.cards[2]?.card?.card?.info; 
    const { name = "Unknown", costForTwoMessage = "N/A", cuisines = [], avgRating = "" } = restaurantInfo;

    //item or menu of restaurant
    const itemCards = restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

    console.log();

    return(
        <div className="menu">
            <h1> {name} </h1>
            <h3> {avgRating} </h3>
            <p>{cuisines.join(", ")} - {"Rs"} {costForTwoMessage} </p> 
            <h3>Menu</h3>
            <ul>
                {
                    itemCards.map((item) => (
                        <li key={item.card.info.id} > {item.card.info.name} - {item.card.info.defaultPrice / 100 || item.card.info.finalPrice / 100 || item.card.info.price / 100 } </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;