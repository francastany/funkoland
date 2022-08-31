import './navBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CartWidget from './CartWidget';


function NavBarHeader() {
  return (
    <>
    <header>
      <nav className="navbar bg-light">
        <div className="container-fluid d-flex justify-content-between">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
          <span className="navbar-brand mb-0 h1">funkoLand</span>
          <CartWidget
            badgeContent={5}
          />
        </div>
      </nav>
      <nav className="categories container-fluid d-flex justify-content-evenly">
        <a href="#">Sports</a>
        <a href="#">Disney</a>
        <a href="#">Heroes</a>
        <a href="#">Movie & Series</a>
        <a href="#">Icons</a>
      </nav>
    </header>
    </>
  )
}

export default NavBarHeader;