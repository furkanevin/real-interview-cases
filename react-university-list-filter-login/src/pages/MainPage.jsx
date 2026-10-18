import { useNavigate } from 'react-router-dom';
import Universities from '../components/Universities';
import SideBar from '../components/SideBar';
import { useAuth } from '../context/AuthContext';

const MainPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <header className="flex justify-between items-center px-6 py-4 border-b">
        <p className="text-gray-700">
          Welcome, <span className="font-semibold">{user.name}</span>
        </p>
        <button
          onClick={handleLogout}
          className="rounded-md border px-3 py-1.5 text-sm font-semibold text-gray-700 hover:bg-gray-100"
        >
          Log out
        </button>
      </header>

      <div className="container my-10 flex gap-10 max-sm:block sm:mx-0 md:mx-10">
        <div>
          <SideBar />
        </div>
        <div className="flex-1">
          <Universities />
        </div>
      </div>
    </>
  );
};

export default MainPage;
