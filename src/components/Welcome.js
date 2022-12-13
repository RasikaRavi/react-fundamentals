import React from 'react';

// function Welcome()
// {
//     return <h1> Welcome Rasika</h1>
// }
const Welcome = props => {
    // props.name='Kanna' 
    return <h1> Welcome {props.name} a.k.a {props.surName}</h1>
}

export default Welcome;