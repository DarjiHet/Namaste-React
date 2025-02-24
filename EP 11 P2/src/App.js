import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";
const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {


    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "Het",
        };
        setUserName(data.name);
    }, [])

    return (
        <div className="app">
            <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
                <Header />
                <Outlet />
            </UserContext.Provider>
        </div>
    )
}


//doing lazy loading 

const Grocery = lazy(() => import("./components/Grocery"));

const appRout = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Loading.....</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
        ],
        errorElement: <Error />,
    },
])

root.render(<RouterProvider router={appRout} />);