import React from 'react'
import { useHistory } from 'react-router-dom'

const Logout = () => {
    const history = useHistory()
    fetch("http://localhost:4000/logout", { method: "GET", credentials: 'include' })
        .then((res) => { history.push('/'); console.log('successfully logged out') })
        .catch(err => console.log(err))
    return (
        <div>Logout</div>
    )
}

export default Logout