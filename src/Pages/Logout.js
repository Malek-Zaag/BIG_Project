import React from 'react'
import { useHistory } from 'react-router-dom'

const Logout = () => {
    fetch("http://localhost:4000/logout", { credentials: 'include' })
        .then((res) => console.log('successfully logged out'))
        .catch(err => console.log(err))
    return (
        <div>Logout</div>
    )
}

export default Logout