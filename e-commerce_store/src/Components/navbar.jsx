import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar() {
  return (
    <nav style={{backgroundColor: '#100f3d', color: 'white'}}>
        <div className="navtitle">
            <img src="/images/cart.png" alt="" />
            <h2>E-Commerce Store</h2>
        </div>

        <div className="navlist">
            <ul>
                <li><Link>Home</Link></li>
                <li><Link>Products</Link></li>
                <li><Link>Cart</Link></li>
                <li><Link>Contact Us</Link></li>
            </ul>
        </div>

        <div className="navbtn">
            <button>Register</button>
            <button>Login</button>
        </div>
    </nav>
  )
}
