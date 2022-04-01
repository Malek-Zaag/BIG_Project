import { Container, TextField, Button } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const handleClick = (e) => {
    e.preventDefault()
    const form = document.getElementById("form")
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.email.value,
        password: form.password.value,
      })
    })
    .then(res=> res.json())
    .then(result =>  history.push("/"))
    .catch( err => console.log(err))
  }

  return (
    <div>
      <Navbar></Navbar>
      <form id="form">
        <Container sx={{ position: "relative", backgroundColor: "#D0D0D0", marginTop: "100px", padding: "100px", borderRadius: "16px" }}>
          <TextField id="email" name="email" fullWidth sx={{ marginBottom: "75px" }} label="Email" variant="outlined" />
          <br />
          <TextField fullWidth name="password" label="Password" variant="outlined" />
          <a href="/signup" style={{ position: "absolute", right: "20px", bottom: "10px" }}>Don't have an account? Sign up</a>
          <Button variant="contained" onClick={handleClick} style={{ position: "absolute", left: "20px", bottom: "10px" }} color="success" >Login</Button>
        </Container>
      </form>
    </div>
  )
}

export default Login