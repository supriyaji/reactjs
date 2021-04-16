import React,{useState,useEffect} from 'react'

export default function HookCounter() {

const [channelname,setname] =useState("technical suneja");
const [count,setcount] =useState("subscribers");
const [counter,setcounter] =useState(0);
const [counter1,setcounter1] =useState(0);
//const name= channelname[0];
//const setname=channelname[1];

const stateHandler =() =>{
    setname("supriya yadav")
    setcount("40000")
}

const Increment=()=>{
    setcounter(counter + 1)
}

const Decrement=()=>{
    setcounter1(counter1 - 1)
}

const Incremented= ()=>{
    for(let i=0;i<10;i++){
        setcounter(preCount => preCount + 1)
    }
}

useEffect( () => {
    console.log("supriya yadav")
},[counter1,counter]);

    return (
        <div>
            {channelname}
            {count}
            <button onClick ={stateHandler}>click here</button>
            <button onClick ={Increment}>Increment {counter} </button>
            <button onClick ={Decrement}>Decrement {counter1} </button>
            <button onClick ={Incremented}>Incremented by 10- {counter} </button>
        </div>
    )
}
