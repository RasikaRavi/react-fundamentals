import React, { Component } from 'react';
import Message from './Message';

class EventBind extends Component{
    constructor(){
        super()
        this.state={
            message: "Hello"
        }
        // this.clickHandler=this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message: " Button clicked"
    //     })
    // }

    clickHandler=()=>{
        this.setState({
            message:'Button clicked'
        })
    }

    render(){
        return(
            <div> 
                <div> {this.state.message} </div>
                {/* <button onClick={()=>this.clickHandler()}> Click</button> */}
                {/* <button onClick={this.clickHandler.bind(this)}> Click</button> */}
                <button onClick={this.clickHandler}> Click</button>
            </div>
        )
    }
}

export default EventBind;