import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
const cells = [
    [1, null, null],
    [null, null, null],
    [null, null, null],
]
const Cell = function (props) {
    return  (
        <div className="cell">
            {props.text}
        </div>
    )
}

const Chessboard = function () {
    return (
        <div>
            {cells.map(items=> <div className="row">
                {items.map(item => <div className="col">
                    <Cell text={item} />
                </div>)}
            </div>)}
        </div>
    )
}
// export default Chessboard;


ReactDOM.render(<div>
    <Chessboard />
</div>, document.getElementById('root'))