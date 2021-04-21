import React, { useState, useEffect } from 'react'

function Item(props) {
    console.log("Item start")

    const th = {
        width: "100px"
    }
    const td = {
        textAlign: "right",
        width: "150px"
    }
    let d = new Date(Date.parse(props.value.created))
    // TODO format (zero padding, etc.)
    let f = d.getMonth() + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes()

    return (
        <tr>
            <th style={th}>No, {props.index}</th>
            <td>{props.value.message}</td>
            <td style={td}>{f}</td>
        </tr>
    )
}

export default Item