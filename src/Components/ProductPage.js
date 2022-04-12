import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Grid, Button, Typography } from "@mui/material"

const ProductPage = ({ id }) => {

    const [product, setProduct] = useState({})
    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        const endpoint = `http://localhost:4000/products/${id}`
        fetch(endpoint)
            .then(res => res.json())
            .then(result => {
                setProduct(result)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [id])
    if (Loading) return (
        <div>
            <Navbar></Navbar>
            <div>Loading ....</div>
        </div>
    )
    else return (
        <div>
            <Typography fontWeight="bold" fontFamily="Fredoka">
                <Navbar></Navbar>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6}>
                        <img style={{ width: "100%" }} src={product.image} alt="img"></img>
                    </Grid>
                    <Grid style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }} item xs={12} sm={6}>
                        <h1>{product.name}</h1>
                        <div>{product.description}</div>
                        <div style={{ color: "green" }}>{product.stock}</div>
                        <div>{product.price}$</div>
                        <div>
                            <Button variant="contained">
                                Add to Card
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Typography>

        </div >
    )
}

export default ProductPage