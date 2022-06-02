import React from 'react'
import { Link } from 'react-router-dom'
import Image from '/metricks-white.png'
import styles from './navbar.module.css'


const Navbar = () => {
  return (
      <>
          <div className={styles.navbar}>

              <Link to='/comingsoon'>
                    <div className={styles.logo}>
                        <img src={Image} alt="gratis-logo" className={styles.gratisLogo} />
                    </div>
              </Link>

              <div className={styles.links}>
                  <ul>
                      <Link to='/about'><li>About Us</li></Link>
                      <Link to='/blog'><li>Blog</li></Link>
                      <Link to='/contact' className='active'><li>Contact Us</li></Link>
                  </ul>
              </div>

          </div>    
    </>
  )
}

export default Navbar