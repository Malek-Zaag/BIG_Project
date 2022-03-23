import { Button} from '@mui/material'
import React from 'react'
import DashDrawer from '../Components/DashDrawer'


const AdminDashboard = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#0000CD', display: "flex", justifyContent: "center" }}>
          <Button style={{ margin: "10px 35px 10px 35px" }} color="warning" size="medium" variant="contained" href="/">Home</Button>
        <DashDrawer></DashDrawer>
      </div>
    </div>
  )
}

export default AdminDashboard