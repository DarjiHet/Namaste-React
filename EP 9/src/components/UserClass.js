import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props)
        //making state variable inside class component
        this.state = {
            count: 0,
            count2: 1,
        }
        console.log(props.name + "constructor")
    }

    componentDidMount(){
        console.log(this.props.name + "did mount");
    }

    render() {
        const {name, location, contact} = this.props;
        const {count, count2} = this.state;

        console.log(name + "render")

        return(
            <div className = "user-card" >
                <h1>{count}</h1>
                <h1>{count2}</h1>
                <button onClick={() => {
                    this.setState({
                        count : this.state.count + 1,
                    })
                }}>Count increase</button>
                <h1>Name: {name} </h1>
                <h2>Location: {location} </h2>
                <h2>Contact: {contact} </h2>
            </div>
        )
    }
}

export default UserClass;