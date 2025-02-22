const ItemList = ({ items }) => {
    console.log(items)
    return (
        <div>
            {items.map((item, index) => (
                <div key={index} className="p-2 m-2 border-b-2">
                    <div>
                        <span>{item?.card?.info?.name}</span>
                        <span>{item?.card?.info?.price}</span>
                    </div>
                    <p>{item?.card?.info?.description}</p>

                    {/* Loop through subItems inside itemCards if available */}
                    {item?.itemCards?.map((subItem, subIndex) => (
                        <div key={subIndex} className="p-2 m-2 border-b-2">
                            <div>
                                <span>{subItem?.card?.info?.name}</span>
                                <span>{subItem?.card?.info?.price}</span>
                            </div>
                            <p>{subItem?.card?.info?.description}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ItemList;