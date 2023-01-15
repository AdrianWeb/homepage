import { Link } from 'react-router-dom';

export function Header() {
  return (
    <>
      <header>
        <Link className='headerHome' to={'/home'}>
          <h1 className='mainHeadings'>AdrianWeb's portfolio</h1>
        </Link>
      </header>
    </>
  );
}
