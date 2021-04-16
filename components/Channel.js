import React from 'react';

class Channel extends React.Component{

    constructor(){
        super();
        this.state={
            msg:'technical suneja'
        }
    }
    subscribe(){
        this.setState({
            msg:'thanks for subscribing our youtube chhanel'
        })
    }
   render(){
        return  (
         <div>
        <h1> {this.state.msg} </h1>
        <button onClick={ () => { this.subscribe() }}>subscribe</button>
        </div>
        )
    }
}
export default Channel;