import { TextField } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar'

const Signup = () => {
  return (
    <div>
        <Navbar></Navbar>
        <form action='/signup' method='POST'>
            <TextField>
                <input type="email"></input>
                <input type="text">text</input>
            </TextField>

        </form>
    </div>
  )
}

export default Signup