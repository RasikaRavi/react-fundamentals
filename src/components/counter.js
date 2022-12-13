import React, { Component } from 'react';

class Counter extends Component{
    constructor(){
        super()
        this.state={
            count: 0
        }
    }
    increment(){
        // this.state.count=this.state.count+1
        this.setState({
           count: this.state.count+1
        },
        () =>
        {
            console.log('Callback Value',this.state.count)
        } )
        console.log(this.state.count)
    }
    render(){
        
        return(
            <div> 
               Count-{this.state.count}<br/>
               <button onClick={()=> this.increment}> Increment </button>
            </div>

            // React.createElement('div',null,React.createElement('h1',null,'Hello Rasika'))
            )
    }


}

export default Counter;