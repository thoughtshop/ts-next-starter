const Nav = () => (
  <>
    <nav className='navbar bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='./'>
          <svg width='250' height='40'>
            <rect width='250' height='40' />
          </svg>
        </a>

        <button
          className='navbar-toggle x btn collapsed'
          id='navToggle'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#collapsed-nav-menu'
          aria-controls='collapsed-nav-menu'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='toggler-line top'></span>
          <span className='toggler-line middle'></span>
          <span className='toggler-line bottom'></span>
        </button>
      </div>
    </nav>
    <div className='collapse' id='collapsed-nav-menu'>
      <div className='nav-contents'>
        <ul className='navbar-nav me-auto'>
          <li className='nav-item'>
            <a className='nav-link' aria-current='page' href='./item1.html'>
              Item 1
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='./item2.html'>
              Item 2
            </a>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default Nav;
