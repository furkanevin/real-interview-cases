import { Routes, Route } from 'react-router-dom';
import LogInPage from './pages/LogInPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NoteFoundPage';
import DetailPage from './pages/DetailPage';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* sadece giriş yapmış kullanıcılar */}
        <Route element={<ProtectedRoute />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/main/:id" element={<DetailPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
