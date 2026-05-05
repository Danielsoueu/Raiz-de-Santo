import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Umbanda from './pages/Umbanda';
import Candomble from './pages/Candomble';
import Costura from './pages/Costura';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Blog from './pages/Blog';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roupas-umbanda" element={<Umbanda />} />
        <Route path="/roupas-candomble" element={<Candomble />} />
        <Route path="/costura-sob-medida" element={<Costura />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Layout>
  );
}
