import Home from './pages/home/Home';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import './styles/global.scss';
import User from './pages/user/User';

// Layout ve router bileşenin dışında tanımlanır; böylece her render'da yeniden oluşturulmaz
const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/users/:id', element: <User /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
