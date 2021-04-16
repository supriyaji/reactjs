import React from 'react';
class Supriya extends React.Component {
    state={
        marks:0
    }

    marksIncremented=() => {
        this.setState({marks:this.state.marks + 1})
    }

    render() {
        return (
            <div>
                <h2 onMouseOver={this.marksIncremented}>SUpriya marks {this.state.marks} </h2>
            </div>
        )
    }
}
export default Supriya