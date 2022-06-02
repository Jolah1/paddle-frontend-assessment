import React from 'react'
import { FaYoutube, FaFacebookSquare, FaLinkedin, FaInstagram, FaTwitterSquare } from 'react-icons/fa'
import styles from './footer.module.css'

const Footer = () => {
  return (
      <div>
          <footer>
                    <div className={styles.icons}>
                        <a href="#"><FaYoutube /></a>
                        <a href="#"><FaFacebookSquare/></a>
                        <a href="#"><FaLinkedin/></a>
                        <a href="#"><FaInstagram/></a>
                        <a href="#"><FaTwitterSquare/></a>
                    </div>

                    <div className={styles.terms}>
                        <span><a href="#">Terms of services</a></span>
                        <span><a href="#">Privacy policy</a></span>
                    </div>

                    <p className={styles.copyright}>copyright 2021 @ Paddle Technologies. All rights Reserved</p>
          </footer>
    </div>
  )
}

export default Footer