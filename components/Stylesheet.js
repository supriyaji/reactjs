import React from 'react'
import './Style.css';
function stylesheet(props) {
    let className=props.isvalue ? 'demo' : 'demo1';
    return (
        <div>
            <h1 className={className} > hello stylesheet</h1>
        </div>
    )
}

export default stylesheet
