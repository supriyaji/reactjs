import React, { Component } from 'react'

 class CFunctionClick extends Component {


    constructor(props){
        super(props);
        //this.changeEvent=this.changeEvent.bind(this);

        this.state={
            course:"mca",
            roll:this.props.roll
        }
    }

    changeEvent=() => {

        this.setState({
            course:"bca"
        })

        console.log("hello ajay",this.props.roll);
    }
    render() {
        const numbers=this.props.numbers;
       // const newNumbers=numbers.map( (numbers) => { return <li> {numbers} </li> });

        return (
            <div>
                <button onClick={this.changeEvent}>hit me</button>
                {this.props.roll}
                <ul>
                    {
                        numbers.map( (numbers) =>  <li key={numbers}> {numbers} </li> )
                    }
                </ul>
                {numbers[0]}
            </div>
            
        )
    }
}

export default CFunctionClick


    