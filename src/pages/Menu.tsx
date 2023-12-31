
import '../scss/Menu.scss';
import Page from '../models/enumeration-page';

function Menu({ View }: {View: string | boolean }) {
  return (
    <div className="menu">
      <ul className="menu__list">
        <li>
          <a className={'menu__anchor' + (View === Page.Presentation ? ' menu__anchor--isActive' : '')} href={"#"+Page.Presentation}>
            Presentation
          </a>
        </li>
        <li>
          <a className={'menu__anchor' + (View === Page.Education ? ' menu__anchor--isActive' : '')} href={"#"+Page.Education}>
            Formations
          </a>
        </li>
        <li>
          <a className={'menu__anchor' + (View === Page.Experience ? ' menu__anchor--isActive' : '')} href={"#"+Page.Experience}>
            Experiences
          </a>
        </li>
        <li>
          <a className={'menu__anchor' + (View === Page.Contact ? ' menu__anchor--isActive1' : '')} href={"#"+Page.Contact}>
            Contact
          </a>
        </li>
      </ul>

      <p className={'menu__scroll' + (View !== Page.Home ? ' menu__scroll--isActive' : '')}>
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
          className={'menu__arrow' + (View !== Page.Home ? ' menu__arrow--isActive' : '')}
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
