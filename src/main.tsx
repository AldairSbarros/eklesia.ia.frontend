import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'


const container = document.getElementById('root');
const root = createRoot(container!);



root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
// Removidos todos os sx, style, className, e props de estilização dos componentes Material UI