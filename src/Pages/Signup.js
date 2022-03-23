import { Button, Grid, TextField, Container, FormControlLabel, FormLabel, RadioGroup, FormControl, Radio } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar'

const Signup = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const form=document.getElementsByTagName("form")
        fetch("http://localhost:4000/signup",{
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(form.firstname.value)
        })
        .then(()=> console.log("post request done"))
        .catch((err)=> console.log(err))
    }
    return (
        <div>
            <Navbar></Navbar>
            <Container style={{ position: "relative", backgroundColor: "#D0D0D0", marginTop: "100px", padding: "100px", borderRadius: "16px" }}>
                <form onSubmit={handleSubmit} >
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
                            <Button variant="contained" color="warning">submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div >
    )
}

export default Signup