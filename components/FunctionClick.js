import React from 'react'

function FunctionClick() {

    function changeEvent(){
        //e.preventDefault();
        console.log("hello event handiling..." )
    }

    return (
        <div>
        <a href="https://www.youtube.com/" onClick={changeEvent()}>click me</a>
        <h1>hello priya </h1>



         </div>
    )
    
    
}

export default FunctionClick

