import React, { useEffect, useState } from 'react'
import AdminAvatar from '../Components/AdminAvatar'
import Navbar from '../Components/Navbar'
import {Grid,Card,Button,Typography,CardMedia,CardActionArea,CardContent, CardActions} from "@mui/material"
const Shop = () => {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/products")
    .then(res=> res.json())
    .then( result => setProducts(result))
    .catch( err=> console.log(err))
  },[products])
  return (
    <div>
      <Navbar></Navbar> 
      <AdminAvatar></AdminAvatar>
      <Grid sx={{ paddingTop: "20px" }} container spacing={3}>
            {products.map(product => (
              <Grid item xs={12} md={3}>
                <Card id={product._id}>
                  <CardActionArea>
                    <CardMedia
                      alt='test'
                      component="img"
                      image={product.image}>
                    </CardMedia>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div"
                        fontWeight="bold" align="center" fontFamily="Fredoka">
                        {product.name}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div"
                        fontWeight="bold" fontFamily="Fredoka">
                        {product.description}
                      </Typography>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography gutterBottom variant="h5" component="span"
                          fontWeight="bold" fontFamily="Fredoka">
                          Price:{product.price}$
                        </Typography>
                        <Typography gutterBottom variant="h5" component="span"
                          fontWeight="bold" sx={{ color: "green" }} fontFamily="Fredoka">
                          Stock:{product.stock}
                        </Typography>
                      </div>
                    </CardContent>
                    <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                      <Button variant='outlined' align color="success">Add TO Cart</Button>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
    </div>
  )
}

export default Shop