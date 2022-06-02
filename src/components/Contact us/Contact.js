import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import styles from './styles.module.css'

const Contact = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.formContainer}>
        <form action="POST">

          <div className={styles.heading}>
            <h2>Hey we are still in the works, but you can send us a message</h2>
          </div>

          <div className={styles.input}>
            <label htmlFor="firstname">First Name</label>
            <input type="text" name='firstname' id='firstname' placeholder='Enter your first name' required className={styles.form} />
          </div>


          <div className={styles.input}>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name='lastname' id='lastname' placeholder='Enter your last name' required className={styles.form} />
          </div>


          <div className={styles.input}>
            <label htmlFor="email">Email address</label>
            <input type="email" name='email' id='email' placeholder='Enter your Email Address' required className={styles.form} />
          </div>


          <div className={styles.input}>
            <label htmlFor="details">Tell Us What You Need Help With:</label>
            <textarea name="details" id="details" cols="30" rows="10" required placeholder='Email A Topic Like "Channel Problem"' ></textarea>
          </div>


          <div className={styles.submitButton}>
            <input type="submit" name='submit' id='submit' value='SEND NOW' className={styles.submitBtn} />
          </div>

        </form>
      </div>

      <div className={styles.iconContainer}>
        <FaArrowRight className='forward-icon'/>
      </div>

    </div>
  )
}

export default Contact