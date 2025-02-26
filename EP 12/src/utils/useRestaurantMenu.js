import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [restInfo, setResInfo] = useState(null);

    //fetching data from api
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        // const data = await fetch(
        //     `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=${resId}`
        // );
        const data = await fetch(
           MENU_API + resId
        );

        const json = await data.json();

        // console.log(json);
        //setting local state variable
        setResInfo(json.data);
    };
    return restInfo;
}

export default useRestaurantMenu;