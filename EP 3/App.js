import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

// Creating Root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Creating react element
const heading = React.createElement("h1", {id:"heading"}, "Hello World!");
// console.log(heading);

// Creating React Element using jsx
const jsxHeading = <h1 id="heading">Hello World! 🚀</h1>;
// console.log(jsxHeading);

// Creating React Component

const Test = () => {
    return <h1>Hello Element</h1> 
}

const Fu = () => {
    return (
        <div className="Container">
            <Test />
            <h1>Hello World!</h1>
            <h1>Hello My Name Is Het 🚀</h1>
        </div>
    )    
}

root.render(<Fu />);


