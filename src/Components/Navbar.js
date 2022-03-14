import { Button, Container } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  return (
    <div>
      <section style={{ backgroundColor: "#0000CD", display: "flex", alignItems: "center", justifyContent: "space-between", }}>
        <div>
          <Button variant="contained" color="primary" size="large">logo</Button>
        </div>
        <div>
          <Button variant="contained" style={{ margin: "16px" }} color="primary" size="large" href="/">Home</Button>
          <Button variant="contained" style={{ margin: "16px" }} color="warning" size="large" href="shop" endIcon={<KeyboardArrowDownIcon />}>Shop</Button>
          <Button variant="contained" style={{ margin: "16px" }} color="success" size="large" href="cart">Cart</Button>
          <Button href="login"><AccountCircleIcon fontSize="large"></AccountCircleIcon></Button>
        </div>

      </section>
    </div>
  )
}

export default Navbar