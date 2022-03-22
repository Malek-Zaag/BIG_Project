import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import AdminAvatar from '../Components/AdminAvatar'
import Navbar from '../Components/Navbar'
import test from "../images/test.jpg"

const ElectricGuitars = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Grid sx={{ paddingTop: "20px" }} container spacing={3}>
                <Grid item xs={12} md={3}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                alt='test'
                                component="img"
                                image={test}>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div"
                                    fontWeight="bold" align="center" fontFamily="Fredoka">
                                    Simple Guitar
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div"
                                    fontWeight="bold" fontFamily="Fredoka">
                                    This guitar is simple
                                </Typography>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography gutterBottom variant="h5" component="span"
                                        fontWeight="bold" fontFamily="Fredoka">
                                        Price:20$
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="span"
                                        fontWeight="bold" sx={{ color: "green" }} fontFamily="Fredoka">
                                        Stock:+20
                                    </Typography>
                                </div>
                            </CardContent>
                            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                                <Button variant="outlined" align>Add to Cart</Button>
                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <AdminAvatar></AdminAvatar>
        </div>
    )
}

export default ElectricGuitars