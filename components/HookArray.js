import React,{useState} from 'react'

function HookArray() {
    const [items,setItem]=useState([])
    const addItem = () => {
        setItem([...items,{
            id:items.length,
            value:Math.floor(Math.random() *10)
        }])
    }
    return (
        <div>
            <button onClick={addItem}>add a random number</button>
            <ul>
                {items.map(item =>(<li key={item.value}> {item.value} </li>))}
            </ul>
        </div>
    )
}

export default HookArray
