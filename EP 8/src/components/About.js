import User from "./User"
import UserClass from "./UserClass";
import React from "react";

// const About = () => {
//     return (
//         <div>
//             <h1>About Page!</h1>
//             <h2>This is about page.</h2>
//             <User name={"1"} location={"Ahemedabad"} contact={"jaiho"}/>
//             <UserClass name={"2"} location={"Ahemedabad"} contact={"jaiho"}/>
//         </div>
//     )
// }


class About extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name: "Dummy",
                public_repos: "Dummy",
            },
        };

        console.log("parent constructor");
    }

    async componentDidMount(){
        console.log("Parent didmount");

        const data = await fetch("https://api.github.com/users/DarjiHet");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
    }

    componentWillUnmount(){
        console.log("Unmount")
    }

    componentDidUpdate(){
        console.log("component did update");
    }
    debugger;

    render() {
        console.log("parent render");

        const {name, public_repos} = this.state.userInfo;

        return (
            <div>
                <h2>This is </h2>
                <h1>About Page</h1>
                <h1>{name}</h1>
                <h2>{public_repos}</h2>
                {/* <User name={"1"} location={"Ahemedabad"} contact={"jaiho"}/> */}
                {/* <UserClass name={"1"} location={"Ahemedabad"} contact={"jaiho"}/>
                <UserClass name={"2"} location={"Ahemedabad"} contact={"jaiho"}/>
                <UserClass name={"3"} location={"Ahemedabad"} contact={"jaiho"}/> */}
            </div>
        )
    }
}

export default About;