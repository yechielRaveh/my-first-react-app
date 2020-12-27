import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    list: {
        height: "70vh",
        overflow: "scroll"
    },
}));

export default function Lists() {


    const classes = useStyles();
    const [data, setData] = useState([])
    const [inputState, setInputState] = useState("")

    useEffect(async () => {
        const response = await axios("https://api.github.com/users/ronezra3/repos")
        setData(response.data)
    }, [])

    const inputHandler = (value) => {
        setInputState(value.target.value)
    }

    const clickHandler = () => {
        setData(prev => (
            [...prev, { name: inputState }]
        ))
    }

    return (
        <div>
            <Grid container>
                <Grid className={classes.list} item xs={6}>
                    {data.map((item, index) => (<p key={index}>{item.name}</p>))}
                </Grid>
                <Grid item xs={6}>
                    <input type="text" onChange={inputHandler}></input>
                    <Button onClick={clickHandler}>ADD TO LIST</Button>
                </Grid>
            </Grid>
        </div>
    )
}