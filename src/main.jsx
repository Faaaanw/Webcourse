import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dist/css/main.css';
import App from './App.jsx';
import 'animate.css';

import { BrowserRouter } from 'react-router';
import ScrollToTop from './components/ScrollToTop.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
 