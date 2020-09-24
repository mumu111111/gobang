import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const Cell = function (props) {
    // const onClickCell = function () {
    // props.text = 'x'  //不能修改 text 因为他是一个只读属性
    // }
    return (
        <div className="cell" onClick={props.onClick}>
            {props.text}
        </div>
    )
}
// 传递方式  父组件 赋值参数方式  传递给 子组件 子接收 

const Chessboard = function () {
    const [cells, setCells] = React.useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ])
    const [n, setN] = React.useState(0)
    const [finished, setFinished] = React.useState(false)

    const xx = (copy, row, col) => {

        for (let i = 0; i < 3; i++) {
            if (copy[i][0] === copy[i][1] && copy[i][1] === copy[i][2] && copy[i][0] !== null) {
                console.log(copy[i][0] + 'success')
                setFinished(true)
            }
        }
        for (let i = 0; i < 3; i++) {
            if (copy[0][i] === copy[1][i] && copy[1][i] === copy[2][i] && copy[1][i] !== null) {
                console.log(copy[0][i] + 'success')
                setFinished(true)
            }
        }

        if (copy[0][0] === copy[1][1] && copy[1][1] === copy[2][2] && copy[0][0] !== null) {
            console.log(copy[row][col] + '赢了')
            setFinished(true)
        }
        if (copy[0][2] === copy[1][1] && copy[1][1] === copy[2][0] && copy[2][0] !== null) {
            console.log(copy[row][col] + '赢了')
            setFinished(true)
        }
    }
    const onClickCell = (row, col) => {
        // 能够操作 数组  但是数组也没在 这个组件中   
        // 原则 只有是自己的变量才能修改  er当前是变量cells 
        // onClick={() => onClickCell(row, col)} 避免没点击前 就已经执行
        const copy = JSON.parse(JSON.stringify(cells))
        copy[row][col] = n % 2 === 0 ? 'X' : 'O'
        setN(n + 1)
        setCells(copy)
        xx(copy, row, col)
    }
    // 更新后的 cells 便利后 将新的 item  给到 子组件 
    return (
        <div>
            {cells.map((items, row) => <div className="row">
                {items.map((item, col) => <div className="col">
                    <Cell text={item} onClick={() => onClickCell(row, col)} />
                </div>)}
            </div>)}
            <div>
                {finished && <div className="finishText">游戏结束</div>}
            </div>
        </div>
    )
}

// 加入渲染到页面
ReactDOM.render(<div>
    <Chessboard />
</div>, document.getElementById('root'))