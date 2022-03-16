import { Container, Typography, Grid, CardContent, Card, Button,Box } from '@mui/material'
import React, { } from 'react'
import Navbar from '../Components/Navbar'
import logo from '../images/logo.png'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  color: {
    backgroundColor: "#0000CD",
  },
  
})

const Home = () => {
  const classes = useStyles()
  return (
    <div>
      <Navbar></Navbar>
      <Grid container spacing={2} justify="center" alignItems="center" className={classes.color}  >
        <Grid className={classes.color} item xs={12} md={6}>
          <Card sx={{ border: "none", boxShadow: "none" }}>
            <CardContent style={{ textAlign: 'center', backgroundColor: "#0000CD", }}>
              <img src={logo} alt="logo" style={{ width: "300px", height: "300px", }}>
              </img>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ border: 0 }} item xs={12} md={6}>
          <Card sx={{ border: "none", boxShadow: "none" }} className={classes.color}>
            <CardContent className={classes.color}>
              <Typography variant="h6">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam
                cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
              </Typography>
              <Box sx={{display:"flex", alignItems: "center",justifyContent: "center"}}>
                <Button href="/shop" sx={{ margin: "30px 0 0 0", }} variant="contained" color="warning">Shop</Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{height: "200px",bgcolor: 'warning.main'}}></Box>
      <Grid container spacing={2} justify="center" alignItems="center" className={classes.color}  >
        <Grid className={classes.color} item xs={12} md={6}>
          <Card sx={{ border: "none", boxShadow: "none" }}>
            <CardContent style={{ textAlign: 'center', backgroundColor: "#0000CD", }}>
              <img src={logo} alt="logo" style={{ width: "300px", height: "300px", }}>
              </img>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ border: 0 }} item xs={12} md={6}>
          <Card sx={{ border: "none", boxShadow: "none" }} className={classes.color}>
            <CardContent className={classes.color}>
              <Typography variant="h6">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam
                cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
              </Typography>
              <Box sx={{display:"flex", alignItems: "center",justifyContent: "center"}}>
                <Button href="/shop" sx={{ margin: "30px 0 0 0", }} variant="contained" color="warning">Shop</Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      

    </div>
  )
}

export default Home