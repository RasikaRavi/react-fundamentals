import React, { Component } from 'react';

class ClassClick extends Component{
    handleClassClick()
        {
            console.log("Class Button is Clicked");
        }
    render(){
        return(
            <button onClick={this.handleClassClick}> Click Me</button>
        )
    }
}

export default ClassClick;