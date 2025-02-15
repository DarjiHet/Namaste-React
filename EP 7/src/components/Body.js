import restList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    //using useState hook
    const [letRestList, setResList] = useState([])
    const [fillterdResList, setFilterdResList] = useState([]);
    const [searchText, setSearchText] = useState("");

    //i always updating the fillterdReslist, and data is fillterd of letResList and i make a copy of letResList as fillterdResList

    //using useEffect hook
    useEffect(() => {
        fetchData();
    }, []);

    //fething data from api
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=23.022505&lng=72.5713621&str=Pizza%20Hut&trackingId=86427754-427e-218e-3cd8-ec88b07f664f&submitAction=ENTER&queryUniqueId=b9aae03c-3b69-ff14-ab6c-7487ae53ac16");
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json)

        setResList(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card?.restaurants);
        setFilterdResList(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card?.restaurants);
    }

    //shimmer ui rendring
    // if(letRestList == null){
    //     return <Shimmer />
    // }
console.log("rerender");
    return letRestList.length == 0 ? <Shimmer /> : (

        <div className="body">

            <div className="filter">

                <div className="search">
                    <input type="text" name="Steaxt" className="text" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="search-btn" onClick={() => {
                        const fillterdRes =  letRestList.filter((res) => res?.info.name?.toLowerCase().includes(searchText.toLowerCase()));
                        setFilterdResList(fillterdRes)
                    }}>
                        Search
                    </button>
                </div>

                {/* the rating */}
                <button className="filter-btn" onClick={() => {
                    const filterdList = letRestList.filter((res) => {
                        return res.info.avgRating > 4;
                    })
                    setFilterdResList(filterdList);
                    // console.log(filterdList);
                }}>
                    Filter
                </button>

            </div>
            <div className="res-container">
                {
                    fillterdResList.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;