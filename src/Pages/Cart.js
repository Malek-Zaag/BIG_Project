import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { Grid } from '@mui/material'


const Cart = () => {
  const [count, setCount] = useState(0)
  const history = useHistory()
  if (document.cookie)
    return (
      <div style={{ backgroundColor: "#DCDCDC" }}>
        <Navbar></Navbar>
        <div>
          <Grid style={{ marginTop: "2vh", display: "flex", justifyContent: "space-between" }} container spacing={2}>
            <Grid item xs={12} sm={6} style={{ backgroundColor: "white", fontFamily: "Fredoka", fontWeight: "bold", fontSize: "2.5vw" }} >
              <div>MY ITEMS</div>
              <hr style={{ marginRight: "5vw" }} />

            </Grid>
            <Grid style={{ backgroundColor: "white" }} item xs={12} sm={6} >
              <div style={{ fontFamily: "Fredoka", fontWeight: "bold", fontSize: "2.5vw" }}>TOTAL</div>
              <div style={{ marginRight: "5vw", fontFamily: "Fredoka", fontWeight: "bold", }}>
                <hr />
                <div style={{ display: "flex", justifyContent: "space-between" }}>Sub-total  <span>{count}</span></div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  else {
    history.push('/login')
    return (
      <div></div>
    )
  }
}

export default Cart