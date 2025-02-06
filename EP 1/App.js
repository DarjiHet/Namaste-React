// making h1 tag using react

const heading = React.createElement("h1",
    {
        id: "heading",
        xyz: "nothing"
    },
    "Hello World From React!");
const root = ReactDOM.createRoot(document.getElementById("root"));




// the const heading is a object of react not tag of html, while we render it the browser will convert that object to html tag.


// making nest structure using react 

const parent = React.createElement("div", { id: "parent" }, 
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "Hello This is H1"),React.createElement("h2", {}, "Hello This is H2")])
,React.createElement("div", { id: "child2" },
    [React.createElement("h1", {}, "Hello This is H1"),React.createElement("h2", {}, "Hello This is H2")])
]
)

root.render(parent);