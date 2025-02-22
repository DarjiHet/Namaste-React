import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props
    const {name, cuisines, avgRating, deliveryTime, costForTwo, promoted} = resData?.info;
    return (
        <div className="res-card m-4 p-4 w-[200px] h-[450px] bg-gray-200 hover:bg-gray-300 rounded-lg">
            <img className="res-logo h-[200px] rounded-lg" src={CDN_URL + resData.info.cloudinaryImageId} alt="food-logo" />
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

//higher order component

export const withPromotedLabel = (RestaurantCard)  => {
    return(props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;