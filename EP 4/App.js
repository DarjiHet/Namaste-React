import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg" alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const {resData} = props
    const {name, cuisines, avgRating, deliveryTime, costForTwo} = resData?.info;
    // console.log(props)
    return (
        <div className="res-card">
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + resData.info.cloudinaryImageId} alt="food-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
            <h4>{"₹" + costForTwo / 100 + " For TWO"}</h4>
        </div>
    )
}

const restList = [
    {
        info: {
            id: "47589",
            name: "Pizza Hut",
            city: "10",
            slugs: {
                restaurant: "pizza-hut-navrangpura-navrangpura",
                city: "ahmedabad"
            },
            cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
            address: "Shop No-956, ground Floor, City gold Complex, Ashramroad",
            locality: "Ashram Road",
            areaName: "Navrangpura",
            costForTwo: "35000",
            costForTwoMessage: "₹350 FOR TWO",
            cuisines: ["Pizzas"],
            avgRating: 4.1,
            feeDetails: {},
            avgRatingString: "4.1",
            totalRatingsString: "7.4K+",
            sla: {
                deliveryTime: 24,
                minDeliveryTime: 20,
                maxDeliveryTime: 25,
                lastMileTravel: 1.8,
                serviceability: "SERVICEABLE",
                rainMode: "RAIN_MODE_NONE",
                slaString: "20-25 MINS",
                lastMileTravelString: "1.8 km",
                iconType: "ICON_TYPE_EMPTY"
            }
        }
    },
    {
        info: {
            id: "592618",
            name: "Drizzle's Pizza",
            city: "10",
            slugs: {
                restaurant: "drizzle’s-pizza-navrangpura-navrangpura",
                city: "ahmedabad"
            },
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/5/9a586992-5847-483d-98d0-c8fb1f48bfcc_592618 SS.jpg",
            address: "Arjun Avenue, G-1, Near Nutan Nagrik Bank, Opp. Samtheshwar Mahadev, Law Garden, Ellishbridge, Ahmedabad",
            locality: "Nr. Law Garden",
            areaName: "C G Road",
            costForTwo: "30000",
            costForTwoMessage: "₹300 FOR TWO",
            cuisines: ["Pizzas", "Pastas", "Fast Food", "Snacks", "Beverages"],
            avgRating: 4.5,
            feeDetails: {},
            avgRatingString: "4.5",
            totalRatingsString: "2.1K+",
            promoted: true,
            adTrackingId: "cid=25041654~p=1~adgrpid=25041654#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=592618~st=pizza~eid=c68c517a-04c6-42bd-a66a-4adf9ad73e2d~srvts=1739173137086",
            sla: {
                deliveryTime: 20,
                minDeliveryTime: 15,
                maxDeliveryTime: 20,
                lastMileTravel: 1.6,
                serviceability: "SERVICEABLE",
                rainMode: "RAIN_MODE_NONE",
                slaString: "15-20 MINS",
                lastMileTravelString: "1.6 km",
                iconType: "ICON_TYPE_EMPTY"
            }
        }
    },
    {
        info: {
            id: "50934",
            name: "Choice Snack Bar",
            city: "10",
            slugs: {
                restaurant: "choice-snack-bar-c-g-road-navrangpura",
                city: "ahmedabad"
            },
            cloudinaryImageId: "sj8eh6dtxlplwc5a5vl3",
            address: "Yamuna Building, Near Swastik Cross Road, C G Road, Ahmedabad",
            locality: "C G Road",
            areaName: "Navrangpura",
            costForTwo: "40000",
            costForTwoMessage: "₹400 FOR TWO",
            cuisines: ["Pizzas", "Chinese", "Snacks", "South Indian", "Fast Food"],
            avgRating: 4.6,
            feeDetails: {},
            avgRatingString: "4.6",
            totalRatingsString: "15K+",
            sla: {
                deliveryTime: 19,
                minDeliveryTime: 15,
                maxDeliveryTime: 20,
                lastMileTravel: 2.4,
                serviceability: "SERVICEABLE",
                rainMode: "RAIN_MODE_NONE",
                slaString: "15-20 MINS",
                lastMileTravelString: "2.4 km",
                iconType: "ICON_TYPE_EMPTY"
            }
        }
    }
];


const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Serach
            </div>
            <div className="res-container">
                {/* {restList.map((resrest, id) => {
                    return <RestaurantCard key={id} resData={resrest} />
                })} */}
                {
                    restList.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}



root.render(<AppLayout />);