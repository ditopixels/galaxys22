import React from 'react';
import NotifyPurchase from '../NotifyPurchase';
import {ReactComponent as Logo} from '../../assets/logo.svg'
import './index.scss'

const Header = () => {
  return (
      <header className='header'>
          <div className='header-container'>
            <div className='header-wrapper'>
              <div className='header-logo'>
                <Logo/>
              </div>
              <nav className='header-navigation'>
                <ul className='header-navigation__list'>
                  <li className='header-navigation__element'>
                    <a className='header-navigation__link' href='/#/about-us'>About us</a>
                  </li>
                  <li className='header-navigation__element'>
                    <a className='header-navigation__link' href='/#/proyects'>Proyects</a>
                  </li>
                  <li className='header-navigation__element'>
                    <a className='header-navigation__link' href='/#/newsletter'>Newsletter</a>
                  </li>
                  <li className='header-navigation__element'>
                    <a 
                      className='header-navigation__link header-navigation__call-to-action' 
                      href='https://api.WhatsApp.com/send?phone=3147187187'
                      rel='noopener'
                      target='_blank'
                    >
                      Purchase services
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
      </header>
  );
};

export default Header;
