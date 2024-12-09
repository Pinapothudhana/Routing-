import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="bg-container">
    <div className="Wave">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="image"
      />
      <p className="para">Wave</p>
    </div>
    <ul className="container">
      <li className="item-list">
        <Link className="link" to="/">
          Home
        </Link>
      </li>
      <li className="item-list">
        <Link className="link" to="/about">
          About
        </Link>
      </li>
      <li className="item-list">
        <Link className="link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
