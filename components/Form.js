import React, { Component } from 'react'

export class Form extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            address:''
        }
    }

    handleUsername=(event) => {
        this.setState({
            username:event.target.value
        });
    }
    handleaddress=(event)=>{
        this.setState({
            address:event.target.value
        });
    }
    handleSubmit=(event) => {
        alert(`${this.state.username} ${this.state.address}`)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" value={this.state.username} onChange={this.handleUsername}></input>
            </div>

            <div>
                <label>Address</label>
                <textarea value={this.state.address} onChange={this.handleaddress}></textarea>
            </div>
            <button> submit</button>
            </form>
        )
    }
}

export default Form
