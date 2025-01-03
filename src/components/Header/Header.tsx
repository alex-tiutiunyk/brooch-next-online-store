import Image from 'next/image';
import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo-row'>
        <div className='container'>
          <a href='#' className='main-logo'>
            <Image alt='Brooch' src='/icons/icons-sprite/main-logo.svg' width={30} height={30} />
            <div className='main-logo__holder'>
              <strong className='main-logo__text'>Brooch</strong>
              <strong className='main-logo__slogan'>Beauty in one place</strong>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
