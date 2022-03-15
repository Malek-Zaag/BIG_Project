import { Button } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../images/logo.png'
import SearchBar from 'material-ui-search-bar'
import classes from "./Navbar.module.css"
const Navbar = () => {
  return (
      <div className={classes.nav} style={{ backgroundColor: "#0000CD", display: "flex", alignItems: "center", justifyContent: "space-between", }}>
        <div className={classes.logo} style={{display: "flex",flexDirection:"row", alignItems: "center"}}>
          <a href="/"><img style={{ marginTop: "-35px", marginBottom: "-35px", width: "200px", height: "200px" }} src={logo} alt="logo"></img></a>
          <SearchBar style={{height: "30px",margin: "0 10px 10px 10px"}}>hi</SearchBar>
        </div>
        <div>
          <Button variant="contained" style={{ margin: "10px 35px 10px 35px" }} color="warning" size="medium" href="/">Home</Button>
          <Button variant="contained" style={{ margin: "10px 35px 10px 35px" }} color="warning" size="medium" href="shop" endIcon={<KeyboardArrowDownIcon />}>Shop</Button>
          <Button variant="contained" style={{ margin: "10px 35px 10px 35px" }} color="success" size="medium" href="cart">Cart</Button>
          <Button variant="contained" style={{ margin: "10px 35px 10px 35px" }} color="warning" size="medium" href="login">Login</Button>
        </div>
      </div>
  )
}

export default Navbar