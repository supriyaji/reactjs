import React from 'react';

export const Header=(props) => {
    console.log(props);

    return (
        <div>
         <h1>hello {props.name}-{props.last} </h1>
         {props.children}
         </div>
    )
}

//export default Header;