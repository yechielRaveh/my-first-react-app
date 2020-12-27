import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TransitionsModal from './modal'



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '50ch',
        },
    },
    button: {
        width: '50ch',
    },
    contain: {
        marginBottom: 90,
    }
}));

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    msg: '',
}

export default function ContactUs() {
    const classes = useStyles();
    const [values, setValues] = useState(initialFValues)
    const [modalState, setModalState] = useState(false)
    //const [emptyFields, setEmptyFields] = useState(true)

    const fullNameHandler = (props) => {
        setValues({ ...values, fullName: props.target.value })
    }
    const mailHandler = (props) => {
        setValues({ ...values, email: props.target.value })
    }
    const msgHandler = (props) => {
        setValues({ ...values, msg: props.target.value })
    }

    const ModalHandler = () => {
        if (modalState) {
            if (values.fullName !== '' &&
                values.email !== '' &&
                values.msg !== '') {
                return (<TransitionsModal
                    setModalState={setModalState}
                    fullName={values.fullName}
                    emptyFields={false} />)
            }
            else {
                return (<TransitionsModal
                    setModalState={setModalState}
                    emptyFields={true}
                />)
            }
        }
        return null
    }


    const SendHandler = () => {
        setModalState(true)
    }

    return (
        <div>
            <h1>CONTACT US</h1>
            <hr />
            <br /><br /><br /><br />
            <div className={classes.contain}>
                <Grid className={classes.grid} container >

                    <Grid item xs={12} sm={6} >
                        <br />
                        <h3>Phone: +972 5484147808</h3>
                        <br />
                        <h3>Email: yechielraveh@gmail.com</h3>
                        <h3>15 Gutmacher Street, Bnei Brak</h3>
                        <h3>SAN-THU 09:00 - 16:00</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} >

                        <form className={classes.root} noValidate autoComplete="off">
                            <div className={classes.root}>
                                <TextField
                                    onChange={fullNameHandler}
                                    id="outlined-textarea"
                                    label="Full Name"
                                    placeholder="Placeholder"
                                    multiline
                                    variant="outlined"
                                />
                            </div>
                            <div className={classes.root}>
                                <TextField
                                    onChange={mailHandler}
                                    type="email"
                                    variant="outlined"
                                    id="standard-basic"
                                    label="Email"
                                />
                            </div>
                            <div className={classes.root}>
                                <TextField
                                    onChange={msgHandler}
                                    id="standard-basic"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                />
                            </div>
                            <div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    onClick={SendHandler}
                                >
                                    SEND MESSAGE
                                 </Button>
                                <ModalHandler />
                            </div>
                        </form>

                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
