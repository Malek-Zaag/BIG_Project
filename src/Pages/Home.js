import {  Container, Typography } from '@mui/material'

import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import logo from '../images/logo.png'
import styles from './Home.module.css'

const Home = () => {
  
  return (
    <div>
      <Navbar></Navbar>
      <Container style={{ backgroundColor: "#0000CD"}}disableGutters maxWidth={false} >
        <Container><img src={logo} alt="logo" style={{ width: "250px", height: "250px", margin: "0 0 0 0" }}></img></Container>
        <Container><Typography variant="h6">Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam
          cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum</Typography>
        </Container>
      </Container>

      <Container style={{ backgroundColor: "#0000CD"}}disableGutters maxWidth={false} >
        <Container data-aos="fade-right"><img src={logo} alt="logo" style={{ width: "250px", height: "250px", margin: "0 0 0 0" }}></img></Container>
        <Container><Typography variant="h6">Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam
          cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum</Typography>
        </Container>
      </Container>
      <Container style={{ backgroundColor: "#0000CD"}}disableGutters maxWidth={false} >
        <Container data-aos="fade-right"><img src={logo} alt="logo" style={{ width: "250px", height: "250px", margin: "0 0 0 0" }}></img></Container>
        <Container><Typography variant="h6">Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam
          cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum</Typography>
        </Container>
      </Container>



    </div>
  )
}

export default Home