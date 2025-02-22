import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

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

    //filtering categories
    const categories = 
    restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || 
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory")

        // console.log(categories)
    return(
        <div className="menu text-center">
            <h1 className="font-bold my-6 text-2xl"> {name} </h1>
            <h3 className="font-bold text-lg"> {avgRating} </h3>
            <p className="font-bold text-lg">{cuisines.join(", ")} - {"Rs"} {costForTwoMessage} </p> 
            
            {/* categories accordions or drop down */}
            {categories.map((category, i) => (
                <RestaurantCategory data={category?.card?.card} key={i} />
            ))}
        </div>
    )
}

export default RestaurantMenu;