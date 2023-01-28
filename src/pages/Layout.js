import { Outlet, Link } from 'react-router-dom';
import './css/Layout.scss';
import { FaUserAlt } from 'react-icons/fa';

const Layout = () => (
  <main id="mainLayout">
    <nav>
      <div>
        <ul>
          <li>
            <p id="logo">Bookstore CMS</p>
          </li>
          <li>
            <Link to="/">
              <button className="navBtn" type="button">
                BOOKS
              </button>
            </Link>
          </li>
          <li>
            <Link to="/categories">
              <button className="navBtn" id="categoriesBtn" type="button">
                CATEGORIES
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <FaUserAlt id="user" />
    </nav>

    <Outlet />
  </main>
);

export default Layout;
