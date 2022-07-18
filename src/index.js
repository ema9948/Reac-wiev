import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//* Modo estricto (opens new window): StrictMode es una herramienta para destacar problemas potenciales en la aplicación.
//* ReactDOM (opens new window): React DOM se encarga de actualizar el DOM para igualar los elementos de React.
//* se encarga de renderizar los componentes.

