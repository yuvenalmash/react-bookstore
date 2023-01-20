import { Outlet, Link } from 'react-router-dom';
import './css/Layout.css';

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
                Books
              </button>
            </Link>
          </li>
          <li>
            <Link to="/categories">
              <button className="navBtn" type="button">
                Categories
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <p>profile</p>
    </nav>

    <Outlet />
  </main>
);

export default Layout;
