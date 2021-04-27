import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    // retrieve button value
    const page = e.target.textContent;
    // get height, width and such features from button
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  }

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  }
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img className='nav-logo' src={logo} alt="stripe" />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button onMouseOver={displaySubmenu} className='link-btn'>products</button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className='link-btn'>developers</button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className='link-btn'>company</button>
          </li>
        </ul>
      </div>

      <button className="btn signin-btn">Sign in</button>

    </nav>
  )
}

export default Navbar
