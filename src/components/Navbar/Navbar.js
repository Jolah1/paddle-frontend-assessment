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
                    <p className={styles.par}>METRICKS</p>
                    </div>
              </Link>

              <div className={styles.links}>
                  <ul>
                      <Link to='/about'><li>ABOUT US</li></Link>
                      <Link to='/blog'><li>BLOG</li></Link>
                     <Link to='/contact'className={styles.active}><li>CONTACT US</li></Link>
                  </ul>
              </div>

          </div>    
    </>
  )
}

export default Navbar