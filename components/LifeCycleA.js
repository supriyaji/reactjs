import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';
export class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:"sam"
        }
        console.log("LifeCycleA:constructor");
    }
    static getDerivedStateFromProps(props,state){

        console.log("LifeCycleA : getDeivedStateFromProps");
        return null;
    }
    componentDidMount(){
        console.log("LifeCycleA: componentDidMount");
    }
    render() {
        console.log("LifeCycleA: render");
        return (
            <div>
                LifeCycleA
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
}

export default LifeCycleA
