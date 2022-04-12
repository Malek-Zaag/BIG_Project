import React, { useEffect } from 'react'
import Navbar from './Navbar'


const ProductPage = ({id}) => {
    

    useEffect(()=>{

    },[])
    return (
        <div>
            <Navbar></Navbar>
            <div>voila tu as reussi{id}</div>
        </div>
    )
}

export default ProductPage