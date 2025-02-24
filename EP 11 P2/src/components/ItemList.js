import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    // console.log(items)
    return (
        <div>
            {items.map((item, index) => (
                <div key={index} className="p-2 m-2 border-gray-200 border-b-2 text-left">
                    <div className="p-4">
                        <img src={CDN_URL + item?.card?.info?.imageId} className="w-35" />
                        <button className="p-2 bg-black text-white shadow-lg text-xs relative left-12 rounded-lg"> Add+ </button>
                    </div>
                    <div className="">
                        <div className="py-2">
                            <span>{item?.card?.info?.name}</span>
                            <span>{item?.card?.info?.price}</span>
                        </div>
                        <p>{item?.card?.info?.description}</p>
                    </div>
                    {/* Loop through subItems inside itemCards if available */}
                    {item?.itemCards?.map((subItem, subIndex) => (
                        <div key={subIndex} className="p-2 m-2 border-gray-200 border-b-2 text-left">
                            <div className="p-4">
                                <img src={CDN_URL + subItem?.card?.info?.imageId} className="w-35" />
                                <button className="p-2 bg-black text-white shadow-lg text-xs relative left-12 rounded-lg"> Add+ </button>
                            </div>
                            <div>
                                <div className="py-2">
                                    <span>{subItem?.card?.info?.name}</span>
                                    <span>{subItem?.card?.info?.price}</span>
                                </div>
                                <p>{subItem?.card?.info?.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ItemList;