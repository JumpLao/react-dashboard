import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@react-dashboard/auth'
import AppLayout from './layout/AppLayout';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
