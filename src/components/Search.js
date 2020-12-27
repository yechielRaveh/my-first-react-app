import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default function Search() {

    const [data, setData] = useState([])
    const [inputState, setInputState] = useState("")
    const [searchState, setSearchState] = useState("")

    useEffect(async () => {
        const response = await axios("https://api.github.com/users/ronezra3/repos")
        setData(response.data)
    }, [])

    const inputHandler = (value) => {
        setInputState(value.target.value)
    }

    const clickHandler = () => {
        let found = false
        data.map(item => {
            if (item.name === inputState) {
                setSearchState(item.name)
                found = true
            }
        })
        if (found === false) {
            setSearchState("")
            alert("not found")
        }

    }

    return (
        <div>
            <h2>Search</h2>
            <br /><br />
            <p>Enter a search value</p>
            <input type="text" onChange={inputHandler}></input>
            <Button onClick={clickHandler}>SEARCH</Button>
            <h1>{searchState}</h1>
        </div>

    )
}