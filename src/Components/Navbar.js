import { Button } from '@mui/material'
import { React, useState, useEffect } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../images/logo.png'
import SearchBar from 'material-ui-search-bar'
import classes from "./Navbar.module.css"
import CollapseButton from './CollapseButton';
import { Autocomplete, TextField } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(result => setItems(result))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className={classes.nav} style={{ backgroundColor: "#0000CD", display: "flex", alignItems: "center", justifyContent: "space-between", }}>
      <div className={classes.logo} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <a href="/"><img style={{ marginTop: "-35px", marginBottom: "-35px", width: "200px", height: "200px" }} src={logo} alt="logo"></img></a>
          <Autocomplete
            size='small'
            sx={{backgroundColor: "white", width: "15vw",borderRadius: "16px"}}
            id="free-solo-demo"
            freeSolo
            onChange={() => {alert("worked")}}
            fullWidth	
            options={items.map((option) => option.name)}
            renderInput={(params) => <TextField sx={{borderRadius: "16px"}} color="success" {...params} label="Search" />}
            popupIcon=<SearchOutlinedIcon />
          />
      </div>
      <div>
        <Button variant="contained" style={{ margin: "10px 35px 10px 35px" }} color="warning" size="medium" href="/">Home</Button>
        <Button variant="contained" style={{ margin: "10px 35px 10px 35px" }} color="warning" size="medium" href="shop" endIcon={<KeyboardArrowDownIcon />}><CollapseButton></CollapseButton></Button>
        <Button variant="contained" style={{ margin: "10px 35px 10px 35px" }} color="success" size="medium" href="cart">Cart</Button>
        <Button variant="contained" style={{ margin: "10px 35px 10px 35px" }} color="warning" size="medium" href="login">Login</Button>
      </div>
    </div >
  )
}

export default Navbar