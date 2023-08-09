import '../scss/Menu.scss';
import React from 'react';

function Menu({ View }) {
  return (
    <div class="menu">
      <ul class="menu__list">
        <li>
          <a class={'menu__anchor' + (View === 'Presentation' ? ' menu__anchor--isActive' : '')} href="#Presentation">
            Presentation
          </a>
        </li>
        <li>
          <a class={'menu__anchor' + (View === 'Education' ? ' menu__anchor--isActive' : '')} href="#Education">
            Formations
          </a>
        </li>
        <li>
          <a class={'menu__anchor' + (View === 'Experience' ? ' menu__anchor--isActive' : '')} href="#Experiences">
            Experiences
          </a>
        </li>
        <li>
          <a class={'menu__anchor' + (View === 'Contact' ? ' menu__anchor--isActive1' : '')} href="#Contact">
            Contact
          </a>
        </li>
      </ul>

      <p class={'menu__scroll' + (View !== 'Home' ? ' menu__scroll--isActive' : '')}>
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9 13 3 3m0 0 3-3m-3 3V8m9 4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            stroke="#000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </p>

      <a href="#Home">
        <svg
          class={'menu__arrow' + (View !== 'Home' ? ' menu__arrow--isActive' : '')}
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m15 11-3-3m0 0-3 3m3-3v8m9-4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            stroke="#000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
export default Menu;
