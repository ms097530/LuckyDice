// import { useState } from 'react'
import './Box.css'

export default function Box({ isActive, handleClick, id })
{
    const toggleIsActive = () =>
    {
        handleClick(id)
    }

    return (
        <div className="Box" onClick={toggleIsActive} style={{ backgroundColor: isActive ? 'red' : 'blue' }}></div>
    )
}
