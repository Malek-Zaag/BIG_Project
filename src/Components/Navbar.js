import React from 'react'
import '../App.css'

const Navbar = () => {
    return (
        <nav className="flex bg-orange sm:justify-center h-9 space-x-4">
            <div className=" flex">
                <div>
                    <a></a>
                    <img></img>
                </div>
                {[
                    ['Home', '/home'],
                    ['Shop', '/shop'],
                    ['Cart', '/cart'],
                    ['Account', '/account'],
                ].map(([title, url]) => (
                    <a href={url} className="font-size-5 px-5 my-2 text-indigo">{title}</a>
                ))}
            </div>
        </nav>
    )
}

export default Navbar