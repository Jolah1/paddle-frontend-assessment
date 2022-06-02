import React from 'react'
import styles from './about.module.css'
import {FaArrowRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'



const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.glass}>
        <div className={styles.about}>
          <div className={styles.line}></div>
          <p>ABOUT US</p>
        </div>

        <div className={styles.heading}>
          <h2>Built for SaaS and E-commerce</h2>
        </div>

        <div className={styles.introduction}>
            <p>Our tools are easy to set up and use witha user-friendly dashboard that enables you to set up, launch, automate and manage multi-affliate campaigns in 5 minutes</p>
        </div>
      </div>


      <div className={styles.value}>
        <h2>Metric was developed because just like you, we needed a product that could give us <strong>good value</strong>.</h2>
      </div>



      <div className={styles.columns}>
            <div className={styles.column1}>
              <div className={styles.header}>
                  <div className={styles.number}>
                    <span>01</span>
                    <div className={styles.line}></div>
                  </div>

                  <div className={styles.text}>
                    <h4>WHY US?</h4>
                  </div>
              </div>

              <p>
                We pride ourselves in our ability to innovate and create world-class tools that provide reliable and efficient touchpoints between advertisers and affliates.
              </p>
              
              <div className={styles.dots}>
                  <p>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</p>
                  <p>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</p>
                  <p>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</p>
                  <p>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</p>
                  <p>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</p>
                  <p>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</p>
              </div>
          </div>


        
          <div className={styles.column2}>
              <div className={styles.header}>
                  <div className={styles.number}>
                    <span>02</span>
                    <div className={styles.line}></div>
                  </div>

                  <div className={styles.text}>
                    <h4>GROWING WITH YOU</h4>
                  </div>
              </div>

              <p>
                Leveraging the best technology, we have developed an all-in-one affliate marketing tracking software, a genius toolto help you track, automate and optimize your influencer campaigns all from one dashboard.
              </p>
            

              <p>
                Our team of experts are constantly brainstorming, testing and developing new solutions with only one thing in mind - your business growth. your success is our success and by giving you the tools you need to scale, we grow as well.
              </p>

          </div>   
     </div>


      <div className={styles.question}>
        <h2>Got a Question?</h2>
        <p>See how Metrics can help your business grow with best affliate marketing tracking software.</p>

        <Link to='/contact'>
             <div className={styles.link}>
                <a href="#">Contact Us</a>
                <span><FaArrowRight /></span>
             </div>
        </Link>

      </div>

    </div>
  )
}

export default About