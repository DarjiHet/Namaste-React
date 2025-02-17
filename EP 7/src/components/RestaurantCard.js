import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    //data of different Restaurant
    const {resData} = props
    const {name, cuisines, avgRating, deliveryTime, costForTwo} = resData?.info;
    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + resData.info.cloudinaryImageId} alt="food-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;
