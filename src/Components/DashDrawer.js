import { Drawer, List, ListItem, ListItemText, MenuItem, Typography } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'

const DashDrawer = () => {
    const history=useHistory()
    return (
        <div>
            <Drawer open variant='persistent' anchor='left'>
                <MenuItem>
                    <Typography variant='h2' fontWeight="bold" fontFamily="Fredoka">
                        Dashboard
                    </Typography>
                </MenuItem>
                <List>
                    <ListItem button onClick={() => history.push('/admindashboard/members')}>
                        <ListItemText primaryTypographyProps={{fontFamily: "Fredoka", variant: "h4",}} primary="Members"></ListItemText>
                    </ListItem>
                </List>
                <List>
                    <ListItem button onClick={() => history.push('/admindashboard/products')}>
                        <ListItemText primaryTypographyProps={{fontFamily: "Fredoka", variant: "h4",}} primary="Products"></ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}

export default DashDrawer