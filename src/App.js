import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartBar from './components/context/CartBar';
import CartCheckout from './components/page/CartCheckout';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>


      <Layout />
      <BrowserRouter>

        <Routes>
        </Routes>

        <CartCheckout/>
        <Toaster/>
      </BrowserRouter>
    </>
  );
}

export default App;
