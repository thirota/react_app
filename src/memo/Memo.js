import React, { useState, useEffect } from 'react'
import usePersist from '../Persist'
import Item from './Item'

function Memo(props) {
    console.log("Memo start")

    const [memo, setMemo] = usePersist("memo", [])
    const [fmemo, setFMemo] = usePersist("findMemo", [])
    const [mode, setMode] = usePersist("mode", 'default')

    let data = []

    switch (mode) {
        case 'default':
            console.log("mode: default")
            // all
            data  = memo.map((value, key)=>(
                <Item key={value.message} value={value} index={key + 1}/>
            ))
            break;
        case 'find':
            console.log("mode: find")
            // fmemo only
            data  = fmemo.map((value, key)=>(
                <Item key={value.message} value={value} index={key + 1}/>
            ))
            break;
        default:
            console.log("mode: unknown")
            data  = memo.map((value, key)=>(
                <Item key={value.message} value={value} index={key + 1}/>
            ))
            break;    
    }

    return  (
        <table className="table mt-4">
            <tbody>{data}</tbody>
        </table>
    )
}

export default Memo