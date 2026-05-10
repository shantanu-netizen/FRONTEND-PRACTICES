import React, { useState } from 'react'
import Nav from '../components/header/Nav'


export default function About() {
    const [text, setText] = useState("")
    const [list, setList] = useState([])
    const input = (e) => {
        setText(e.target.value)
    }
    const add = () => {
        setList([...list, text])
        setText("")
    }

    const remove = (index) => {
        const newList = list.filter((_, i) => i !== index);
        setList(newList);
    }
        return (
            <div>
                <Nav />
                <input
                    type='text'
                    value={text}
                    onChange={input}
                />
                <button onClick={add}>Add</button>
                <ul>
                    {list.map((item, index) => {
                        <li key={index}>{item}
                            <button onClick={() => remove(index)}>Delete</button>
                        </li>

                    })}
                </ul>
            </div>
        )
    }
