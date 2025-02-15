import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [restInfo, setResInfo] = useState([]);

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch( 
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=47589"
        );
        const json = await data.json();

        console.log(json);
        setResInfo(json);
    };    

    // const {name } = restInfo?.data?.cards[0]?.card?.card?.text;
    const name = restInfo?.data?.cards[0]?.card?.card?.text;

    const {avgRating, costForTwoMessage, cuisines} = restInfo?.data?.cards[2]?.card?.card?.info;

    if (restInfo == null) return <Shimmer />;

    return(
        <div className="menu">
            <h1> {name} </h1>
            <h2> {avgRating} </h2>
            <p>{cuisines} - {"Rs"} {costForTwoMessage} </p>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Biryani</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;