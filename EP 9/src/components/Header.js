import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [ loginBtn, setLoginBtn ] = useState("Login");

    const online = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li> onlineStatus : {online ? "✅" : "🔴"} </li>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/about">About Us</Link> </li>
                    <li> <Link to="/contact">Contact Us</Link> </li>
                    <li> <Link to="/cart">Cart</Link> </li>
                    <li> <Link to="/grocery">Grocery</Link> </li>
                    <button className="login-btn" onClick={() => {
                        loginBtn == "Login" ? setLoginBtn("Logout") : setLoginBtn("Login"); 
                    }}> {loginBtn} </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;