import React, {Component} from 'react';

class Greet extends Component{
    render(){
        
        return(
            <div> 
                <h1> Hello {this.props.name}  </h1>
            </div>
            // React.createElement('div',null,React.createElement('h1',null,'Hello Rasika'))
            )
    }
    
}

export default Greet;