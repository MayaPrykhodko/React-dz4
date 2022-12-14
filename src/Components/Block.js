import React from "react";
import { CreateButton } from "./CreateButton.js";
import { Link } from "./Link.js";

export class Block extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
        }

    
    handleButtonClick () {
        this.setState({isVisible: !this.state.isVisible});
        
    }

    render() {
        return (
            <div>
               <Link visible={!this.state.isVisible}>{this.state.isVisible} </Link>
               <CreateButton onClick={this.handleButtonClick} />
            </div>
        );
    }
}