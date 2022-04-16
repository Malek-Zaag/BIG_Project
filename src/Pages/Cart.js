import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { Grid, Button } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import mastercard from '../images/icons8-mastercard-credit-card-48.png'
import amex from '../images/icons8-american-express-48.png'
import paypal from '../images/icons8-paypal-an-online-payments-system-operating-worldwide-48.png'
import visa from '../images/icons8-visa-48.png'

const Cart = () => {
  const [totalValue, setTotalValue] = useState(0)
  const history = useHistory()
  if (document.cookie)
    return (
      <div style={{ backgroundColor: "#DCDCDC" }}>
        <Navbar></Navbar>
        <div>
          <Grid style={{ marginTop: "1vw", paddingLeft: "1em", display: "flex", justifyContent: "space-between" }} container spacing={2}>
            <Grid item xs={12} sm={6} style={{ backgroundColor: "white", fontFamily: "Fredoka", fontWeight: "bold", fontSize: "2.5vw" }} >
              <div style={{ fontFamily: "Fredoka", fontWeight: "bold", fontSize: "1.5vw" }}>MY ITEMS</div>
              <div style={{ marginRight: "5vw", fontFamily: "Fredoka", fontWeight: "bold", fontSize: "1.5vw" }}>
                <hr />
                <div style={{ display: "flex", justifyContent: "flex-end", wordSpacing: "20px" }}>
                  SUB-TOTAL {totalValue}$
                </div>
              </div>
            </Grid>
            <Grid style={{ backgroundColor: "white" }} item xs={12} sm={6} >
              <div style={{ fontFamily: "Fredoka", fontWeight: "bold", fontSize: "1.5vw" }}>TOTAL</div>
              <div style={{ marginRight: "5vw", fontFamily: "Fredoka", fontWeight: "bold", fontSize: "1.5vw" }}>
                <hr />
                <div style={{ display: "flex", justifyContent: "space-between" }}>Sub-total  <span>{totalValue} $</span></div>
                <br />
                <div style={{ display: "flex", justifyContent: "space-between" }}>Delivery (free)<InfoOutlinedIcon></InfoOutlinedIcon></div>
                <br />
                <hr />
                <br />
                <Button size="large" fullWidth variant="contained" color="success">CHECKOUT</Button>
                <br />
                <br />
                <div>WE ACCEPT:</div>
                <br />
                <div><img src={mastercard} alt='mastercard' /><img src={visa} alt='visa' /><img src={amex} alt='amex' /><img src={paypal} alt='paypal' /></div>
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