import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");

    // const data = useContext(UserContext);
    // console.log(data);

    const {loggedInUser} = useContext(UserContext);

    const online = useOnlineStatus();
    return (
        <div className="header flex justify-between bg-pink-100 shadow-lg m-2">
            <div className="logo-container">
                <img className="logo w-35" src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex">
                    <li className="px-4"> onlineStatus : {online ? "✅" : "🔴"} </li>
                    <li className="px-4"> <Link to="/">Home</Link> </li>
                    <li className="px-4"> <Link to="/about">About Us</Link> </li>
                    <li className="px-4"> <Link to="/contact">Contact Us</Link> </li>
                    <li className="px-4"> <Link to="/cart">Cart</Link> </li>
                    <li className="px-4"> <Link to="/grocery">Grocery</Link> </li>
                    <button className="login-btn px-4 cursor-pointer" onClick={() => {
                        loginBtn == "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
                    }}> {loginBtn} </button>

                    <li className="px-4"> {loggedInUser} </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;