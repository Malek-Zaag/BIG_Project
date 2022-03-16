import { Typography, Grid, CardContent, Card, Button, Box } from '@mui/material'
import React, { } from 'react'
import Navbar from '../Components/Navbar'
import logo from '../images/logo.png'
import login from '../images/login.png'
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
  color: {
    backgroundColor: "#0000CD",
  },

})

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar></Navbar>
      <Grid container spacing={2} sx={{ paddingTop: '175px' }} justify="center" alignItems="center" className={classes.color}  >
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
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Button href="/shop" sx={{ margin: "30px 0 0 0", }} variant="contained" color="warning">Shop</Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ height: "300px", bgcolor: 'warning.main' }}></Box>
      <Grid container spacing={2} justify="center" alignItems="center" className={classes.color}  >
        <Grid data-aos="fade-right" className={classes.color} item xs={12} md={6}>
          <Card sx={{ border: "none", boxShadow: "none" }}>
            <CardContent style={{ textAlign: 'center', backgroundColor: "#0000CD", }}>
              <img src={login} alt="login" style={{ width: "300px", height: "300px", }}>
              </img>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ border: 0 }} item xs={12} md={6}>
          <Card data-aos="fade-up" sx={{ border: "none", boxShadow: "none" }} className={classes.color}>
            <CardContent className={classes.color}>
              <Typography variant="h6">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam
                cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Button href="/login" sx={{ margin: "30px 0 0 0", }} variant="contained" color="warning">Login</Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ height: "300px", bgcolor: 'warning.main' }}></Box>
      <Grid data-aos="fade-up" container spacing={2} justify="center" alignItems="center" className={classes.color}  >
        <Grid  className={classes.color} item xs={12} md={6}>
          <Card sx={{ border: "none", boxShadow: "none" }}>
            <CardContent  id="map" style={{ textAlign: 'center', backgroundColor: "#0000CD", }}>
              <img style={{width: "250px", height: "250px"}} alt="map" src="https://maps.googleapis.com/maps/api/staticmap?size=200x200&scale=1&format=png&maptype=roadmap&key=AIzaSyCFijUH2ZKhTlTPkHnpGFMe9aGA6xUL-cM&markers=size:normal%7Ccolor:blue%7Clabel:P%7C36.85413801585305,10.263616836230094"></img>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ border: 0 }} item xs={12} md={6}>
          <Card  sx={{ border: "none", boxShadow: "none" }} className={classes.color}>
            <CardContent className={classes.color}>
              <Box component='span' sx={{  p: 2, border: '1px dashed grey' ,display: "flex", alignItems: "center", justifyContent: "center" }}>    
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <footer style={{textAlign:"center"}}>
        Copyrigths@Malek2022
      </footer>
    </div>
  )
}

export default Home