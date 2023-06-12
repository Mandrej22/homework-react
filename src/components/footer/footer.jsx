import React from 'react';
import Social from './social';
import styles from '../footer/footer.module.sass';
import amplitudoLogo from '../../assets/svgs/Group 386.svg';
import map from '../../assets/svgs/Group 391.svg';
import logo2 from '../../assets/svgs/Group 392.svg';
import emoji from '../../assets/pngs/sccpre.cat-angel-png-418236.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Map */}
      <img src={map} alt="map" className={styles['footer-map']} />
      <div className={styles['footer-text']}>
        <p>Interested in our services?</p>
        <span>contact us</span>
      </div>
      {/* Message */}
      <div className={styles['footer-map-point']}>
        <img src={logo2} alt="logo" />
        <p>Hello from the center of the world!</p>
        <img src={emoji} alt="emoji" />
      </div>
      {/* Address */}
      <div className={styles['footer-address']}>
        <img src={amplitudoLogo} alt="logo" />
        <p>
          Boulevard of St. Petar Cetinjski 56 <br />
          Podgorica, Montenegro
        </p>
        <p>
          info@amplitudo.me <br />
          +382 20 223 244
        </p>
      </div>
      <Social />
      <p>© All rights reserved 2019 Amplitudo Ltd.</p>
    </footer>
  );
}

export default Footer;
