import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import styles from './blog.module.css'
import image from './sweet.jpeg'



const Blog = () => {

  return (
    <div className={styles.container}>
        <div className={styles.glass}>
          <div className={styles.blog}>
            <div className={styles.line}></div>
            <p>BLOG</p>
          </div>

          <div className={styles.heading}>
            <h2>Articles and News</h2>
          </div>

        </div>

        <div className={styles.subContainer}>
              <div className={styles.latest}>
                  <div className={styles.text}>
                    <h3>Latest From The Blog</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatem commodi consequatur quos, unde fuga est praesentium at dolores earum?
                    </p>
                  </div>
                  
                  <div className={styles.search}>
                    <form action="">
                      <input type="text" id='searchInput' name='searchInput' placeholder='Search here' />
                    </form>
                  </div>


              </div>


            <div className={styles.cardContainer}>
                <div className={styles.card}>
                          <img src={image} alt="card image" className={styles.cardImage} />
                          <div className={styles.date}>
                            <small>SEPTEMBER 6, 2021</small>
                            <small>FETURED ARTICLE</small>
                            <small>AFFLIATE</small>
                          </div>

                          <div className={styles.cardTitle}>
                            <h3>12 Popup Use Cases To Increase Conversations</h3>
                          </div>

                          <div className={styles.cardContent}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi neque ad dolores doloremque facilis quibusdam recusandae cupiditate id, repellat consectetur, corporis, quisquam itaque dolorem. Dicta ut vel cum.</p>
                          </div>

                          <div className={styles.more}>
                              <div className={styles.lines}></div>
                              <p>READ MORE</p>
                          </div>
                </div>


                <div className={styles.card}>
                          <img src={image} alt="card image" className={styles.cardImage} />
                          <div className={styles.date}>
                            <small>SEPTEMBER 6, 2021</small>
                            <small>FETURED ARTICLE</small>
                            <small>AFFLIATE</small>
                          </div>

                          <div className={styles.cardTitle}>
                            <h3>12 Popup Use Cases To Increase Conversations</h3>
                          </div>

                          <div className={styles.cardContent}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi neque ad dolores doloremque facilis quibusdam recusandae cupiditate id, repellat consectetur, corporis, quisquam itaque dolorem. Dicta ut vel cum.</p>
                          </div>

                          <div className={styles.more}>
                              <div className={styles.lines}></div>
                              <p>READ MORE</p>
                          </div>
                </div>

          
                <div className={styles.card}>
                          <img src={image} alt="card image" className={styles.cardImage} />
                          <div className={styles.date}>
                            <small>SEPTEMBER 6, 2021</small>
                            <small>FETURED ARTICLE</small>
                            <small>AFFLIATE</small>
                          </div>

                          <div className={styles.cardTitle}>
                            <h3>12 Popup Use Cases To Increase Conversations</h3>
                          </div>

                          <div className={styles.cardContent}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi neque ad dolores doloremque facilis quibusdam recusandae cupiditate id, repellat consectetur, corporis, quisquam itaque dolorem. Dicta ut vel cum.</p>
                          </div>

                          <div className={styles.more}>
                              <div className={styles.lines}></div>
                              <p>READ MORE</p>
                          </div>
                </div>

          
                <div className={styles.card}>
                          <img src={image} alt="card image" className={styles.cardImage} />
                          <div className={styles.date}>
                            <small>SEPTEMBER 6, 2021</small>
                            <small>FETURED ARTICLE</small>
                            <small>AFFLIATE</small>
                          </div>

                          <div className={styles.cardTitle}>
                            <h3>12 Popup Use Cases To Increase Conversations</h3>
                          </div>

                          <div className={styles.cardContent}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi neque ad dolores doloremque facilis quibusdam recusandae cupiditate id, repellat consectetur, corporis, quisquam itaque dolorem. Dicta ut vel cum.</p>
                          </div>

                          <div className={styles.more}>
                              <div className={styles.lines}></div>
                              <p>READ MORE</p>
                          </div>
                </div>
                
                <div className={styles.card}>
                          <img src={image} alt="card image" className={styles.cardImage} />
                          <div className={styles.date}>
                            <small>SEPTEMBER 6, 2021</small>
                            <small>FETURED ARTICLE</small>
                            <small>AFFLIATE</small>
                          </div>

                          <div className={styles.cardTitle}>
                            <h3>12 Popup Use Cases To Increase Conversations</h3>
                          </div>

                          <div className={styles.cardContent}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi neque ad dolores doloremque facilis quibusdam recusandae cupiditate id, repellat consectetur, corporis, quisquam itaque dolorem. Dicta ut vel cum.</p>
                          </div>

                          <div className={styles.more}>
                              <div className={styles.lines}></div>
                              <p>READ MORE</p>
                          </div>
                </div>

                <div className={styles.card}>
                          <img src={image} alt="card image" className={styles.cardImage} />
                          <div className={styles.date}>
                            <small>SEPTEMBER 6, 2021</small>
                            <small>FETURED ARTICLE</small>
                            <small>AFFLIATE</small>
                          </div>

                          <div className={styles.cardTitle}>
                            <h3>12 Popup Use Cases To Increase Conversations</h3>
                          </div>

                          <div className={styles.cardContent}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi neque ad dolores doloremque facilis quibusdam recusandae cupiditate id, repellat consectetur, corporis, quisquam itaque dolorem. Dicta ut vel cum.</p>
                          </div>

                          <div className={styles.more}>
                              <div className={styles.lines}></div>
                              <p>READ MORE</p>
                          </div>
                </div>
            </div>

        
            <div className={styles.recent}>
              <div className={styles.recentAricles}>
                <div className={styles.headings}>
                  <h2>Recent Articles</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nesciunt quasi commodi optio repudiandae recusandae voluptas similique culpa? Molestias, libero.
                  </p>
                </div>
              </div>

              <div className={styles.cardContainer}>
                      <div className={styles.card}>
                                <div className={styles.date}>
                                  <small>SEPTEMBER 6, 2021</small>
                                  <small>FETURED ARTICLE</small>
                                  <small>AFFLIATE</small>
                                </div>

                                <div className={styles.cardTitle}>
                                  <h3>12 Popup Use Cases To Increase Conversations</h3>
                                </div>

                                <div className={styles.cardContent}>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi neque ad dolores doloremque facilis quibusdam recusandae cupiditate id, repellat consectetur, corporis, quisquam itaque dolorem. Dicta ut vel cum.</p>
                                </div>

                                <div className={styles.more}>
                                    <div className={styles.lines}></div>
                                    <p>READ MORE</p>
                                </div>
                      </div>


                      <div className={styles.card}>
                                <div className={styles.date}>
                                  <small>SEPTEMBER 6, 2021</small>
                                  <small>FETURED ARTICLE</small>
                                  <small>AFFLIATE</small>
                                </div>

                                <div className={styles.cardTitle}>
                                  <h3>12 Popup Use Cases To Increase Conversations</h3>
                                </div>

                                <div className={styles.cardContent}>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi neque ad dolores doloremque facilis quibusdam recusandae cupiditate id, repellat consectetur, corporis, quisquam itaque dolorem. Dicta ut vel cum.</p>
                                </div>

                                <div className={styles.more}>
                                    <div className={styles.lines}></div>
                                    <p>READ MORE</p>
                                </div>
                      </div>

                
                      <div className={styles.card}>
                                <div className={styles.date}>
                                  <small>SEPTEMBER 6, 2021</small>
                                  <small>FETURED ARTICLE</small>
                                  <small>AFFLIATE</small>
                                </div>

                                <div className={styles.cardTitle}>
                                  <h3>12 Popup Use Cases To Increase Conversations</h3>
                                </div>

                                <div className={styles.cardContent}>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi neque ad dolores doloremque facilis quibusdam recusandae cupiditate id, repellat consectetur, corporis, quisquam itaque dolorem. Dicta ut vel cum.</p>
                                </div>

                                <div className={styles.more}>
                                    <div className={styles.lines}></div>
                                    <p>READ MORE</p>
                                </div>
                      </div>
                    
              </div>
              
              <div className={styles.loadBtn}>
                 <button>LOAD MORE</button>
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
        </div>
      
    </div>
  )
}

export default Blog