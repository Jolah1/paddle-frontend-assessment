import React from 'react'
import styles from './styles.module.css'



const ComingSoon = () => {
    return (
        <>
            <div className={styles.container}>

                <div className={styles.comingSoon}>
                    <h1>something awesome is coming soon</h1>
                    <p>Your all-in-one affliate marketing tracking software <strong>track, automate</strong> and <strong>optimize</strong> your campaigns</p>
                </div>

                <div className={styles.countdown}>
                    <div className={styles.box}>
                        <h1>7</h1>
                        <p>Days</p>
                    </div>

                    <div className={styles.box}>
                        <h1>24</h1>
                        <p>Hours</p>
                    </div>

                    <div className={styles.box}>
                        <h1>54</h1>
                        <p>Minutes</p>
                    </div>

                    <div className={styles.box}>
                        <h1>11</h1>
                        <p>Seconds</p>
                    </div>


                </div>



                <div className={styles.formContainer}>
                    <form action='#'>

                        <div className={styles.inputs}>
                            <input type='text' name='firstname' id='firstname' className={styles.input} placeholder='First Name' />
                            <input type='text' name='lastname' id='lastname' className={styles.input} placeholder='Last Name' />
                        </div>

                        <div className={styles.submit}>
                            <input type='email' name='email' id='email' className={styles.email} placeholder='Enter your email address' required />
                            <input type="submit" name='submit' id='submit' className={styles.submitBtn} value='JOIN OUR WAITING LIST' />
                        </div>

                    </form>
                </div>

          </div>
      </>
  )
}

export default ComingSoon