import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between px-8 py-4 bg-green-900 mb-10 text-amber-50 text-3xl font-bold '>
            <h2>Navbar</h2>
            <div className='flex gap-8'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/product'>Product</Link>

            </div>
        </div>
    )
}

export default Navbar