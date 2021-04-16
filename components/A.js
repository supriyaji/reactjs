import React, { Component } from 'react'
import B from './B';
import C from './C'
import {Provider} from './context'
export class A extends Component {
    state={
        name:"Supriya Yadav",
        roll:20
    }
    handleClickContext=() =>{
        this.setState({roll:this.state.roll+1})
    }
    render() {
        const contextValue={
            data:this.state,
            handlecheck:this.handleClickContext
        }
        return (
            <div>
                <h1>component A</h1>
                <Provider value={contextValue}>
                    <B/>
                    <C/>
                </Provider>
            
            </div>
        )
    }
}

export default A
