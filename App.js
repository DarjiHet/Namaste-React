import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = <h1>Hello World!</h1>;

const Header = () => {
    return(
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
    console.log(props)
    return (
        <div className="res-card">
            <img className="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7pL_-KM1s7Nn2Sb099RoM-qsFotgtcw67VQ&s" alt="food-logo" />
             <h3>{props.resName}</h3>
             <h4>{props.resCouisn}</h4>
             <h4>{props.resReating}</h4>
             <h4>{props.resTime}</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Serach    
            </div>
            <div className="res-container">
                <RestaurantCard resName="Meghana Foods" resCouisn="Biryani, North Indian, Asian" resReating="4.3 stars" resTime="38 minutes"/>
                <RestaurantCard resName="KFC" resCouisn="Burgers, French Fries, Cook" resReating="4.5 stars" resTime="25 minutes"/>
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