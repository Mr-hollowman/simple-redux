import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, changeName } from './mySlice'

export default function View() {
    const [name, setName] = useState("")
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div>
            {state.count}<br />
            <button onClick={() => dispatch(increment())}>increment</button><br />
            <button onClick={() => dispatch(decrement())}>decrement</button><br />
            {state.name}<br />
            <input type={"text"} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => dispatch(changeName(name === "" ? state.name : name))}>changeName</button><br />
        </div>
    )
}
