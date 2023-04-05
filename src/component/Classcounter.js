import { render } from "@testing-library/react";
import React, {Component} from "react";

class Classcounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 0,
        };
            
    }

    counterIncrement = () => {
        this.setState({name:this.state.name + 1});
    };


    counterDecrement = () => {
        this.setState({name:this.state.name - 1});
    };


    render() {
        return(
            <>
            <h1>Simple Counter</h1>
            <button onClick={this.counterIncrement}>+</button>
            <button onClick={this.counterDecrement}>-</button>
            
            </>
        );
    }
}



export default Classcounter;