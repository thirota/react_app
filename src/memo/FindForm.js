import React, { useState, useEffect, memo } from 'react'
import usePersist from '../Persist'

function FindForm(props) {
    const [memo, steMemo] = usePersist("memo", [])
    const [fmemo, setFMemo] = usePersist("findMemo", [])
    const [message, setMessage] = useState('')
    const [mode, setMode] = usePersist('mode', 'find')

    const doChange = (event)=> {
        setMessage(event.target.value)
    }

    const doAction = (event)=> {
        if (message === '') { // XXX 修正
            setMode('default')
            return
        }
        let res = memo.filter((item, key)=>{
            return item.message.includes(message)
        })
        setFMemo(res)
        setMode('find')
        setMessage('')
    }

    return (
        <form onSubmit={doAction}>
            <div className="form-group row">
                <input type="text" onChange={doChange} value={message} className="form-control-sm col"/>
                <input type="submit" value="Find" className="btn btn-primary btn-sm col-2"/>
            </div>
        </form>
    )
}

export default FindForm