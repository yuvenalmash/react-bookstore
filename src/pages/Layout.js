import { Outlet, Link } from 'react-router-dom';

const Layout = () => (
  <main id="mainLayout">
    <nav>
      <div>
        <p id="logo">Bookstore CMS</p>
        <ul>
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
