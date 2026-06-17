import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './router.jsx';

// Import Service Worker
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <AppRoutes/>

  </StrictMode>,
)
