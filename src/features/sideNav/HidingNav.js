import { Link } from 'react-router-dom';
import home from '../../resources/images/homeButton.png';

export function HidingNav() {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById('hidingNav').style.bottom = '0';
    } else {
      document.getElementById('hidingNav').style.bottom = '-50px';
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <>
      <nav id='hidingNav'>
        <Link to={'/home'} className='homeLink'>
          <img src={home} alt='Go home' />
        </Link>
      </nav>
    </>
  );
}
