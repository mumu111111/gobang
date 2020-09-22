import React from 'react';
import './index.css';
const xx = [
    ['', 1, 1],
    [2, '', 2],
    [3, '', 3]
]

const U = function(props){
    return (
        <div>
            { props.text }
        </div>
    )
}

function Cell() {
    return (
        <div>
            {
                xx.map(items =>
                    <div className= "row">
                        {items.map(item =>
                            <div className= "col">
                                {U({text: item})}
                            </div>)
                        }
                    </div>
                )
            }
        </div>)
}

export default Cell;
