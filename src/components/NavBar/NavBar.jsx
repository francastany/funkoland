import '../../css/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CartWidget from '../Cart/CartWidget';
import { Link } from 'react-router-dom';

function NavBarHeader() {
  return (
    <>
    <header>
      <nav className="navbar bg-light">
        <div className="container-fluid d-flex justify-content-around">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
          <Link className='text-decoration-none text-dark' to='/'><h2 className="navbar-title m-0">funkoLand</h2></Link>
          <Link className='text-decoration-none text-dark' to='/cart'>
            <CartWidget badgeContent={5} />
          </Link>
        </div>
      </nav>
      <nav className="categories container-fluid d-flex justify-content-evenly">
        <Link to='/category/sports'>Sports</Link>
        <Link to='/category/disney'>Disney</Link>
        <Link to='/category/heroes'>Heroes</Link>
        <Link to='/category/movies'>Movie & Series</Link>
        <Link to='/category/icons'>Icons</Link>
      </nav>
    </header>
    </>
  )
}

export default NavBarHeader;