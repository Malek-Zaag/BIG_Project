import { Button, Container } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../images/logo.png'


const Navbar = () => {
  return (
    <div>
      <section style={{ backgroundColor: "#0000CD", display: "flex", alignItems: "center", justifyContent: "space-between", }}>
        <div>
          <Button  href="/"><img src={logo} style={{ width: "15vw", height: "35vh" }} alt="logo"></img></Button>
        </div>
        <div>
          <Button  variant="outlined" style={{ margin: "16px" }} color="secondary" size="large" href="/">Home</Button>
          <Button  variant="contained" style={{ margin: "16px" }} color="warning" size="large" href="shop" endIcon={<KeyboardArrowDownIcon />}>Shop</Button>
          <Button  variant="contained" style={{ margin: "16px" }} color="success" size="large" href="cart">Cart</Button>
          <Button  variant="contained" style={{ margin: "16px" }} color="warning" size="large" href="login">Login</Button>
        </div>
      </section>
    </div>
  )
}

export default Navbar