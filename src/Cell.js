import React from 'react';
import './index.css';
const xx = [
    ['', 1, 1],
    [2, '', 2],
    [3, '', 3]
]

const U = function(props){
    const clickA = function(e){
        // 有 就不能点击变换了
        // 知道上一个是 0 还是 x 才知道下一个显示什么
        // 点击后 怎么修改呢  只能去修改 上面的 数组了吧  

        console.log(e)

    }

    return (
        <div onClick={clickA}>
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
                                { U({text: item}) }
                            </div>)
                        }
                    </div>
                )
            }
        </div>)
}

export default Cell;
