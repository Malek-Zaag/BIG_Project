import { Button, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DashDrawer from '../Components/DashDrawer'

const AdminMembers = () => {
    const [members, setMembers] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/members")
            .then(res => res.json())
            .then(result => setMembers(result))
            .catch(err => console.log(err))

    }, [])
    return (
        <div>
            <Button style={{ margin: "10px 35px 10px 35px" }} color="warning" size="medium" variant="contained" href="/">Home</Button>
            <DashDrawer></DashDrawer>
            <div>hii</div>
        </div>
    )
}
export default AdminMembers 