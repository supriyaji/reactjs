import React from 'react'

function Inline() {

    const heading={
        color:'red',
        fontSize:'126px'
    }

    return (
        <div>
        <h1 className='error'>Error</h1>
        
            <h1 style={heading} >HELLOs</h1>
        </div>
    )
}

export default Inline
