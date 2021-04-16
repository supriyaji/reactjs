import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Router
} from "react-router-dom";

export default function Routing() {
    return (
        <BrowserRouter>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <Switch>
            <Route path="/about">
            <About></About>
           </Route>
           <Route path="/users">
            <Users></Users>
           </Route>
           <Route path="/home">
            <Home></Home>
           </Route>
        </Switch>
        </BrowserRouter>
    )
}

function Home(){
    return <h1>hello home</h1>
}
function About(){
    return <h1>about</h1>
}
function Users(){
    return <h1> Users</h1>
}