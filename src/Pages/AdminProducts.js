import { Button, Grid } from '@mui/material'
import React from 'react'
import DashDrawer from '../Components/DashDrawer'

const AdminProducts = () => {
  return (
    <div>
      <Grid style={{ backgroundColor: '#0000CD', display: "flex", justifyContent: "center" }}>
        <Grid itme xs={12}>
          <Button style={{ margin: "10px 35px 10px 35px" }} color="warning" size="medium" variant="contained" href="/">Home</Button>
        </Grid>
        <Grid item xs={12}>
          <DashDrawer></DashDrawer>
        </Grid>
      </Grid>
    </div>
  )
}

export default AdminProducts