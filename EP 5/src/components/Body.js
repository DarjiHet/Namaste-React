import restList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {

    const [letRestList, setResList] = useState(restList)
    return (
        <div className="body">
            <button className="filter-btn" onClick={() => {
                const filterdList = letRestList.filter((res) => {
                   return res.info.avgRating > 4;
                })
                setResList(filterdList);
                console.log(filterdList);
            }}>
            Filter
            </button>
            <div className="res-container">
                {
                    letRestList.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;