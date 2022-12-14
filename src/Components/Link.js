import React from "react";

export class Link extends React.Component {
   
    componentDidMount() {
       this.message = setTimeout(() => alert("Component is opened"), 1000);
    }
    componentWillUnmount() {
        clearTimeout(this.message);
    }
    
    render(){

    if (this.props.visible) {
        
    return (
        <div>
            <a className="google" href='https://www.google.com' target="_blank" rel="noopener noreferrer">Google</a>
        </div>
    )
    }
    else 
    return null;
    
}
};