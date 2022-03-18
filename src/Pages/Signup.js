import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import Navbar from '../Components/Navbar'

const Signup = () => {
    const handleClick = (e) => {
        e.preventDefault()
        console.log('hey')
    }
    return (
        <div>
            <Navbar></Navbar>
            <form action='/signup' method='POST'>
                <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", marginTop: 11 }}>
                    <Box sx={{m: 4}}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6}>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        </Grid>
                    </Grid>
                    </Box>
                </Box>
            </form>
        </div>
    )
}

export default Signup