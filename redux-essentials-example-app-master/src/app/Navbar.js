import React from 'react'

import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>

        <div className="navContent">
          <div className='navContent'>
            <Link to="/">Posts</Link>
          </div>
          <div className="navLinks"></div>
        </div>
      </section>
    </nav>
  )
}
