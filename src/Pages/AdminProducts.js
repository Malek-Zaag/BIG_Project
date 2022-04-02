import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'


const AdminProducts = () => {
  const [product,setProducts]= useState([])
  const handleClick= (e)=>{
    e.preventDefault()
    const form=document.getElementById("form")
    fetch("http://localhost:4000/products",{
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({
        name: form.name.value,
        description: form.description.value,
        stock: form.stock.value,
        image: form.image.value,
        category: form.category.value,
        price: form.price.value,
      })
    })
    .then(()=> console.log("product saved to db"))
    .catch( err => console.log(err))
  }
  return (
    <div>
      <div style={{ backgroundColor: '#0000CD', display: "flex", justifyContent: "space-between" }}>
        <Button style={{ margin: "10px 35px 10px 35px" }} color="warning" size="medium" variant="contained" href="/admindashboard/members">Members</Button>
        <Button style={{ margin: "10px 35px 10px 35px" }} color="warning" size="medium" variant="contained" href="/">Home</Button>
        <Button style={{ margin: "10px 35px 10px 35px" }} color="warning" size="medium" variant="contained" href="/admindashboard/products">Products</Button>
      </div>
      <Typography fontWeight="bold" fontFamily="Fredoka">
        <form id="form">
          <fieldset style={{ marginTop: "1em", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <label for="name">Product Name</label>
            <input name="name"></input>
            <br />
            <label for="description">Product Description</label>
            <textarea rows="10" cols="30" name="description"></textarea>
            <br />
            <label for="price">Product Price</label>
            <input name="price"></input>
            <br />
            <label for="image">Product image</label>
            <input name="image"></input>
            <br />
            <label for="category">Product Category</label>
            <select name="category">
              <option value="Electric Guitar">Electric Guitar</option>
              <option value="Drum">Drum</option>
              <option value="Acoustic Guitarel">Acoustic Guitar</option>
              <option value="Bass Guitar">Bass Guitar</option>
              <option value="Piano">Piano</option>
              <option value="DJ Equipmen">DJ Equipment</option>
            </select>
            <br />
            <label for="stock">Product Stock</label>
            <input name="stock"></input>
            <br />
            <Button type="submit" variant='contained' onClick={() =>handleClick} color='success'>submit</Button>
          </fieldset>
        </form>
      </Typography>
    </div>
  )
}

export default AdminProducts