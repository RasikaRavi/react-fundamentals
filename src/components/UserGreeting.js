import React, { Component } from 'react';

class UserGreeting extends Component{
    constructor(){
        super()
        this.state={
            isLoggedIn:true
        }
    }
    render(){
        // if(this.state.isLoggedIn)
        //     return <div> Welcome Rasika </div>
        // else
        //     return <div> Welcome Guest</div>

        // let message
        // if(this.state.isLoggedIn)
        //     message=<div>Welcome Rasika</div>
        // else
        //     message=<div>Welcome Guest</div>
        // return <div> {message}</div>

        // return(this.state.isLoggedIn ? <div>Welcome Rasika</div> : <div>Welcome Guest</div>)

        return this.state.isLoggedIn && <div>Welcome Rasika</div>
    }

}

export default UserGreeting;


