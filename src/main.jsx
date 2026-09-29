import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ProdutosProvider } from './contexts/ProdutosContext.jsx';
import { CategoriasProvider } from './contexts/CategoriasContext.jsx';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProdutosProvider>
        <CategoriasProvider>
          <App />
        </CategoriasProvider>
      </ProdutosProvider>
    </BrowserRouter>
  </StrictMode>,
);
