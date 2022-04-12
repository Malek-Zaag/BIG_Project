import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from "axios"
import { Grid, Card, Button, Typography, CardMedia, CardActionArea, CardContent, CardActions, Pagination } from "@mui/material"
import { useHistory } from 'react-router-dom'

const ProductPage = ({ id }) => {

    const [product, setProduct] = useState({})
    const history = useHistory()
    useEffect(() => {
        const endpoint = `http://localhost:4000/products/${id}`
        axios.get(endpoint)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div>voila tu as reussi {id}</div>
            <Grid conatiner spacing={1}>
                <Grid item xs={8}>
                    <img src={product.image} alt="img"></img>
                </Grid>
                <Grid item xs={4}>
                    <Button>test</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductPage