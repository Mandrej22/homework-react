import React from 'react'
import FBLogo from '../../assets/svgs/001-facebook.svg';
import InstaLogo from '../../assets/svgs/002-instagram.svg';
import LinkedInLogo from '../../assets/svgs/003-linkedin.svg';
import TwitterLogo from '../../assets/svgs/twitter.svg';
import BehanceLogo from '../../assets/svgs/004-behance.svg';

const socialMediaData = [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/AmplitudoCG/',
      icon: FBLogo,
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/amplitudo.me/',
      icon: InstaLogo,
    },
    {
      name: 'LinkedIn',
      link: 'https://me.linkedin.com/company/amplitudoo',
      icon: LinkedInLogo,
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/amplitudocg',
      icon: TwitterLogo,
    },
    {
      name: 'Behance',
      link: 'https://www.behance.net/amplitudo_design',
      icon: BehanceLogo,
    },
  ];
  
  function Social() {
    return (
      <div className="footer-social">
        <p>Follow us on social media</p>
        <ul className="footer-social-icons">
          {socialMediaData.map((socialMedia, index) => (
            <li key={index}>
              <a href={socialMedia.link}>
                <img src={socialMedia.icon} alt={socialMedia.name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default Social;