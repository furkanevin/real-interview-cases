import { createContext, useContext, useState } from 'react';
import api from '../utils/api';

const AuthContext = createContext();
const STORAGE_KEY = 'user';

const readStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(readStoredUser);

  // Şifre asla localStorage'a yazılmaz; sadece gösterim için gereken alanlar saklanır
  const saveSession = ({ id, name, email }) => {
    const sessionUser = { id, name, email };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessionUser));
    setUser(sessionUser);
  };

  // Not: Bu bir demo backend'idir (json-server). Gerçek bir uygulamada şifre
  // kontrolü sunucuda yapılır ve şifreler hash'lenerek saklanır.
  const login = async (email, password) => {
    const { data } = await api.get('users', { params: { email } });
    const found = data.find((u) => u.password === password);

    if (!found) throw new Error('Invalid email or password');

    saveSession(found);
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, saveSession }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
