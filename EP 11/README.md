# Learning React 🚀 | Namaste React Course
<br>

## Concepts Covered 
<br>

Throughout the course, I have learned and implemented the following concepts:<br>

- **useState Hook** – Managing state in functional components.<br>  
- **Reconciliation** – How React efficiently updates the UI.<br>
- **React Fiber** – The architecture behind React’s rendering and scheduling.<br>
- **Virtual DOM** – Optimizing UI updates using a lightweight DOM representation.<br>  
- **Diff Algorithm** – Understanding how React determines which parts of the UI need updates.<br>


https://www.swiggy.com/city/ahmedabad/pizza-hut-ashram-road-navrangpura-rest47589

https://www.swiggy.com/city/ahmedabad/name-locality-areaName-restid



https://www.swiggy.com/city/ahmedabad/la-milano-pizzeria-navrangpura-rest417826
https://www.swiggy.com/city/ahmedabad/winners-pizza-fresh-dough-sachet-2-navrangpura-rest785855


<ul>
                {
                    itemCards ? (
                        itemCards.map((item) => (
                            <li key={item.card.info.id} > {item.card.info.name} - {item.card.info.defaultPrice / 100 || item.card.info.finalPrice / 100 || item.card.info.price / 100 } </li>
                        ))
                    ) : ( <p> Not </p> )
                }
            </ul>









<h3>Menu</h3>
            <ul>
                {
                    itemCards.map((item) => (
                        <li key={item.card.info.id} > {item.card.info.name} - {item.card.info.defaultPrice / 100 || item.card.info.finalPrice / 100 || item.card.info.price / 100 } </li>
                    ))
                }
            </ul>



            {/* {items.map((item, index) => (
                console.log(item?.card?.info?.name || item?.itemCards.info.name)
            ))} */}