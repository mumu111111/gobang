import React from 'react';
import './index.css';
const xx = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
]




function Cell() {
    return (
        <div>
            {
                xx.map(items =>
                    <div>
                        {items.map(item =>
                            <div>
                                {item}
                            </div>)
                        }
                    </div>
                )
            }
        </div>)
}

export default Cell;
