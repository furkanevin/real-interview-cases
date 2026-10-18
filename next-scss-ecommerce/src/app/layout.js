import './assets/css/main.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from 'next/font/google';
import Header from './(components)/Header';
import { BasketProvider } from './context/basketContext';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SCSS Store',
  description: 'E-commerce store built with Next.js App Router and SCSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BasketProvider>
          <Header />
          {children}
        </BasketProvider>
        <ToastContainer autoClose={2000} />
      </body>
    </html>
  );
}
