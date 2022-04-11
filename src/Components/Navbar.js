import { Button } from '@mui/material'
import { React, useState, useEffect } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../images/logo.png'
import classes from "./Navbar.module.css"
import CollapseButton from './CollapseButton';
import { useHistory } from "react-router-dom";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'




const Navbar = () => {
  const [items, setItems] = useState([]);
  const history = useHistory()
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(result => setItems(result))
      .catch(err => console.log(err))
  }, [])
  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected

    console.log(item)
    history.push(`/products/${item._id}`)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }

  return (
    <div className={classes.nav} style={{ backgroundColor: "#0000CD", display: "flex", alignItems: "center", justifyContent: "space-between", }}>
      <div className={classes.logo} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <a href="/"><img style={{ marginTop: "-35px", marginBottom: "-35px", width: "200px", height: "200px" }} src={logo} alt="logo"></img></a>
        <div style={{ width: "15vw" }}>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
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