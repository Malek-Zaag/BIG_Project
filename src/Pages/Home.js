import { Typography } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar'
import logo from '../images/logo.png'
import styles from './Home.module.css'
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className={styles.art} >
        <div ><img src={logo} alt="logo" style={{ width: "250px", height: "250px", margin: "0 0 0 0" }}></img></div>
        <div style={{ margin: "0 20px 0 0" }} ><Typography variant="h6">Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam
          cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum</Typography>
        </div>
      </div>


    </div>
  )
}

export default Home