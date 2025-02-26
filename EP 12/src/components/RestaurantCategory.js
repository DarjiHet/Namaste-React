import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    // console.log(data)

    // const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        // setShowIndex(!showItems);
        setShowIndex();
    }
    return (
        <div>
            <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">

                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({(data.itemCards?.length) || (data.categories?.length)}) 
                        
                    </span>
                    {/* <span>▼</span> */}
                    <span>{showItems ? "▲" : "▼"}</span>
                </div>
                {/* Accordion Body */}

             { showItems && <ItemList items={(data.itemCards) || (data.categories)}  /> }
            </div>
        </div>
    )
}

export default RestaurantCategory;
