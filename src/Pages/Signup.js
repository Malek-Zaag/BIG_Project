import { Button, Grid, TextField, Container, FormControlLabel, FormLabel, RadioGroup, FormControl, Radio } from '@mui/material'
import React, {} from 'react'
import Navbar from '../Components/Navbar'

const Signup = () => {
    const handleClick = async (e) => {
        e.preventDefault()
        const form=document.getElementById("form")
        await fetch("http://localhost:4000/signup",{
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                firstname: form.firstname.value,
                lastname: form.lastname.value,
                email: form.email.value,
                password: form.password.value,
            })
        })
        .then(()=> console.log("post request done"))
        .catch((err)=> console.log(err))
    }
    return (
        <div>
            <Navbar></Navbar>
            <Container style={{ position: "relative", backgroundColor: "#D0D0D0", marginTop: "100px", padding: "100px", borderRadius: "16px" }}>
                <form id="form" action='/editstore' method='post' >
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>
                            <TextField id="outlined-basic"name='firstname' label="First Name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="outlined-basic" name='lastname' label="Last Name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField id="outlined-basic" name='email' label="Email" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField id="outlined-basic" name='password' label="Password" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" name="radio-buttons-group">
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid sx={{ display: 'flex', flexDirection: "row", justifyContent: "flex-end" }} item xs={12}>
                            <Button  onClick={handleClick} variant="contained" color="warning">submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div >
    )
}

export default Signup