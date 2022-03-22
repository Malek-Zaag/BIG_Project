import { Drawer, MenuItem, Typography } from '@mui/material'
import React from 'react'

const DashDrawer = () => {
  return (
    <div>
        <Drawer open variant='persistent' anchor='left' sx={{backgroundColor: "#D0D0D0",}}>
          <MenuItem>
            <Typography variant='h2' fontWeight="bold" fontFamily="Fredoka">
              Dashboard
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant='h4' fontWeight="bold" fontFamily="Fredoka">
              Dashboard
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant='h4' fontWeight="bold" fontFamily="Fredoka">
              Dashboard
            </Typography>
          </MenuItem>
        </Drawer>
    </div>
  )
}

export default DashDrawer