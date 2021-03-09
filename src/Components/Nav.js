import React from 'react'
import {Link} from 'react-router-dom'

 function Nav() {
    return (
        <nav>
            <p>Logo</p>
            <ul className='nav-link'>
                <Link to='/about'>
                <li>About</li>
                </Link>
                <Link to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link to='/map'>
                        <li>Map</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
