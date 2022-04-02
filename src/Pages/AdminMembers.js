import React, { useEffect, useState } from 'react'
import AdminDashboard from './AdminDashboard'

const AdminMembers = () => {
    const [members, setMembers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("http://localhost:4000/members")
            .then(res => res.json())
            .then(result => {
                setMembers(result);
                setLoading(false)
            })
            .catch(err => console.log(err))

    }, [])
    if (loading) return <div>Loading ....</div>
    else
        return (
            <div>
                <AdminDashboard></AdminDashboard>
                <div>
                    {members.map(member => (
                        <div id={member._id}>
                            <span>First Name: {member.firstname}</span>
                            <span>Last Name: {member.lastname}</span>
                            <span>Last Name: {member.email}</span>
                            <span>Last Name: {member.gender}</span>
                        </div>
                    ))}
                </div>
            </div>
        )
}
export default AdminMembers 