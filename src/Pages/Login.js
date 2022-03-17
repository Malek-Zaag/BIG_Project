import { Container, TextField } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar'

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Container sx={{position:"relative",backgroundColor: "#D0D0D0" ,marginTop:"100px",padding:"100px",borderRadius: "16px"}}>
        <TextField fullWidth sx={{marginBottom:"75px"}} id="outlined-basic" label="Email" variant="outlined" />
        <br/>
        <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" />
        <a href="/signup" style={{position:"absolute",right:"20px",bottom:"10px"}}>Don't have an account? Sign up</a>
      </Container>
    </div>
  )
}

export default Login