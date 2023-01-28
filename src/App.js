import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './App.css';
import Layout from './pages/Layout';
import Books from './pages/Books';
import Categories from './pages/Categories';
import NoPage from './pages/NoPage';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Books />} />
          <Route path="categories" element={<Categories />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
