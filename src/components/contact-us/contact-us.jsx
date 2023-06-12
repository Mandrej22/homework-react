import React from 'react';
import styles from '../contact-us/contact-us.module.sass';
import parrot from '../../assets/pngs/Group 1052.png';

function ContactUs() {
  return (
    <div className={styles['contact-us']}>
      <img src={parrot} alt="parrot" className={styles.parrot} />
      <h4 className={styles['contact-us-title']}>Like what you see?</h4>
      <p className={styles['contact-us-description']}>Let's talk about it.</p>
      <button className={styles['contact-us-btn']}>contact us</button>
    </div>
  );
}

export default ContactUs;
