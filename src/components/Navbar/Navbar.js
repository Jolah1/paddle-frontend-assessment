import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import styles from './navbar.module.css'


const Navbar = () => {
  return (
      <>
          <div className={styles.navbar}>

              <Link to='/comingsoon'>
                    <div className={styles.logo}>
                    <img src={logo} alt="metricks" className={styles.metricks} />
                    <p className='par'>METRICKS</p>
                    </div>
              </Link>

              <div className={styles.links}>
                  <ul>
                      <Link to='/about'><li>About Us</li></Link>
                      <Link to='/blog'><li>Blog</li></Link>
                     <button id='btn'> <Link to='/contact' className='active'><li>Contact Us</li></Link></button>
                  </ul>
              </div>

          </div>    
    </>
  )
}

export default Navbar